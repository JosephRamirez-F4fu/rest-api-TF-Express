import mongoose from "mongoose";
const uri = `mongodb://34.199.33.217:27017/db_Nition`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Conectado a MongoDB'))
.catch(error => console.error('Error al conectar a MongoDB:', error));

export default mongoose;

