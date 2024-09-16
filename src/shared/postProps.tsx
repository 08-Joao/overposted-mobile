export interface PostProps { 
    postOwnership: string; // User Id
    postId: string; // Post Id
    postDescription?: string; // Text on Post
    postImage?: string[]; // At maximum of 5 images on Post
    userLiked: boolean;
    postLikes: string;
    postOverpost: string;
    postComments: string;
}