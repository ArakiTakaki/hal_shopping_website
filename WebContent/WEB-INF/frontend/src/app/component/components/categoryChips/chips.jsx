import React from 'react';
import { Chip } from "@material-ui/core";
import './style.sass';

/**
 * カテゴリ軍
 * @param {func, name, id, link} props
 */
export const CategoryChip = (props) => {
  const {func, name, id, link} = props;
  return (
    <Link to={link} className="component__category-chips">
      <Chip
        className="component__category-chip"
        onClick={func}
        label={name}
        value={id}
        variant="outlined"/>
    </Link>
  );
}
