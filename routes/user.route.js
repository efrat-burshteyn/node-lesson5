import { Router } from "express";
import { userSchema } from "../schema.js";
import { SignIn } from "../schema.js";
import { schemas } from "../Middlewares/schema.js";
import {signUp,signIn} from "../controllers/user.controllers.js";
const router =Router();

router.post('/sign-up',schemas(userSchema),signUp);

router.post('/sign-in',schemas(SignIn),signIn);


export default router;