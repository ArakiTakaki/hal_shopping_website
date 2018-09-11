import React from 'react';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom'

import {connect} from 'react-redux';
import { bindActionCreators } from "redux";

import * as Actions from '../../store/actions';
import Product from '../organisms/product';
import Category from '../organisms/category'

import Meta from '../../../env'
import Bar from '../organisms/bar';

const mapStateToProps = state => ({ store: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(Actions, dispatch) });

@connect(mapStateToProps,mapDispatchToProps)
export default class Root extends React.Component{
  constructor(props){
    super(props);
  }
  onInclement(){
    this.props.actions.increment();
  }
  render(){
    const {store:{num}, actions} = this.props;
    return(

      <BrowserRouter>
      <div>
        <Bar></Bar>
        <h1>
          Root
        </h1>
        <nav>
          <p>
            <Link to={Meta.path()}>index</Link>
          </p>
          <p>
            <Link to={Meta.path()+'/Product'}>product</Link>
          </p>
          <p>
            <Link to='/Cart'>Cart</Link>
          </p>
        </nav>
        <main>
          <Category/>
          <Switch>
            <Route exact path='/' />
            <Route path='/Product/:category' component={Product}/>
            <Route path='/Product' component={Product} />
          </Switch>
        </main>
        <button onClick={this.onInclement.bind(this)}>increment</button>
        <p>
          {num}
        </p>
      </div>
      </BrowserRouter>
    )
  }
}