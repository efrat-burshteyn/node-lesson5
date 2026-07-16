import {Router} from "express";
import { Client, getAllBooks ,getOneBook ,postBook, updateBook ,borrowBook, returnBook ,deleteBook}
from "../controllers/book.controllers.js";
const router =Router();

router.get('/',Client);

router.get('/books',getAllBooks);

router.get('/books/:id', getOneBook);

router.post('/books',postBook);

router.patch('/books/:id', updateBook);


router.patch('/books/:id/borrow/:userId', borrowBook);


router.patch('/books/:id/return/:userId',returnBook);


router.delete('/books/:id',deleteBook);

export default router;