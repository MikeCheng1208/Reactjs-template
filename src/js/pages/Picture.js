import React, { Component } from 'react';
class className extends Component{

    constructor(props){
        super(props);
    }

    componentWillReceiveProps(nextProps) { 
        console.log('nextProps:',nextProps);
    }

    render() {
        return (
            <div id="pic">
                {
                    this.props.imgs.map((obj,idx)=>{
                        return (
                            <img onClick={() => this.props.alertPop(obj)} src={obj} alt={idx} key={idx} />
                        )
                    })
                }
            </div>
        )	
    }
}
export default className;