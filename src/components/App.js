import React, { Component } from 'react';
import Box from './Box/';
import "./App.scss";
class App extends Component {
    render() {
        return (
            <div>
                <h1>Webpack 前端自動化開發</h1>
                <Box/>
            </div>
        )
    }
}
export default App;