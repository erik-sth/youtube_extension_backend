import axios from 'axios';

export const subscribeToYouTubeChannel = async (channelId: string) => {
    const callbackUrl =
        'https://youtube-extension-backend.onrender.com/youtubePushNotifications/webhook';

    const topicUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;

    try {
        const response = await axios.post(
            'https://pubsubhubbub.appspot.com/subscribe',
            null,
            {
                params: {
                    'hub.mode': 'subscribe',
                    'hub.topic': topicUrl,
                    'hub.callback': callbackUrl,
                    'hub.verify': 'async', // You can also use 'sync'
                },
            }
        );

        console.log('Subscription successful', response.data);
    } catch (error) {
        console.error(
            'Subscription error:',
            error.response ? error.response.data : error.message
        );
    }
};
