import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";
import Posts from "./components/posts";
import PosstForm from "./components/postform";
import store from "./store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PosstForm />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
