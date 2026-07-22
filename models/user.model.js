import { Model,Schema } from "mongoose";
    const userSchema=new Schema({
        username: String,
        email:{
            type:String,
            required: true,
            lowercase: true
        },
        phone:{
            type: String,
             match: /^[0-9]{1,2}-?[0-9]{7}$/
            },
        password:{
            type: String,
            required: true,
            minlength: 4
        },
        dateSign:{
            type: Date,
            default: Date.now
        },
        borrowedBooks: [{code:Number,nameBook: String}]
    });
    export const User = model("User",userSchema);
      