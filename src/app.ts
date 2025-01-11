import express from 'express';
import cors from 'cors';
import { configDotenv } from 'dotenv';
import connectDB from './config/Db';
import Userroutes from '../src/routes/User';
import productRoutes from './routes/Productrou'
configDotenv();
const port = process.env.PORT || 3000;
const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/user', Userroutes);
app.use('/api/product', productRoutes);

app.route('/').get((req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});