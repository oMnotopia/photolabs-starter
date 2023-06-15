import React from 'react';

import TopicList from './TopicList';
import FavBadge from './FavBadge';

import '../styles/TopNavigationBar.scss'


const TopNavigation = ( { topics, liked } ) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics}/> 
      <FavBadge isFavPhotoExist={liked}/>
    </div>
  )
}

export default TopNavigation;