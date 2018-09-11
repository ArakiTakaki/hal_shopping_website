import React from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import * as Actions from '../../store/actions';
import Category from '../organisms/category'

const mapStateToProps = state => ({ store: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(Actions, dispatch) });

@connect(mapStateToProps,mapDispatchToProps)
export default class Product extends React.Component{
  constructor(props){
    super(props);
    this.onTest = this.onTest.bind(this);
  }
  componentWillMoun(){}

  onTest()
  {
    this.props.actions.getProductRequest();
  }

  render(){
    let list = [];
    for(let value of this.props.store.shop.products){
      list.push(
        <h1 key={value.no}>{value.name}</h1>
      )
    }
    return(
    <div>

      <Category/>
      {list}
      <button onClick={this.onTest}>test</button>
    </div>
    );
  }
}



//  <li key={value.id}>
// <Link to={"/Product/"+value.id}>{value.name}</Link>
// </li>);