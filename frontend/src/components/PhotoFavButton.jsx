import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ id, state, addToFavPhotoIds, removeFromFavPhotoIds }) {

  const handleClick = () => {
    if (state.liked.includes(id)) {
      removeFromFavPhotoIds(id)
    } else {
      addToFavPhotoIds(id)
    }
  }

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon fill={state.liked.includes(id) ? "#C80000" : ""}/>  
      </div>
    </div>
  );
}

export default PhotoFavButton;