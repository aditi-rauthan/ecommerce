// const userService=require("../services/user.service.js")
// const jwtProvider=require("../config/jwtProvider.js")
// const bcrypt=require("bcrypt")
// const cartService=require("../services/cart.service.js")


// const register=async(req,res)=>{

//     try {
//         const user=await userService.createUser(req.body);
//         const jwt=jwtProvider.generateToken(user._id);

//         await cartService.createCart(user);

//         return res.status(200).send({jwt,message:"register success"})

//     } catch (error) {
//         return res.status(500).send({error:error.message})
//     }
// }
// const login=async(req,res)=>{
//     const {password,email}=req.body
//     try {
//         const user = await userService.getUserByEmail(email);

//         if (!user) {
//             return res.status(404).json({ message: 'User not found With Email ', email});
//         }

//         const isPasswordValid=await bcrypt.compare(password,user.password)

//         if(!isPasswordValid){
//             return res.status(401).json({ message: 'Invalid password' });
//         }

//         const jwt=jwtProvider.generateToken(user._id);

//         return res.status(200).send({jwt,message:"login success"});

//     } catch (error) {
//         return res.status(500).send({error:error.message})
//     }
// }
// module.exports={register,login}

// auth.controller.js
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Vendor = require("../models/vendor_model");
const User = require("../models/user.model"); // Optional, if you have a user model

// ✅ Register Route
const register = async (req, res) => {
  const { name, email, password, role, acceptedTerms } = req.body;

  try {
    // Check for existing user or vendor
    const existing = role === "vendor" 
      ? await Vendor.findOne({ email }) 
      : await User.findOne({ email });

    if (existing) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    let newAccount;
    if (role === "vendor") {
      if (!acceptedTerms)
        return res.status(400).json({ message: "Terms must be accepted" });

      newAccount = new Vendor({ name, email, password: hashedPassword, role, acceptedTerms });
    } else {
      newAccount = new User({ name, email, password: hashedPassword });
    }

    await newAccount.save();
    res.status(201).json({ message: "Registered successfully", user: newAccount });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: err.message });
  }
};

// ✅ Login Route
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Try to find user or vendor
    const user = await Vendor.findOne({ email }) || await User.findOne({ email });

    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Incorrect password" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.SECERET_KEY,
      { expiresIn: "1d" }
    );
    console.log("Generated Token:", token);

    res.status(200).json({ message: "Login successful", token, user });
  } catch (err) {
    res.status(500).json({ message: "Login error", error: err.message });
  }
};

module.exports = { register, login };
