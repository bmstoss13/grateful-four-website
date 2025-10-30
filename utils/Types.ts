export type Video = {
    id: string;
    title?: string;
    uploadedAt?: string;
}

export type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    message?: string;
    isSubscribed: boolean;
}

export type navTypes = ['home', 'about-us', 'videos', 'contact']