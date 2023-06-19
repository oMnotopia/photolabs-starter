import React from 'react';

import '../styles/PhotoList.scss';

import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {

  const {photos, state, addToFavPhotoIds, removeFromFavPhotoIds, showModal} = props

  const photoList = photos.map((photo, i) => {
    return (
      <PhotoListItem 
        key={i} 
        id={photo.id}
        location={photo.location}
        similar_photos={photo.similar_photos}
        urls={photo.urls} 
        user={photo.user}
        liked={state.liked}
        addToFavPhotoIds={addToFavPhotoIds}
        removeFromFavPhotoIds={removeFromFavPhotoIds}
        showModal={showModal}
      />
    )
  })
  
  return(
    <ul className="photo-list">
      {photoList}
    </ul>
  )
}

export default PhotoList