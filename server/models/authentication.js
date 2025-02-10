import mongoose, {model} from "mongoose";

//Basic User Doc
const authenticationSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        Type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})