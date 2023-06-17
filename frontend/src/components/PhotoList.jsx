import React from 'react';

import '../styles/PhotoList.scss';

import PhotoListItem from './PhotoListItem';

const PhotoList = ({photos, modal, setModal, state, addToFavPhotoIds, removeFromFavPhotoIds, showModal}) => {

  const list = photos.map((photo, i) => {
    return (
      <PhotoListItem 
        key={i} 
        id={photo.id}
        location={photo.location}
        similar_photos={photo.similar_photos}
        urls={photo.urls} 
        user={photo.user}
        setModal={setModal}
        modal={modal}
        state={state}
        addToFavPhotoIds={addToFavPhotoIds}
        removeFromFavPhotoIds={removeFromFavPhotoIds}
        showModal={showModal}
      />
    )
  })
  
  return(
    <ul className="photo-list">
      {list}
    </ul>
  )
}

export default PhotoList