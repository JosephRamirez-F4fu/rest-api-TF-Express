import Users from "../models/user.model.js";

//obtener todos los usuarios
export const getUsers = async (req, res) => {
  try {
    const response = await Users.find({});
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};

//obtener un usuario por id
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Users.findById(id);
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};

//eliminar un usuario por id
export const delUser = async (req, res) => {
  try {
    const response = await Users.findByIdAndDelete(req.body.user_id);
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};

//editar usuario por id
export const putUser = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Users.updateOne({ _id: id }, req.body);
    res.json(response);
  } catch (error) {}
};

//crear usuario
export const postUser = async (req, res) => {
  try {
  
   const { email, firstname, lastname, password } = req.body;

   const existingUser = await Users.findOne({email});
   
   if(existingUser){
    return res.status(400).json({error:'Ya existe un usuario con este correo electrónico'})
   }
   const user = new Users({ email, firstname, lastname, password });

   await user.save();
   res.status(201).json({message:user});
  } catch (error) {
   res.status(500).json(error);
  }
};

//obtener un usuario por password y correo
export const postUserPassEmail = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await Users.findOne({email});
   
    if(!existingUser){
     return res.status(400).json({error:'no existe un usuario con este correo'})
    }

    const response = await Users.find({ email: email, password: password });
    if(!response){
      return res.status(400).json({'error':'contraseña equivocada'}) 
    }
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};
