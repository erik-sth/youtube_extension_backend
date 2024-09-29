import express, { Request, Response } from 'express';
import logger from '../utils/logger'; // Use relative path
import { CreatorModel } from '../models/creator'; // Use correct relative path
import { subscribeToYouTubeChannel } from '../SubscribeToChannel';

const router = express.Router();

// GET all creators
router.get('/', async (req: Request, res: Response) => {
    logger.debug('GET request for all creators');

    try {
        const creators = await CreatorModel.find();
        res.json(creators);
    } catch (error) {
        logger.error('Error retrieving creators:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/:channelId/subscribe', async (req: Request, res: Response) => {
    subscribeToYouTubeChannel(req.params.channelId);
    res.send('Subscribed');
});
export default router;
