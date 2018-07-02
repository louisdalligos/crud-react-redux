import express from 'express';
import mongodb from 'mongodb';

const app = express();
const dbURL = 'ds121861.mlab.com:21861/crudwithredux';

mongodb.MongoClient.connect(dbURL, { useNewUrlParser: true }, function(err, db) {

    app.get('/api/games', (req, res) => {
        db.collection('games').find({}).toArray((err, games ) => {
            res.json({ games });
        });
    });

    app.listen(8080, () => console.log('Server is running on localhost:8080'));

});