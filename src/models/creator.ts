import { Schema, model } from 'mongoose';
import { Creator } from '@types'; // Import the Creator type

// Define the Creator schema with proper Mongoose types
const CreatorSchema = new Schema<Creator>({
    _id: { type: Schema.Types.ObjectId },
    channels: [
        {
            channelName: { type: String, required: true }, // Name field in each object of the array
            channelId: { type: String, required: true }, // Name field in each object of the array
            dataFetched: { type: Boolean, required: true }, // Boolean for dataFetched
            subscribed: { type: Boolean, required: true }, // Boolean for subscribed
        },
    ], // Array of objects
    reactionVideoCount: { type: Number, default: 0 }, // Default to 0 if not provided
    videoCount: { type: Number, default: 0 }, // Default to 0 if not provided
    name: { type: String, required: true }, // Name is required
});

// Create the Creator model
export const CreatorModel = model<Creator>('yt-react_creator', CreatorSchema);
