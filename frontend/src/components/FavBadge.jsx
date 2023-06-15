import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

export const FavBadge = ({ isFavPhotoExist, liked }) => {
  let colour = ""

  liked.length ? colour = "#C80000" : ""

  return (
    <div className='fav-badge'>
      <FavIcon width={20} height={17} fill={colour} displayAlert={!!isFavPhotoExist}/>
    </div>
  ) 
};

export default FavBadge;