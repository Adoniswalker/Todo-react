import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postAction";
import PropTypes from "prop-types";
class Posts extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(newProps) {
        if (newProps.newPost) {
            this.props.posts.unshift(newProps.newPost);
        }
    }
    render() {
        const { posts, loading } = this.props;
        const postList = posts.map(post => (
            <div key={post.id}>
                <h2>{post.id}</h2>
                <b>{post.title}</b>
            </div>
        ));
        return (
            <div>
                <h1>Post class</h1>
                {loading ? "Loading" : postList}
            </div>
        );
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    newPost: PropTypes.object
};
const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});
const actionCreator = {
    fetchPosts
};
export default connect(
    mapStateToProps,
    actionCreator
)(Posts);
