import React from 'react';
import Axios from 'axios';

import {Chip} from '@material-ui/core'
import { Link } from 'react-router-dom'

import Meta from '../../../env';

const api = Axios.create({
  baseURL: Meta.server()
});

export default class ProductForCategory extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      categories:[]
    }
    this.onCategory = this.onCategory.bind(this);
  }

  componentWillMount(){
    this.onCategory();
  }

  //もっと下層で問題ない
  async onCategory(){
    const res = await api.get('Category');
    this.setState({categories:res.data});
    console.log(this.state.categories);
  }

  render(){
    let list = [];
    for(let value of this.state.categories){
      list.push(
        <Link key={value.id} to={Meta.path()+"/Product/"+value.id}>
          <Chip variant="outlined" label={value.name} />
        </Link>);
    }
    return(
      <div>
        {list}
      </div>

    );
  }
}
