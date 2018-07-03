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

// Update game by cuid
router.put('/games/:cuid', (req, res) => {
    GameController.updateGame(req, res)
});

// Delete game by cuid
router.delete('/games/:cuid', (req, res) => {
    GameController.deleteGame(req, res);
});

export default router;
