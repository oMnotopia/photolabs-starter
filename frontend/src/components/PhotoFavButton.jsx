import React, { useCallback, useState } from 'react';

import useApplicationData from '../hooks/useApplicationData';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ setLiked, id }) {

  const {state, addToFavPhotoIds, removeToFavPhotoIds} = useApplicationData();
 

  const handleClick = () => {
    if (state.liked.includes(id)) {
      removeToFavPhotoIds(id)
      console.log("Remove: ",state)
    } else {
      addToFavPhotoIds(id)
      console.log("Add: ",state)
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