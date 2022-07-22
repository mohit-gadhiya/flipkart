import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstname:{
        type: String, 
        required: true,
        trim: true,
        min: 5,
        max: 20,
        sparse: true
    },
    lastname:{
        type: String, 
        required: true,
        trim: true,
        sparse: true,
        min: 5,
        max: 20
    },
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        sparse: true,
        lowercase: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        sparse: true,
        trim: true,
        lowercase: true,
    },
    password:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    }
})

const user = mongoose.model('User',userSchema);

export default user;