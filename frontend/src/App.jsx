import React, { useState, useEffect } from 'react';
import axios from "axios";

import useApplicationData from './hooks/useApplicationData';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal'

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const {state, addToFavPhotoIds, removeFromFavPhotoIds, showModal, closeModal, getData} = useApplicationData();

  useEffect(() => {
    Promise.all([axios.get('/api/topics'), axios.get('/api/photos')]).then((res) => {
      const [topics, photos] = res;
      // console.log(topics.data, photos.data)
      getData(topics.data, photos.data);
    }).catch(err => console.log("An unexpected error occured", err))   
  }, [])

  // useEffect(() => {
  //   const callThisFunc = ()  => {
  //     console.log("In this effect")
  //     fetch('/api/topics/photos/:topic_id')
  //       .then(res => res.json())
  //       .then(data => console.log(data))

  //     // const photoToBePassed = photoToBePassed = photos.filter(item => item.id === state.photos)[0]
  //   }

  //   if(state.isModalOpen === true) callThisFunc()

  // }, [state.isModalOpen])

  return(
    <div className="App">

      <HomeRoute 
        state={state}
        addToFavPhotoIds={addToFavPhotoIds}
        removeFromFavPhotoIds={removeFromFavPhotoIds}
        showModal={showModal}
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
