import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const { id, liked, favPhoto, addToFavPhotoIds, removeFromFavPhotoIds } = props

  const handleClick = () => {
    if (liked.includes(id)) {
      removeFromFavPhotoIds(id)
    } else {
      addToFavPhotoIds(id)
    }
  }

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon fill={favPhoto ? "#C80000" : ""}/>  
      </div>
    </div>
  );
}

export default PhotoFavButton;