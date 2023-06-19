import React, { useState } from 'react';

import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  return (
    <div className="home-route">
      <TopNavigationBar 
        topics={props.state.topics} 
        state={props.state}
        getPhotosByTopic={props.getPhotosByTopic}
      />
      <PhotoList 
        photos={props.state.photos} 
        state={props.state}
        addToFavPhotoIds={props.addToFavPhotoIds}
        removeFromFavPhotoIds={props.removeFromFavPhotoIds}
        showModal={props.showModal}
      />
    </div>
  )
}

export default HomeRoute;