import React from "react";
import  ReactDOM  from "react-dom/client";
import  FirstApp  from "./FirstApp";
import './styles.css'
// import HelloWorldApp from "./HelloWorldApp";

// import  App  from './HelloWorldApp'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorldApp/> */}
        <FirstApp title='Hello, I am Kevin' subTitle={123}/>
    </React.StrictMode>
)