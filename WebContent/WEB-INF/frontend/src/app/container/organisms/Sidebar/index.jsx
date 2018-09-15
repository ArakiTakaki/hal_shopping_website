import React from 'react';

import Meta from '../../../../env'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as Actions from '../../../store/actions';
import { Drawer, Divider, List } from '@material-ui/core';

import './index.sass'

const mapStateToProps = state => ({ store: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(Actions, dispatch) });

const base = "organisms__side-bar"
const styles = {
  root: `${base}__root`,
  nav: `${base}__nav`
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { actions, store } = this.props;
    return (
      <Drawer
        open={store.sidebarState}
        onClose={actions.sidebarClose}
        anchor="left">
        <div className={styles.root}>
          <List >
            <Link className={styles.nav} to={Meta.path()}>index</Link>
          </List>
          <List >
            <Link className={styles.nav} to={Meta.path() + '/Product'}>product</Link>
          </List>
          <List>
            <Link className={styles.nav} to={Meta.path() + '/Cart'}>cart</Link>
          </List>
          <Divider />
        </div>
      </Drawer>
    );
  }
}
