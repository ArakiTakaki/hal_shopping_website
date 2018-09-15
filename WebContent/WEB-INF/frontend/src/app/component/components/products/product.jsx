import React from 'react';
import { Grid, Typography, Paper, GridListTile, GridListTileBar, GridList, ListSubheader } from '@material-ui/core';
import ProductForCategory from '../../../container/organisms/category';


/**
 * プロダクトの一覧を表示するモジュール
 * @param {title, price, img} props
 */
export default function ProductComponent(props) {

  const { func, products } = props;

  let list = [];
  for (let value of products) {
    list.push(
      <GridListTile
        key={value.no}
        cols={1}
        value={value.no}
        onClick={func}>
        <img src="https://placehold.jp/150x150.png" alt="product-image" />
        <GridListTileBar title={value.name} subtitle={value.price} />
      </GridListTile>
    )
  }

  return (
    <GridList cellHeight={180} cols={4}>
      <GridListTile style={{ height: 'auto' }} key="Subheader" cols={4}>
        <ListSubheader component="div">
        <ProductForCategory/>
        </ListSubheader>
      </GridListTile>
      {list}
    </GridList>
  )
}

