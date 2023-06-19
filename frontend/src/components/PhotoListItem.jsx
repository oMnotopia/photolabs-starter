
import React, { useMemo } from 'react';

import PhotoFavButton from './PhotoFavButton';

import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {

  const {id, location, urls, user, liked, addToFavPhotoIds, removeFromFavPhotoIds, showModal} = props

  const handleClick = () => {
    showModal(id)
  }
  
  return (
    <li key={id} className="photo-list__item">
      <PhotoFavButton 
        id={id} 
        liked={liked}
        addToFavPhotoIds={addToFavPhotoIds}
        removeFromFavPhotoIds={removeFromFavPhotoIds}
      />
      <img src={urls.regular} className="photo-list__image" onClick={handleClick}/>
      <div className="photo-list__user-details">
        <img src={user.profile} className="photo-list__user-profile"/>
        <div>
          <div className="photo-list__user-info">{user.username}</div>
          <div className="photo-list__user-info photo-list__user-location">{location.city}, {location.country}</div>
        </div>
      </div>
    </li>
  );
}

export default PhotoListItem