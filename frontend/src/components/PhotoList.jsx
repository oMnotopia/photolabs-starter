import React from 'react';

import '../styles/PhotoList.scss';

import PhotoListItem from './PhotoListItem';

const PhotoList = ({photos, liked, setLiked, modal, setModal}) => {

  const list = photos.map((photo, i) => {
    return (
      <PhotoListItem 
        key={i} 
        id={photo.id}
        location={photo.location}
        similar_photos={photo.similar_photos}
        urls={photo.urls} 
        user={photo.user}
        liked={liked} 
        setLiked={setLiked}
        setModal={setModal}
        modal={modal}
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