import React, { useState } from 'react';

import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  const [liked, setLiked] = useState([]);

  return (
    <div className="home-route">
      <TopNavigationBar topics={props.topics} liked={liked}/>
      <PhotoList photos={props.photos} liked={liked} setLiked={setLiked}/>
    </div>
  )
}

export default HomeRoute;