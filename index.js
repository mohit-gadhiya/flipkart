import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import defaultData from './default.js';
import Router from './routes/routes.js';
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express();
dotenv.config();

const connect = () => mongoose.connect(process.env.MONGO).then(() => console.log('Connected to MongoDB')).catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',Router);


app.listen(process.env.PORT,()=>{
    connect();
    console.log(`Server is running on port ${process.env.PORT}`);
})

// defaultData();