import React from "react";
import ReactDOM from "react-dom";
import "./app.css";

import App from "./app.jsx";

const TestComponent = () => <div className="bg">Our test component 5</div>;

ReactDOM.render(<App />, document.getElementById("content"));
