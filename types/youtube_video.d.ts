export interface YouTubeThumbnail {
    url: string;
    width: number;
    height: number;
}

export interface YouTubeThumbnails {
    default: YouTubeThumbnail;
    medium: YouTubeThumbnail;
    high: YouTubeThumbnail;
    standard?: YouTubeThumbnail;
    maxres?: YouTubeThumbnail;
}

export interface YouTubeLocalized {
    title: string;
    description: string;
}

export interface YouTubeSnippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: YouTubeThumbnails;
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    defaultLanguage?: string;
    localized: YouTubeLocalized;
    defaultAudioLanguage?: string;
}

export interface YouTubeVideo {
    kind: string;
    etag: string;
    id: string;
    snippet: YouTubeSnippet;
}
