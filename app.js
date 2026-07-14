import express from 'express';
import  {books} from './db.js';
const app = express()

app.get('/', (req, res) => {
  res.send('Hello Client!!!')
})
app.get('/books', (req, res) => {
  res.send(books);
})
app.get('/books:id', (req, res) => {
    if(books.find(b=>b.id==parseInt(req.params.id))){
        res.send(books.find(b=>b.id==parseInt(req.params.id)));
    }
    else{
        res.status(404).send("אין ספר כזה!")
    }
  
})
app.post('/books', (req, res) => {
    books.push(req.body);
  res.status(201).send("הקובץ נוסף בהצלחה!");
})

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000')
})