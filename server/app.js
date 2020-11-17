import express from 'express';
import cors from 'cors';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import model from './models';
import routes from './routes';

// mongoose instance connection url connection
mongoose.connect('mongodb://localhost:27017/todoDb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.Promise = global.Promise; // creates global promise for mongoose schema

const app = express();

app.use(cors()); // Gives access to local server to be used on todoapp UI
app.options('*', cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

routes(app);

export default app;
