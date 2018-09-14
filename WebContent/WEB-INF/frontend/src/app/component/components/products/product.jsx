import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';


/**
 * プロダクトの一覧を表示するモジュール
 * @param {title, price, img} props
 */
export default function ProductComponent(props) {
  const { func,  product:{name, price, type, images, no} } = props;

  const path = images[0].imgPath;
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} >
      <Paper className="component__product-item" onClick={func} value={no}>
        <Grid xs={12}>
          <Typography variant="headline" gutterBottom>
            {name}
          </Typography>
        </Grid>
        <Grid container>
          <Grid xs={6} item>
            <img src="https://placehold.jp/150x150.png" alt="product-image" />
          </Grid>
          <Grid xs={6}>
            <Typography valiant="subheading" align="right">
              &yen; {price}
            </Typography>
            <Typography valiant="subheading" align="right">
              {type}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

