import express from 'express';
import  {books} from './db.js';
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json('Hello Client!!!')
})
app.get('/books', (req, res) => {
  const {search='',limit=5, page=1}= req.query;
    let returnBook=(books.filter(b=>b.name.includes(search)));

  res.json(returnBook.slice(((+page)-1)*(+limit),((+page)-1)*(+limit)+(+limit)));
})
app.get('/books/:id', (req, res) => {
    if(books.find(b=>b.id==parseInt(req.params.id))){
        res.json(books.find(b=>b.id==parseInt(req.params.id)));
    }
    else{
        res.status(404).send({error:"אין ספר כזה!"})
    }
  
})
app.post('/books', (req, res) => {
    books.push(req.body);
  res.status(201).json({message:"הקובץ נוסף בהצלחה!"});
})
app.patch('/books/:id', (req, res) => {

 if(!books.find(b=>b.id==parseInt(req.params.id))){
     res.status(404).json({error:"אין כזה קובץ"});
 } 
 else{
  Object.assign(books.find(b=>b.id==parseInt(req.params.id)),req.body);
  res.json(books.find(b=>b.id==parseInt(req.params.id)))
 
 } 
})
app.patch('/books/:id/username', (req, res) => {

 if(!books.find(b=>b.id==parseInt(req.params.id))){
     res.status(404).json({error: "אין כזה קובץ"});
 } 
 else{
  books.find(b=>b.id==parseInt(req.params.id)).isAvailable=true;
  res.json(books.find(b=>b.id==parseInt(req.params.id)))
 
 } 
})
app.patch('/books/:id/username2', (req, res) => {

 if(!books.find(b=>b.id==parseInt(req.params.id))){
     res.status(404).json({error: "אין כזה קובץ"});
 } 
 else{
  books.find(b=>b.id==parseInt(req.params.id)).isAvailable=false;
  res.json(books.find(b=>b.id==parseInt(req.params.id)))
 
 } 
})
app.delete('/books/:id', (req, res) => {
if(books.some(b=>b.id == parseInt(req.params.id))){
    books=books.filter(b=>b.id !== parseInt(req.params.id))
    res.status(204).send();
 } 
 else{
  res.status(404).json({error:"אין כזה קובץ"});
 } 
})

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000')
})