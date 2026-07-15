import { Router } from "express";
import {users} from "../users";
const router =Router();

export const signUp=(req,res)=>{
    const {username, email , password}=req.body;
    const newUser={
        id: users.length+1,
        username,
         email ,
          password,
          borrowedBooks: []
        
    };
    users.push(newUser);
    res.status(201).json({massage: "נרשמת בהצלחה!"})
}
export const signIn=(req,res)=>{
    const {email , password}=req.body;
    if(users.find(u=>u.password===password && u.email===email)){
        res.status(200).json({massage: "התחברת בהצלחה!"})
    }
    else{
        res.status(401).json({error: "לא נמצא משתמש כזה"})
    }
};
