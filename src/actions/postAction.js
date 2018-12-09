import {
    FETCH_POSTS,
    NEW_POST,
    FETCH_POSTS_SUCCESS,
    GET_POST_REQUEST,
    SUCCESS_FETCH_POST,
    GET_POST_FAILURE
} from "./types";
import Axios from "axios";

export const fetchingPosts = () => ({
    type: FETCH_POSTS
});

export const fetchPostsSuccess = posts => ({
    type: FETCH_POSTS_SUCCESS,
    payload: posts
});

export const fetchPosts = () => dispatch => {
    dispatch(fetchingPosts());
    return Axios.get("https://jsonplaceholder.typicode.com/posts").then(response =>
        dispatch(fetchPostsSuccess(response.data))
    );
};

export const createPost = postData => dispatch => {
    let headers = {
        "Content-Type": "application/json"
    };
    return Axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        JSON.stringify(postData),
        {headers: headers}
    ).then(response =>
        dispatch({
            type: NEW_POST,
            payload: response.data
        })
    );
};

export const fetchSinglePost = id => dispatch => {
    dispatch({
        type: GET_POST_REQUEST
    });
    return Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => dispatch({
            type: SUCCESS_FETCH_POST,
            payload: res.data
        }))
        .catch(e => dispatch({
            type: GET_POST_FAILURE,
            payload: e
        }));
};