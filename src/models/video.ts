import { Schema, model } from 'mongoose';
import { Reaction, Video } from 'types/reaction';

// Create the Reaction schema
const ReactionSchema = new Schema<Reaction>({
    channelId: { type: String, required: true },
    reactionVideoLink: { type: String, required: true },
    matchedVideoString: { type: String, required: true },
});

// Create the Video schema
const VideoSchema = new Schema<Video>({
    videoLink: { type: String, required: true },
    reactions: { type: [ReactionSchema], required: true },
});

// Add an index to the `videoLink` field for efficient searching
VideoSchema.index({ videoLink: 1 });

// Create the Video model
export const VideoModel = model<Video>('Video', VideoSchema);
