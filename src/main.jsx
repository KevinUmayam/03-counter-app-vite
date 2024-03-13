import React from "react";
import  ReactDOM  from "react-dom/client";
import CounterApp from "./counterApp";
import  FirstApp  from "./FirstApp";
import './styles.css'
// import HelloWorldApp from "./HelloWorldApp";

// import  App  from './HelloWorldApp'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorldApp/> */}
        {/* <FirstApp title='Hello, I am Kevin' subTitle={123}/> */}
        <CounterApp value={0}/>
    </React.StrictMode>
)