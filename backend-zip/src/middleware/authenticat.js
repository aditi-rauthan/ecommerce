const jwtProvider=require("../config/jwtProvider")
const userService=require("../services/user.service")


const authenticate = async(req,res,next)=>{

    try {
        console.log("cart bend")
        const token=req.headers.authorization?.split(" ")[1]
        if(!token){
            return req.status(404).send({message:"token not found"})
        }

        const userId=jwtProvider.getUserIdFromToken(token);
        console.log(userId)
        const user=await userService.findUserById(userId);

        req.user=user;
        next();
        // console.log(req.user);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
    
}

module.exports=authenticate;