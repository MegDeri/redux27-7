import uuid from 'uuid';

 export const ADD_COMMENT = 'ADD_COMMENT';
 export const REMOVE_COMMENT = 'REMOVE_COMMENT';
 export const EDIT_COMMENT = 'EDIT_COMMENT';
 export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
 export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

export function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
};

export function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        text,
        id
    }
};

export function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
};

export function thumbUpComment(idComment) {
    return {
        type: THUMB_UP_COMMENT,
        id: idComment
    }
};

export function thumbDownComment(idComment) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: idComment
    }
};