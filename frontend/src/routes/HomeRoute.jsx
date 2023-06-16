import React, { useState } from 'react';

import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  return (
    <div className="home-route">
      <TopNavigationBar topics={props.topics} liked={props.liked.length}/>
      <PhotoList photos={props.photos} modal={props.modal} setModal={props.setModal} liked={props.liked} setLiked={props.setLiked}/>
    </div>
  )
}

export default HomeRoute;