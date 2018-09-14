import React from 'react';

import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import * as Actions from '../../../store/actions';
import Category from '../category'

import {ProductComponent} from '../../../component/components/products'
import { Grid } from '@material-ui/core';

const mapStateToProps = state => ({ store: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(Actions, dispatch) });

@connect(mapStateToProps,mapDispatchToProps)
export default class Product extends React.Component{
  constructor(props){
    super(props);
  }

  onOpenDetailEvent(event){
    const key =event.currentTarget.getAttribute('value');
    const product = this.props.store.shop.products.find( (data) => { return data.no ===  key });
    this.props.actions.dialogOpen(product);
    console.log(product);
  }

  onTest(){
    this.props.actions.getProductRequest();
  }

  render(){
    let list = [];
    for(let value of this.props.store.shop.products){
      list.push(
        <ProductComponent
          key={value.no}
          func={this.onOpenDetailEvent.bind(this)}
          product={value}/>
      )
    }
    return(
      <div>
        <Category/>
        <Grid container spacing={14}>
          {list}
        </Grid>
        <button onClick={this.onTest}>test</button>
      </div>
    );
  }
}
