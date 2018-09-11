import React from 'react';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom'

import {connect} from 'react-redux';
import { bindActionCreators } from "redux";

import * as actions from '../../store/actions';
import Product from '../organisms/product';

import Meta from '../../../env'
import Bar from '../organisms/bar';

const mapStateToProps = state => ({ store: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });

@connect(mapStateToProps,mapDispatchToProps)
export default class Root extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
  }

  render(){
    return(

      <BrowserRouter>
      <div>
        <Bar/>
        <main>
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
          <Switch>
            <Route exact path='/' />
            <Route path='/Product/:category' component={Product}/>
            <Route path='/Product' component={Product} />
          </Switch>
        </main>
      </div>
      </BrowserRouter>
    )
  }
}