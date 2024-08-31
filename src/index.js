import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store'; // Adjust the path to where your store is defined

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*React.createElement is a JS Object
const heading = React.createElement(
  "div", //Which element is to be created?
  {id : "parent"}, //Setting attributes to the element created
  React.createElement("div", {id : "child"}, 
  //Siblings in an array
  [React.createElement("h1", {}, "I'm a h1 tag"),
  React.createElement("h2", {}, "I'm a h2 tag")])
);//what to display?

//Rendering react
const root = ReactDOM.createRoot(document.getElementById("root"));


//render() => renders a JS object(heading) and 
//creates the element which the browser understands and puts it up in the DOM.

root.render(heading);
*/