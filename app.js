//מוסיפה בכותרת של התגובה מהשרת הוראות אבטחה לדפדפן
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import express from 'express';
import mainRouter from "./routes/index.route.js";
const app = express();
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use('/api',mainRouter);


app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000')
})














