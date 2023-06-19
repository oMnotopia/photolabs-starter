import React from 'react';

import TopicList from './TopicList';
import FavBadge from './FavBadge';

import '../styles/TopNavigationBar.scss'


const TopNavigation = (props) => {

  const { state, getPhotosByTopic } = props

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList 
        getPhotosByTopic={getPhotosByTopic}
        topics={state.topics}
      /> 
      <FavBadge 
        liked={state.liked.length}
      />
    </div>
  )
}

export default TopNavigation;