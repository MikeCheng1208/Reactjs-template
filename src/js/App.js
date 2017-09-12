import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/Index';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'index.html';
import 'css/index.styl';
/*-----------------------------------------------------------*/
// ie bug fix
import "babel-polyfill";
import 'es6-promise/auto'
require('es6-object-assign').polyfill(); 
/*-----------------------------------------------------------*/
import 'api/user.json'
let filename = 'mike.jpg';
require(`images/${filename}`);    //打包圖片
/*-----------------------------------------------------------*/



ReactDOM.render(<Index/>, document.getElementById('App'));
