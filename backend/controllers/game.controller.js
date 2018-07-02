import Game from '../models/game';

const GameController = {};

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