//imports from outside dependencies
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

//imports from within the app
import App from "./components/App";
import reducers from "./reducers";

//THIS IS IMPORTANT FOR BOOTSTRAP TO WORK ON ALL COMPONENTS
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
