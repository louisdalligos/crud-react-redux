import express from 'express';
import bodyParser from 'body-parser';
import connectToDb from './db/connect';
import games from './routes/games.routes';

const server = express();

connectToDb();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
    extended: false
}));




//app.get('/', (req, res) => res.send('Hello world'));
server.use('/api', games);

server.listen(3005, () => {
    console.log('server started on port 3005');
});