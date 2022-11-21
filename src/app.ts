import express from 'express';
import movieRouter from './routes/movie.route';
import studentRouter from './routes/student.route';
import bankRouter from './routes/bank.route';

const app = express();
app.use(express.json());

app.use('/api/v1/movie', movieRouter);
app.use('/api/v1/student', studentRouter);
app.use('/api/v1/customer', bankRouter);

app.listen(5000, () => {
    console.log('Server is running in port 5000');
  });