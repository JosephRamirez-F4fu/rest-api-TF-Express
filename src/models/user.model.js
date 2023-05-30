import {Schema,model} from  "mongoose";

const usersSchema = new Schema ({
    firstname : String,
    lastname : String,
    email: String,
    password: String
});

const User = model('User',usersSchema);
export default User;