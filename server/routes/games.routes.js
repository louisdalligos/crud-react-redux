import { Router } from 'express';
import GameController from '../controllers/game.controller';

const router = new Router();


// Get all games
router.get('/games', (req, res) => {
    GameController.getAll(req, res)
});

// Add new game
router.post('/games', (req, res) => {
    GameController.addGame(req, res)
});

// Update game
router.put('/games', (req, res) => {
    GameController.updateGame(req, res)
})

export default router;
