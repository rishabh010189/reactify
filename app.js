import React from "react";
import  ReactDOM from "react-dom/client";

const child = React.createElement('h1', {}, "Hello from h1");
const parent = React.createElement('div', {}, [child, child]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);