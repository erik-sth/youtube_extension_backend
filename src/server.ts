import express, { Express } from 'express';
import { configureCors } from './startup/cors';
import baseRoute from './routes/base';
import reactionRoute from './routes/reaction';
import youtubePushNotification from './routes/YoutubePushNotification';
import creatorsRoute from './routes/creator';
// import addRateLimiter from './startup/limitRate';
import * as dotenv from 'dotenv';
import logger from './utils/logger';
import { testingConfig } from './startup/testing';
import connectToDatabase from './startup/db';
dotenv.config();

const app: Express = express();

// startup
configureCors(app);
// addRateLimiter(app);
connectToDatabase();
testingConfig();

app.use(express.json());
app.use('/', baseRoute);
app.use('/reaction', reactionRoute);
app.use('/youtubePushNotifications', youtubePushNotification);
app.use('/creator', creatorsRoute);

const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const server = app.listen(port, '0.0.0.0', () => {
    logger.info('Server started on port: ' + port);
});

export { server };
