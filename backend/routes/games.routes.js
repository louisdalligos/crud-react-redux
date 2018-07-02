import { Router } from 'express';
import GameController from '../controllers/game.controller';

const router = new Router();

router.get('/games', (req, res) => {
    GameController.getAll(req, res)
});

export default router;