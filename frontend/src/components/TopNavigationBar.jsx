import React from 'react';

import TopicList from './TopicList';
import FavBadge from './FavBadge';

import '../styles/TopNavigationBar.scss'


const TopNavigation = ( { state } ) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList 
        topics={state.topics}
      /> 
      <FavBadge 
        liked={state.liked.length}
      />
    </div>
  )
}

export default TopNavigation;