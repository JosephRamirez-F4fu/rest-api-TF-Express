import Users from "../models/user.model.js"

export  const  getUsers = async (req,res)=>{
   const response = await Users.find({})
   res.json(response);
}