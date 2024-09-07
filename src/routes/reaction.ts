import express, { NextFunction, Request, Response } from 'express';
import logger from '../utils/logger';
import { VideoModel } from '../models/video';

const router = express.Router();

// Middleware to validate videoLink
const validateVideoLink = (req: Request, res: Response, next: NextFunction) => {
    const { videoLink } = req.params;

    // Example validation: Check if videoLink is a non-empty string
    if (!videoLink || typeof videoLink !== 'string') {
        return res.status(400).json({ message: 'Invalid video link' });
    }

    next();
};

// Apply validation middleware to the route
router.get(
    '/:videoLink',
    validateVideoLink,
    async (req: Request, res: Response) => {
        logger.info(`GET request for videoLink: ${req.params.videoLink}`);

        try {
            const decodedVideoLink = decodeURIComponent(req.params.videoLink);

            const video = await VideoModel.findOne({
                videoLink: decodedVideoLink,
            });

            if (video) {
                res.status(200).json(video);
            } else {
                res.status(404).json({ message: 'Video not found' });
            }
        } catch (error) {
            logger.error('Error retrieving video:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
);
export = router;
