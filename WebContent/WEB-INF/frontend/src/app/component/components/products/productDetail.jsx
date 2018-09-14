import React from 'react';
import { DialogTitle, DialogContent, Grid, DialogContentText, DialogActions, Button } from '@material-ui/core';
import { ImageSlider } from './ImageSlider';


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
      <DialogContent>
        <ImageSlider images={images} />
      </DialogContent>
      <DialogContent>
        <DialogContentText>
          <Grid container>
            <Grid xs={12} container >

              <Grid xs={12} className="component__product-detail__items" container>
                <Grid xs={2} item> 詳細 </Grid>
                <Grid xs={10} item>{description}</Grid>
              </Grid>
              <Grid xs={12} className="component__product-detail__items" container>
                <Grid xs={2} item> 価格 </Grid>
                <Grid xs={10} item>{price}</Grid>
              </Grid>
              <Grid xs={12} className="component__product-detail__items" container>
                <Grid xs={2} item> ジャンル </Grid>
                <Grid xs={10} item>{type}</Grid>
              </Grid>
            </Grid>

          </Grid>
        </DialogContentText>
      </DialogContent>
    </React.Fragment>
  );

}