import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import store from "./store/store";
import { addUsers } from "./actions/users";
import Header from "./components/Header";
import { Provider } from "react-redux";
import UserList from "./components/UserList";
import "./css/styles.css";
import UIkit from "uikit";
import "uikit/dist/css/uikit.min.css";
import Icons from "uikit/dist/js/uikit-icons.min.js";

UIkit.use(Icons);

class App extends React.Component {
  componentDidMount() {
    axios.get("/users").then((response) => {
      console.log(response.data);
      store.dispatch(addUsers(response.data.results));
    });
  }

  render() {
    return (
      <div className="main-section">
        <Header />
        <UserList />
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
