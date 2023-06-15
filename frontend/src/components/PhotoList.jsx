import React from 'react';

import '../styles/PhotoList.scss';

import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {

  const mappedPhotos = props.photos.map((photo) => {
    return(
      <img key={photo.id} src={photo.urls.regular}></img>
    )
  })

  const photos = [...Array(3)]
  const list = photos.map((photo, i) => {
    return <PhotoListItem key={i} />
  })
  
  return(
    <ul className="photo-list">
      {list}
    </ul>
  )
}

PhotoList.defaultProps = {
  photos: [
    {
      "id": "1",
      "location": {
        "city": "Montreal",
        "country": "Canada"
      },
      "urls": {
        "full": `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
        "regular": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`
      },
      "user": {
        "id": "1",
        "username": "exampleuser",
        "name": "Joe Example",
        "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
      }
    },
    {
      "id": "2",
      "location": {
        "city": "Toronto",
        "country": "Canada"
      },
      "urls": {
        "full": `${process.env.PUBLIC_URL}/Image-2-Full.jpeg`,
        "regular": `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`
      },
      "user": {
        "id": "2",
        "username": "exampleuser",
        "name": "Joe Example",
        "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
      }
    },
    {
      "id": "3",
      "location": {
        "city": "Ottawa",
        "country": "Canada"
      },
      "urls": {
        "full": `${process.env.PUBLIC_URL}/Image-3-Full.jpeg`,
        "regular": `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`
      },
      "user": {
        "id": "3",
        "username": "exampleuser",
        "name": "Joe Example",
        "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
      }
    }
   ]
}

export default PhotoList