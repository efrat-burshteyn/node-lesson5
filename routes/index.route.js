import {Router} from "express";
import { schemas } from "../Middlewares/schema.js";
import bookRouter from './book.route.js';
import userRouter from './user.route.js';
const router = Router();
router.use('/books',bookRouter);
router.use('/user',userRouter);
export default router;
