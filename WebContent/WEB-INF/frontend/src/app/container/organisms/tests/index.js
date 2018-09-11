import React from 'react';

import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import * as Actions from '../../../store/actions';

const mapStateToProps = state => ({ store: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(Actions, dispatch) });

@connect(mapStateToProps,mapDispatchToProps)
export default class Product extends React.Component{
  constructor(props){
    super(props);
  }
  componentWillMoun(){}

  onOpen(){
    this.props.actions.dialogOpen();
  }

  render(){
    return(
      <div>
        <button onClick={this.onOpen.bind(this)}>dialog opened</button>
      </div>
    );
  }
}
