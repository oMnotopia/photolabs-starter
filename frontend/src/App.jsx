import React, { useState, useEffect } from 'react';
import axios from "axios";

import useApplicationData from './hooks/useApplicationData';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal'

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const {state, addToFavPhotoIds, removeFromFavPhotoIds, showModal, closeModal, getData, getPhotosByTopic} = useApplicationData();

  useEffect(() => {
    Promise.all([axios.get('/api/topics'), axios.get('/api/photos')]).then((res) => {
      const [topics, photos] = res;
      getData(topics.data, photos.data);
    }).catch(err => console.log("An unexpected error occured", err))   
  }, [])

  return(
    <div className="App">

      <HomeRoute 
        state={state}
        addToFavPhotoIds={addToFavPhotoIds}
        removeFromFavPhotoIds={removeFromFavPhotoIds}
        showModal={showModal}
        getPhotosByTopic={getPhotosByTopic}
      />
      {state.isModalOpen && <PhotoDetailsModal 
        photo={state.modalPhotoDetails[0]}
        state={state}
        closeModal={closeModal}
        addToFavPhotoIds={addToFavPhotoIds}
        removeFromFavPhotoIds={removeFromFavPhotoIds}
      />}

    </div>
  )
};

export default App
