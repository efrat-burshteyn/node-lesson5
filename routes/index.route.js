import {Router} from "express";
import bookRouter from './book.route';
import userRouter from './user.route';
const router = Router();
router.use('/books',bookRouter);
router.use('/user',userRouter);
export default router;
