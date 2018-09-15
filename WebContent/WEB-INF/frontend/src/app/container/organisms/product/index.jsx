import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as Actions from '../../../store/actions';
import Category from '../category'

import { ProductComponent } from '../../../component/components/products'
import { Typography } from '@material-ui/core';

const mapStateToProps = state => ({ store: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(Actions, dispatch) });

@connect(mapStateToProps, mapDispatchToProps)
export default class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.actions.getProductRequest();
  }

  onOpenDetailEvent(event) {
    const key = event.currentTarget.getAttribute('value');
    const product = this.props.store.shop.products.find((data) => { return data.no === key });
    this.props.actions.dialogOpen(product);
    console.log(product);
  }

  render() {
    return (
      <div>
        <Typography variant="headline">
          商品一覧
        </Typography>
        <ProductComponent
          func={this.onOpenDetailEvent.bind(this)}
          products={this.props.store.shop.products} />
      </div>
    );
  }
}
