import User from '../model/userSchema.js';

export const userSignup = async (req, res) => {
    try {
        const exist = await User.findOne({username: req.body.username})
        if(exist) return res.status(401).json({message: "User already exists"});
        
        const user = req.body;
        const newUser = new User(user);
        await newUser.save();
        res.status(200).json({message: "User created successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const userLogin = async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const user = await User.findOne({username:username, password:password});
        if(user) {
            return res.status(200).json(`${username} login successful`);
        }else{
            return res.status(401).json({message: "Invalid username or password"});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}