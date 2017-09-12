import React, { Component } from 'react';
import axios from 'axios';
import Picture from './Picture';

class Index extends Component{
    
    state = {
        pic: [],
    }

    constructor(props){
        super(props);
    }

    componentDidMount() { 
        axios.get('api/user.json').then(res => {
            this.setState({ pic: res.data })
        });
    }

    alertPop = (obj) => {
        alert(obj);
    }

    render() { 
        return (
            <div>
                <h1>正妹圖集</h1>    
                <Picture imgs={this.state.pic} alertPop={this.alertPop}/>
            </div>
        )
    }

}


export default Index;