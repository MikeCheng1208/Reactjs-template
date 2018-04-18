import 'babel-polyfill';
import 'es6-promise';
import 'es6-object-assign';
/*-----------------------------------------------------------*/
import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/Index';
import 'css/index.styl';
import 'user.json';
/*-----------------------------------------------------------*/
let filename = 'mike.jpg';
require(`images/${filename}`);    //打包圖片
/*-----------------------------------------------------------*/



ReactDOM.render(<Index/>, document.getElementById('App'));
