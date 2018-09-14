import React from 'react';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom'

import { Toolbar, AppBar, IconButton, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import {connect} from 'react-redux';
import { bindActionCreators } from "redux";

import * as Actions from '../../../store/actions';

import Meta from '../../../../env';
import './bar.sass';

const mapStateToProps = state => ({ store: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(Actions, dispatch) });

@connect(mapStateToProps,mapDispatchToProps)
export default class Bar extends React.Component{
  constructor(props){
    super(props);
  }
  onInclement(){
    this.props.actions.increment();
  }
  render(){
    const { userName } = this.props.store;
    return(
      <AppBar className="nav-ber">
        <Toolbar className="nav-ber__container">
          <IconButton  color="inherit" className="bav-ber__icon">
            <MenuIcon/>
          </IconButton>
          <Typography
            className="nav-ber__user-text"
            variant="title"
            color="inherit"
            align="right"
            noWrap>
            {userName}
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}