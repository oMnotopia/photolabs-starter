import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ liked, setLiked, id }) {

  const handleClick = () => {
    if (liked.includes(id)) {
      setLiked(prev => [...prev.filter(item => item !== id)])
    } else {
      setLiked(prev => [...prev, id])
    }
  }

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon fill={liked.includes(id) ? "#C80000" : ""}/>  
      </div>
    </div>
  );
}

export default PhotoFavButton;