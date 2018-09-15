import React from 'react';

import { Toolbar, AppBar, IconButton, Typography, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import * as Actions from '../../../store/actions';

import './index.sass';

const mapStateToProps = state => ({ store: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(Actions, dispatch) });

@connect(mapStateToProps, mapDispatchToProps)
export default class Bar extends React.Component {
  constructor(props) {
    super(props);
  }

  menuOpenEvent(event){
    this.props.actions.userMenuOpen(event.currentTarget);
  }

  render() {
    const { actions, store: { user:{userName,open,element} } } = this.props;
    return (
      <AppBar className="nav-ber">
        <Toolbar className="nav-ber__container">
          <IconButton color="inherit" onClick={actions.sidebarOpen} className="bav-ber__icon">
            <MenuIcon />
          </IconButton>
          <Typography
            onClick={this.menuOpenEvent.bind(this)}
            className="nav-ber__user-text"
            variant="headline"
            color="inherit"
            noWrap>
            {userName}
          </Typography>
          <Menu
            onClose={actions.userMenuClose}
            anchorEl={element}
            open={open}>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    )
  }
}