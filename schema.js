import joi from 'joi';
export const userSchema=joi.object({
    username: joi.string().min(2).required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).required(),
});
export const bookSchema=joi.object({
    name: joi.string().min(2).required(),
    category: joi.string().min(4).required(),
    price: joi.number().positive().required(),
    isAvailable: joi.boolean().required(),
});
export const SignIn=joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(8).required(),
});