import React from 'react';

import { Dialog, Slide, DialogActions, Button, Select, MenuItem } from '@material-ui/core';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import * as Actions from '../../../store/actions';
import { ProductDetailComponent } from '../../../component/components/products/productDetail';

const mapStateToProps = state => ({ store: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(Actions, dispatch) });

function slideUp(props) {
  return <Slide direction="up" {...props} />
}

@connect(mapStateToProps, mapDispatchToProps)
export default class DialogComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    }
  }

  onCloseEvent() {
    this.props.actions.dialogClose();
  }

  onChangeItem(event){
    this.setState({count:event.target.value});
  }

  render() {
    const { buyDialog: { open, product } } = this.props.store;
    let list = [];
    for (let i = 1; i < 10; i++) {
      list.push(<MenuItem key={i} value={i}> {i} </MenuItem>);
    }
    return (
      <Dialog
        open={open}
        TransitionComponent={slideUp}
        keepMounted
        onClose={this.onCloseEvent.bind(this)}>
        <ProductDetailComponent product={product} />
        <DialogActions>
          <Select value={this.state.count} onChange={this.onChangeItem.bind(this)}>
            {list}
          </Select>
          個
          <Button>
            購入
        </Button>
        </DialogActions>
      </Dialog>
    )
  }
}