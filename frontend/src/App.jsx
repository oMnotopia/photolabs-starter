import React, { useState, useEffect } from 'react';

import useApplicationData from './hooks/useApplicationData';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal'

// import photos from './mocks/photos';
// import topics from './mocks/topics';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const {state, addToFavPhotoIds, removeFromFavPhotoIds, showModal, closeModal} = useApplicationData();

  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);

  useEffect(() => {

    fetch('/api/photos')
      .then(res => res.json())
      .then(data => setPhotos(data))
      .catch(err => console.log(err.message))
    
    fetch('/api/topics')  
      .then(resp => resp.json())
      .then(data => setTopics(data))
      .catch(err => console.log(err.message))

    
  }, [])

  useEffect(() => {
    const callThisFunc = ()  => {
      fetch('/api/topics/photos/:topic_id')
        .then(res => res.json())
        .then(data => console.log(data))

      const photoToBePassed = photoToBePassed = photos.filter(item => item.id === state.photos)[0]
    }

  }, [state.isModalOpen])

  return(
    <div className="App">

      <HomeRoute 
        photos={photos} 
        topics={topics} 
        state={state}
        addToFavPhotoIds={addToFavPhotoIds}
        removeFromFavPhotoIds={removeFromFavPhotoIds}
        showModal={showModal}
      />
      {state.isModalOpen && <PhotoDetailsModal 
        photo={photoToBePassed}
        state={state}
        closeModal={closeModal}
        addToFavPhotoIds={addToFavPhotoIds}
        removeFromFavPhotoIds={removeFromFavPhotoIds}
      />}

    </div>
  )
};

export default App
