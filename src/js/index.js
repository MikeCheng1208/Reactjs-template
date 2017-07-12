import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
require("index.html");   
require("css/index.styl");
let filename = 'mike.jpg';
require('images/'+filename);    //打包圖片
require('user.json');           //搬 json
/*-----------------------------------------------------------*/
// 解決ie問題
import "babel-polyfill";
require('es6-promise').polyfill();
require('es6-object-assign').polyfill(); 
/*-----------------------------------------------------------*/

ReactDOM.render(
    <Home/>,
    document.getElementById('App')
);
