// Define the interface for the Reaction object
export interface Reaction {
    channelId: string;
    reactionVideoLink: string;
    matchedVideoString: string;
}

// Define the interface for the Video object which extends Mongoose's Document
export interface Video extends Document {
    videoLink: string;
    reactions: Reaction[];
}
