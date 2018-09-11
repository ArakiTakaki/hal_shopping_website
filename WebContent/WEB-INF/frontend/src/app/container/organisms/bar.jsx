import React from 'react';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom'

import { Toolbar, AppBar, IconButton, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import {connect} from 'react-redux';
import { bindActionCreators } from "redux";

import * as Actions from '../../store/actions';
import Product from '../organisms/product';
import Category from '../organisms/category'

import Meta from '../../../env'

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
    const {userName,userID} = this.props.store;
    return(
      <AppBar>
        <Toolbar>
          <IconButton  color="inherit">
            <MenuIcon/>
          </IconButton>
          <Typography variant="title" color="inherit" align="right" noWrap>
            {userName}
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}