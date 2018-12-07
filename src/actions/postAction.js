import {FETCH_POSTS, NEW_POST, FETCH_POSTS_SUCCESS} from "./types";
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
    return Axios.get("https://jsonplaceholder.typicode.com/todos/").then(response =>
        dispatch(fetchPostsSuccess(response.data))
    );
};

export const createPost = postData => dispatch => {
    let headers = {
        "Content-Type": "application/json"
    };
    return Axios.post(
        "https://jsonplaceholder.typicode.com/todos/",
        JSON.stringify(postData),
        {headers: headers}
    ).then(response =>
        dispatch({
            type: NEW_POST,
            payload: response.data
        })
    );
};
