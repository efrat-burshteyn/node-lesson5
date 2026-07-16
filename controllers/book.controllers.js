import  {books} from '../db.js';
import  {users} from '../users.js';

export const Client=(req, res)=>{
  res.json('Hello Client!!!')
};
export const getAllBooks=(req, res)=>{
  const {search='',limit=5, page=1}= req.query;
    let returnBook=(books.filter(b=>b.name.includes(search)));

  res.json(returnBook.slice(((+page)-1)*(+limit),((+page)-1)*(+limit)+(+limit)));
};
export const getOneBook=(req, res)=>{
    if(books.find(b=>b.id==parseInt(req.params.id))){
        res.json(books.find(b=>b.id==parseInt(req.params.id)));
    }
    else{
        res.status(404).send({error:"אין ספר כזה!"})
    }
}
export const postBook=(req, res)=>{
    books.push(req.body);
  res.status(201).json({message:"הספר נוסף בהצלחה!"});
};
export const updateBook=(req, res)=>{

 if(!books.find(b=>b.id==parseInt(req.params.id))){
     res.status(404).json({error:"אין כזה ספר"});
 } 
 else{
  Object.assign(books.find(b=>b.id==parseInt(req.params.id)),req.body);
  res.json(books.find(b=>b.id==parseInt(req.params.id)))
 
 } 
}
export const borrowBook=(req, res)=>{
 if(!books.find(b=>b.id==parseInt(req.params.id))||!users.find(u=>u.id==parseInt(req.params.userId))){
    res.status(404).json({error: "אין כזה משתמש או ספר"});
     
 } 
 if(books.find(b=>b.id==parseInt(req.params.id)).isAvailable){
    res.status(404).json({error: "הספר מושאל  "});
 }
 else{
  books.find(b=>b.id==parseInt(req.params.id)).isAvailable=true;
  users.find(u=>u.id==parseInt(req.params.userId)).borrowedBooks.push(parseInt(req.params.id));
  res.json(books.find(b=>b.id==parseInt(req.params.id)))

 } 
}
export const returnBook=(req, res)=>{
 if(!books.find(b=>b.id==+(req.params.id))||!users.find(u=>u.id==+(req.params.userId))){
     res.status(404).json({error: "אין כזה ספר או משתמש"});
 } 
 else{
  books.find(b=>b.id==parseInt(req.params.id)).isAvailable=false;
  users.find(u=>u.id==+(req.params.userId)).borrowedBooks=users.find(u=>u.id==+(req.params.userId)).borrowedBooks.filter(id=>id!==parseInt(req.params.id));
  res.status(200).json(books.find(b=>b.id==parseInt(req.params.id)))
 
 } 
};
export const deleteBook=(req, res)=>{
if(books.some(b=>b.id == parseInt(req.params.id))){
    books=books.filter(b=>b.id !== parseInt(req.params.id))
    res.status(204).send();
 } 
 else{
  res.status(404).json({error:"אין כזה ספר"});
 } 
};
