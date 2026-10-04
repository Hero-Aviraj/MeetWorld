import express from "express"
import {login} from "./auth.controller.js"
 const routs=express.Router();

 routs.post("/login",login);

 export default routs;



