import React from 'react';
import { DialogTitle, DialogContent, Grid } from '@material-ui/core';
import { ImageSlider } from './ImageSlider';
import "./productDetail.sass"

const base = "component__product-detail";
const style = {
  root: `${base}__root`,
  imageContent: `${base}__image-content`,
  items: `${base}__items`,
  content: `${base}__content`,
}

/**
 * プロダクトの一覧を表示するモジュール
 * @param {title, price, func, img} props
 */
export function ProductDetailComponent(props) {
  const { product: { no, area, price, name, description, images, type } } = props;
  return (
    <React.Fragment>
      <DialogTitle>
        {name}
      </DialogTitle>
      <DialogContent className={style.imageContent}>
        <ImageSlider images={images} />
      </DialogContent>
      <DialogContent className={style.content}>
        <Grid container >
          <Grid className={style.items} container>
            <Grid xs={2} item> 詳細 </Grid>
            <Grid xs={10} item>{description}</Grid>
          </Grid>
          <Grid className={style.items} container>
            <Grid xs={2} item> 価格 </Grid>
            <Grid xs={10} item>{price}</Grid>
          </Grid>
          <Grid className={style.items} container>
            <Grid xs={2} item> ジャンル </Grid>
            <Grid xs={10} item>{type}</Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </React.Fragment>
  );

}