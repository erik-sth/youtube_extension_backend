import express from 'express';
import xml2js from 'xml2js';

const router = express.Router();

// This route handles YouTube's verification of the subscription
router.get('/webhook', (req, res) => {
    const challenge = req.query['hub.challenge'];
    if (challenge) {
        res.send(challenge); // Respond with the challenge to verify the subscription
    } else {
        res.status(400).send('Invalid request');
    }
});

// Inside your POST route for /webhook
router.post('/webhook', (req, res) => {
    const xml = req.body;

    xml2js.parseString(xml, (err, result) => {
        if (err) {
            console.error('Error parsing XML:', err);
            return res.status(500).send('Error parsing notification');
        }

        const entry = result.feed.entry[0];
        const videoId = entry['yt:videoId'][0];
        const channelId = entry['yt:channelId'][0];
        const title = entry.title[0];

        console.log(
            `New video uploaded: ${title} (Video ID: ${videoId}, Channel ID: ${channelId})`
        );

        // Process the video (e.g., notify users, update database, etc.)
        res.status(204).send(); // Respond with 204 No Content
    });
});

export default router;
