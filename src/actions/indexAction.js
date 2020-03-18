export const REMOVE_ITEM = 'REMOVE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';

export const removeItem = item => {
    return {
        type: REMOVE_ITEM,
        payload: item
    }
}

export const addItem = newItem => {
    return {
        type: ADD_ITEM,
        payload: newItem
    }
}