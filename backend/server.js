import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.get('/', (req, res) => res.send('Hello world'));

app.listen(3005, () => {
    console.log('server started on port 3005');
});