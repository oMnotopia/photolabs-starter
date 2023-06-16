import React from 'react';

import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

import '../styles/PhotoDetailsModal.scss'

export const PhotoDetailsModal = ({ photo, modal, liked, setLiked, setModal}) => {

  const handleClick = () => {
    setModal({isClicked: false, idClicked: ""})
  }

  // console.log(liked)
  
  //Turning the  object of objects into an array of objects
  const similarPhotos = Object.values(photo.similar_photos)
  
  return(
    <div className='photo-details-modal'>
      <button className='photo-details-modal--close-button' onClick={handleClick}>
        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_428_287)">
            <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_428_287">
            <rect width="18" height="18" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </button>
      <div className="photo-details-modal-container__image">
        <PhotoList  photos={[photo]} modal={modal} liked={liked} setLiked={setLiked} />
        {/* <PhotoFavButton id={photo.id} liked={liked} setLiked={setLiked}/>
        <img src={photo.urls.regular} className="photo-details-modal__image" /> */}
      </div>


      <div >
        <div className="photo-details-modal__images">
        <h3 className="photo-details-modal__header">
          Similar Photos
        </h3>
         <PhotoList photos={similarPhotos} modal={modal} liked={liked} setLiked={setLiked}/>
        </div>
      </div>
    </div>
  )
}

//

export default PhotoDetailsModal;