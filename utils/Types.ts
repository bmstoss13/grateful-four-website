export type DynamoVideoItem = {
    PK: string;
    SK: string;
    EntityType: string;
}

export type Video = {
    id: string;
    title?: string;
    uploadedAt?: string;
}

export type PaginatedVideosResponse = {
    videos: DynamoVideoItem[];
    nextPageToken: string | null;
}

export type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    isSubscribed: boolean;
}

export type FormErrors = {
    firstName?: string; //e.g. First name is required
    lastName?: string; //e.g. Last name is required
    email?: string; //e.g. Emails is required or improper email format
    message?: string;
    isSubscribed?: string;
}

export type navTypes = ['home', 'about-us', 'videos', 'contact']