import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import {connect} from 'react-redux';
import { bindActionCreators } from "redux";

import * as actions from '../../store/actions';
import Product from '../organisms/product';

import Bar from '../organisms/bar';
import Dialog from '../organisms/BuyDialog';

import './root.sass'
import Sidebar from '../organisms/Sidebar';

const mapStateToProps = state => ({ store: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });

@connect(mapStateToProps,mapDispatchToProps)
export default class Root extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      <BrowserRouter>
      <div>
        <Dialog/>
        <Sidebar/>
        <Bar/>
        <main>
          <Switch>
            <Route exact path='/' />
            <Route path='/Product/:category' component={Product}/>
            <Route path='/Product' component={Product} />
          </Switch>
        </main>
        {/* <Test></Test> */}
      </div>
      </BrowserRouter>
    )
  }
}