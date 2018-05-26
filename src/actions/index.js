export const ADD_POST = 'ADD_POST';
export const ADD_COMMENT = 'ADD_COMMENT';

export function addPost({ post, title }){ 
    return{
        type: ADD_POST,
        post,
        title,
    }
}