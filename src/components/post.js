import React, {Component, Fragment} from 'react'
import {connect} from "react-redux";
import {fetchSinglePost} from "../actions/postAction";
import './main.scss';

import PropTypes from "prop-types";
export const loadingAnimation = (
    <div className="container">
        <div className="banner">
            LOADING
            <div className="banner-left"></div>
            <div className="banner-right"></div>
        </div>
    </div>
);

export class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            id: 0,
            userId: 0,
            title: ''
        }
    }
    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.fetchSinglePost(id).then(
            (response) => {
                const {body, title, userId, id} = response.payload;
                this.setState({
                    body,
                    userId,
                    id,
                    title
                })

            }
        )
    }

    render() {
        const {loading, error, post} = this.props.getData;
        const postHtml = (
            <Fragment>
                <h1>hello</h1>
                <h1>{this.state.title}</h1>
                <p>{this.state.body}</p>
            </Fragment>
        );

        return (
            <Fragment>

                {(!loading && post) ?  postHtml: loadingAnimation}
            </Fragment>
        );
    }
}

Post.propTypes = {
    fetchSinglePost : PropTypes.func.isRequired,
    getData: PropTypes.shape({
        loading: PropTypes.bool,
        error: null,
        post: PropTypes.shape({
            body : PropTypes.string,
            title: PropTypes.null,
            id:PropTypes.number,
            userId: PropTypes.number
        })

    })
}
const mapStateToProps = state => ({
    getData: state.singlePost,
});

const actionCreators = {
    fetchSinglePost
};

export default connect(
    mapStateToProps,
    actionCreators
)(Post)