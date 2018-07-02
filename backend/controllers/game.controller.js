import Game from '../models/game';

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
// GameController.addGame = async (req, res) => {

//     try {
//         if (!req.body.game.title) {
//             res.status(403).end();
//         }

//         const newGame = new Game(req.body.game);


//     }

//     catch(err) {
//         console.log(err)
//     }
// }

export default GameController;