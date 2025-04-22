const userService=require("../services/user.service")

const getUserProfile=async (req,res)=>{
    console.log("profile");
    try {
        const jwt= req.headers.authorization?.split(' ')[1];

        if(!jwt){
            return res.status(404).send({error:"token not found"})
        }
        const user=await userService.getUserProfileByToken(jwt)

        return res.status(200).send(user)

    
    } catch (error) {
        console.log("error from controller - ",error)
        return res.status(500).send({error:error.message})
    }
}

const getAllUsers=async(req,res)=>{
    try {
        const users=await userService.getAllUsers()
        return res.status(200).send(users)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const addAddress = async (req, res) => {
    try {
        const { id } = req.params;
        const { state, city, pincode } = req.body;

        const updatedUser = await userService.addAddress(id, { state, city, pincode });

        return res.status(200).send({
            message: "Address updated successfully",
            user: updatedUser
        });
    } catch (error) {
        console.log("error from controller - ", error);
        return res.status(500).send({ error: error.message });
    }
};
module.exports = {
    getUserProfile,
    getAllUsers,
    addAddress
};
