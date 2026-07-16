import cors from 'cors';
import express from 'express';
import mainRouter from "./routes/index.route.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api',mainRouter);


app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000')
})














