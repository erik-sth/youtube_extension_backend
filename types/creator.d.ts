import { Types } from 'mongoose'; // Use Mongoose's Types for ObjectId

// Define the interface for the Creator object
export interface Creator {
    _id: Types.ObjectId; // Use Types.ObjectId from Mongoose
    channels: {
        channelName: string;
        channelId: string;
        dataFetched: boolean;
        subscribed: boolean;
    }[]; // Array of strings
    videoCount: number; // Number of total videos
    reactionVideoCount: number; // Number of reaction videos
    name: string;
}
