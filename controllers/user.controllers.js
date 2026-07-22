import { Router } from "express";
import {User} from "../models/user.model.js";
const router =Router();
  

export const getAllUsers = async(req,res,next)=>{
    try{
        const users=await User.find();
        res.json(users)
    }
    catch(error){
        next(error);
    }
};

export const signUp = async(req,res,next)=>{
    try{
        await User.create(req.body);
        res.status(201).json({massage: "נרשמת בהצלחה!"});
    }
    catch(error){
        next(error);
    }  
};
export const signIn = async(req,res,next)=>{
    try{
        const {email , password}=req.body;
        const user = await User.findOne({email , password});
    if(!user){
        const error =new Error("לא נמצא משתמש כזה");
        error.status=404;
        return next(error);
    }
     res.status(200).json({message: "התחברת בהצלחה!"})
    }
    catch(error){
        next(error);
    }
};
