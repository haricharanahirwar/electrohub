import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload'

const app = express();

//to link router
import UserRouter from './routes/user.router.js';
import CategoryRouter from './routes/category.router.js';

//configuration to fetch req body content : body parser middleware
//used to fetch req data from methods like : POST , PUT , PATCH , DELETE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//configuration to resolve cross origin problem
app.use(cors());

app.use(fileUpload);
//router level middleware to link routers
app.use("/user",UserRouter);
app.use("/category",CategoryRouter);

app.listen(3001);
console.log("server invoked at link http://localhost:3001");