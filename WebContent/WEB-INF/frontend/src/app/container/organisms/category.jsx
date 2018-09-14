import React from 'react';
import Axios from 'axios';

import {Chip} from '@material-ui/core'
import { Link } from 'react-router-dom'

import Meta from '../../../env';

import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import * as Actions from '../../store/actions';

const mapStateToProps = state => ({ store: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(Actions, dispatch) });

@connect(mapStateToProps,mapDispatchToProps)
export default class ProductForCategory extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.actions.getCategoryRequest();
  }

  onCategoryChangeEvent(event){
    const id = event.currentTarget.getAttribute('value');
    this.props.actions.getCategoryInProductRequest(id);
  }
  //もっと下層で問題ない
  onAllProductShwo(Event){
    this.props.actions.getProductRequest();
  }

  render(){
    let list = [];
    for(let value of this.props.store.shop.categories){
      list.push(
          <Link key={value.id} to={Meta.path()+"/Product/"+value.id}>
            <Chip
              onClick={this.onCategoryChangeEvent.bind(this)}
              value={value.id}
              variant="outlined"
              label={value.name} />
          </Link>);
    }
    return(
      <div className="organisms__products-wrap">
        <Link to={Meta.path()+"/Product"}>
          <Chip
            onClick={this.onAllProductShwo.bind(this)}
            variant="outlined"
            label="全件表示"/>
        </Link>
        {list}
      </div>

    );
  }
}
