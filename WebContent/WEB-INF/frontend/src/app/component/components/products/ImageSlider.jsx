
import React from 'react';
import { Grid, GridList, GridListTile, GridListTileBar } from '@material-ui/core';

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
      <div className="component__image-slider__root">
        <GridList className="component__image-slider__content" style="flex-wrap: nowrap" cols={2.5}>
          {list}
        </GridList>
      </div>
    </React.Fragment>
  )

}