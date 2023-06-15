
import React from 'react';

import PhotoFavButton from './PhotoFavButton';

import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {

  return (
    <li key={props.id} className="photo-list__item">
      <PhotoFavButton />
      <img src={props.urls.regular}  className="photo-list__image"/>
    </li>
  );
}

PhotoListItem.defaultProps = {
  "id": "1",
  "location": {
    "city": "Montreal",
    "country": "Canada"
  },
  "imageSource": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  "username": "Joe Example",
  "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
}

export default PhotoListItem