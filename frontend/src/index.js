import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import WowProject from './WowProject';
import { BrowserRouter } from "react-router-dom";
import DataFetchingComponent from './ProjectComponents/DataFetchingComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
{/* <MyApp></MyApp> */}
{/* <DataFetchingComponent></DataFetchingComponent> */}
<WowProject></WowProject>
{/* <CustomComponent></CustomComponent> */}
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
