import Game from '../models/game';
import cuid from 'cuid';

const GameController = {};

// get all
GameController.getAll = async (req, res) => {

    try {
        await Game.find().sort('-dateAdded').exec((err, games) => {
            if (err) {
                res.status(500).send(err);
            }
            res.json({ games });
        });
    }
    
    catch(err) {
        res.send(err)
    }

}

// add game 
GameController.addGame = async (req, res) => {

    try {
        if (!req.body.game.title && !req.body.game.cover) {
            res.status(403).end();
        }

        const newGame = new Game(req.body.game);

        console.log(newGame);

        // sanitize input
        newGame.title = newGame.title;
        newGame.cover = newGame.cover;
        newGame.cuid = cuid();

        newGame.save((err, saved) => {
            if (err) {
                res.status(500).send(err);
            }

            res.json({ game: saved })
        })
    }

    catch(err) {
        console.log(err)
    }
}

export default GameController;