//Dependencies
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store/index.js";
import { Router } from "react-router-dom";
import App from "./components/App.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { configureFakeBackend } from "./redux/helpers/fake-backend";
import { history } from "./redux/helpers/history";

//Routes
import AppRoutes from "./routes";

//Assets
// import './styles/index.css';
import registerServiceWorker from "./registerServiceWorker";

configureFakeBackend();

render(
  <Router history={history}>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
