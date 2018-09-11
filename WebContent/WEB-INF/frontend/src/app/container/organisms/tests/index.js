import React from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import * as Actions from '../../store/actions';

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
    for(let value of this.props.store.products){
      list.push(
        <li key={value.id}>
          <Link to={"/Product/"+value.id}>{value.name}</Link>
        </li>);
    }
    return(
    <div>
      <button onClick={this.onTest}>test</button>
    </div>
    );
  }
}
