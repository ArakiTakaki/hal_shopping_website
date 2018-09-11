import React from 'react';

import {Dialog, Slide, Button, DialogTitle, DialogContent, DialogActions, DialogContentText, Grid} from '@material-ui/core';

import {connect} from 'react-redux';
import { bindActionCreators } from "redux";

import * as Actions from '../../../store/actions';

import Meta from '../../../../env';
import './dialog.sass';

const mapStateToProps = state => ({ store: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(Actions, dispatch) });

function slideUp (props){
  return  <Slide direction="up" {...props}/>
}

@connect(mapStateToProps,mapDispatchToProps)
export default class DialogComponent extends React.Component{
  constructor(props){
    super(props);
  }

  onCloseEvent(){
    this.props.actions.dialogClose();
  }

  render(){
    const { buyDialog } = this.props.store;
    return(
      <Dialog
        open={buyDialog.open}
        TransitionComponent={slideUp}
        keepMounted
        onClose={this.onCloseEvent.bind(this)}>
        <DialogTitle>
            {buyDialog.name}
        </DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid xs={4} item>IMAGE</Grid>
            <Grid xs={8}>
              <Grid xs={12} item>
                詳細；{buyDialog.description}
              </Grid>
              <Grid xs={12} item>
                価格:{buyDialog.price}
              </Grid>
              <Grid xs={12} item>
                ジャンル:{buyDialog.type}
              </Grid>
            </Grid>

          </Grid>
          <DialogContentText>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button>
            購入
          </Button>
        </DialogActions>

      </Dialog>
    )
  }
}