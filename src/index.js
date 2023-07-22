import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

// React Router DOM
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
// CSS
import "./index.css";

// App
import App from "./App";

// Redux

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
);
