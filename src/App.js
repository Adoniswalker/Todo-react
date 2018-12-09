import React, {Component, Fragment} from "react";
import {Provider} from "react-redux";
import "./App.css";
import Posts from "./components/posts";
import Post from "./components/post";
import store from "./store";
import {NavBar} from "./components/NavBar/nav.component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Fragment>
                    <NavBar/>
                    <Switch>
                            <div className="container">
                                <Route exact path="/" component={Posts} />
                                <Route exact path="/posts/:id" component={Post} />
                            </div>
                    </Switch>
                    </Fragment>
                </Router>
            </Provider>
        );
    }
}

export default App;
