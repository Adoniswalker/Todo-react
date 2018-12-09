import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {createPost} from "../actions/postAction";
import loadingAnimation from "./post";

class PostForm extends Component {
    state = {
        title: "",
        body: ""
    };
    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };
    onSubmit = e => {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        };
        this.props.createPost(post);
    };

    render() {
        return (
            <div>
                <h1>Post form</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title:</label>{" "}
                        <input
                            className="form-control"
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.onChange}
                        />
                    </div>
                    <br/>
                    <div className="form-group">

                        <label>Body:</label>{" "}
                        <textarea
                            className="form-control"
                            name="body"
                            value={this.state.body}
                            onChange={this.onChange}
                        />
                        <br/>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
};
export default connect(
    null,
    {createPost}
)(PostForm);
