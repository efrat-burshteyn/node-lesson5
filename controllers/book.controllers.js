import  {books} from '../db.js';
import  {users} from '../users.js';

export const Client=(req, res)=>{
  res.json('Hello Client!!!')
};
export const getAllBooks=(req, res,next)=>{
  const {search='',limit=5, page=1}= req.query;
    let returnBook=(books.filter(b=>b.name.includes(search)));

  res.json(returnBook.slice(((+page)-1)*(+limit),((+page)-1)*(+limit)+(+limit)));
};
export const getOneBook=(req, res,next)=>{
    if(books.find(b=>b.id==parseInt(req.params.id))){
        res.json(books.find(b=>b.id==parseInt(req.params.id)));
    }
    else{
      const error =new Error("אין ספר כזה!");
      error.status=404;
      next(error);
    }
};
export const postBook=(req, res,next)=>{
    books.push(req.body);
  res.status(201).json({message:"הספר נוסף בהצלחה!"});
};
export const updateBook=(req, res,next)=>{

 if(!books.find(b=>b.id==parseInt(req.params.id))){
      const error =new Error("אין ספר כזה!");
      error.status=404;
      next(error);
 } 
 else{
  Object.assign(books.find(b=>b.id==parseInt(req.params.id)),req.body);
  res.json(books.find(b=>b.id==parseInt(req.params.id)))
 
 } 
}
export const borrowBook=(req, res,next)=>{
 if(!books.find(b=>b.id==parseInt(req.params.id))||!users.find(u=>u.id==parseInt(req.params.userId))){
     const error =new Error("אין ספר/משתמש כזה!");
      error.status=404;
      next(error);
     
 } 
 if(books.find(b=>b.id==parseInt(req.params.id)).isAvailable){
    const error =new Error(" הספר מושאל!");
      error.status=404;
      next(error);
 }
 else{
  books.find(b=>b.id==parseInt(req.params.id)).isAvailable=true;
  users.find(u=>u.id==parseInt(req.params.userId)).borrowedBooks.push(parseInt(req.params.id));
  res.json(books.find(b=>b.id==parseInt(req.params.id)))

 } 
}
export const returnBook=(req, res,next)=>{
 if(!books.find(b=>b.id==+(req.params.id))||!users.find(u=>u.id==+(req.params.userId))){
      const error =new Error("אין ספר/משתמש כזה!");
      error.status=404;
      next(error);
 } 
 else{
  books.find(b=>b.id==parseInt(req.params.id)).isAvailable=false;
  users.find(u=>u.id==+(req.params.userId)).borrowedBooks=users.find(u=>u.id==+(req.params.userId)).borrowedBooks.filter(id=>id!==parseInt(req.params.id));
  res.status(200).json(books.find(b=>b.id==parseInt(req.params.id)))
 
 } 
};
export const deleteBook=(req, res,next)=>{
if(books.some(b=>b.id == parseInt(req.params.id))){
    books=books.filter(b=>b.id !== parseInt(req.params.id))
    res.status(204).send();
 } 
 else{
     const error =new Error("אין ספר כזה!");
      error.status=404;
      next(error);
 } 
};
