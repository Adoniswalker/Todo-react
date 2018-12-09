import {
    FETCH_POSTS,
    NEW_POST,
    FETCH_POSTS_SUCCESS,
    GET_POST_REQUEST,
    SUCCESS_FETCH_POST,
    GET_POST_FAILURE
} from "../actions/types";

const initialState = {
    items: [],
    item: {}
};
export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                loading: true
            };
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload
            };
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
};

const initialSinglePost = {
    loading: false,
    post: {body: "",
        title: "",
        id: 0,
        userId: 0
    },
    error: null
};
export const singlePostReducer = (state = initialSinglePost, action) => {
    switch (action.type) {
        case SUCCESS_FETCH_POST:
            return {
                ...state,
                loading: false,
                post: action.payload,
                error: null
            };
        case GET_POST_REQUEST:
            return {
                loading: true,
                error: null
            };
        case GET_POST_FAILURE:
            return {
                loading: false,
                error: action.payload
            };
        default:
            return state
    }
}