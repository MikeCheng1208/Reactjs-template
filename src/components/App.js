import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'
import { app as appActions} from '../actions';
import Box from './Box/';

const Button = styled.button`
    margin-right: 30px;
`
const H1 = styled.h1`
    font-size: 50px;
    color: cadetblue;
`

class App extends Component {

    handleOpenLoginForm = () => {
        this.props.dispatch(appActions.openLoginForm());
    }

    handleCloseLoginForm = () => {
        this.props.dispatch(appActions.closeLoginForm());
    }

    componentDidMount(){
        console.log('redux: ',this.props.app);
    }

    render() {
        return (
            <div>
                <H1>Webpack 前端自動化開發</H1>
                <Button onClick={this.handleOpenLoginForm}>open</Button>
                <Button onClick={this.handleCloseLoginForm}>clost</Button>
            </div>
        )
    }
}
export default connect(
    state => ({
      app: state.app,
    }),
)(App);