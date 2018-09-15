
import React from 'react';
import {  GridList, GridListTile } from '@material-ui/core';
import './ImageSlider.sass'

const base = "component__image-slider";

const style = {
  root: `${base}__root`,
  content: `${base}__content`,
}

export function ImageSlider(props) {
  let list = [];
  for (let image of props.images) {
    {/* <img src="image.imgPath" alt="productNo"/> */ }
    list.push(
      <GridListTile key={image.id}>
        <img  src="https://placehold.jp/150x150.png" alt="" />
      </GridListTile>
    )
  }

  return (
    <React.Fragment>
      <div className={style.root}>
        <GridList className={style.content} cols={2.5}>
          {list}
        </GridList>
      </div>
    </React.Fragment>
  )

}