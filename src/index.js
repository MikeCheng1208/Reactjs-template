import 'babel-polyfill';
import 'es6-promise';
/*-----------------------------------------------------------*/
import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import App from './components/App';

/*-----------------------------------------------------------*/
let filename = 'mike.jpg';
require(`images/${filename}`);    //打包圖片
/*-----------------------------------------------------------*/

ReactDOM.render(<App/>, document.getElementById('app'));
