import React from 'react';

import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = () => 
  <div className="home-route">
    <TopNavigationBar />

    <PhotoList />
  </div>

export default HomeRoute;