import React, { Component } from 'react';
import jsES6 from './es6'
import mike from 'mike'
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "mike",
            age : "26",
        }
        const es6 = new jsES6();
        console.log('id:',mike.urlSearch()["id"]);
    }
    alertfn = (e) =>{
        console.log('name:',this.state.name);
        console.log('age:',this.state.age);
    }
    render() {
        return (
            <div className="home">
                <h1>HOME</h1>
                <a href="javascript:;" onClick={this.alertfn}>點我測試this</a>
            </div>
        );
    }
}