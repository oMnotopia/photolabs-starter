import React, { useState } from 'react';

import useApplicationData from './hooks/useApplicationData';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal'

import photos from './mocks/photos';
import topics from './mocks/topics';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const {state, addToFavPhotoIds, removeFromFavPhotoIds, showModal, closeModal} = useApplicationData();

  const [modal, setModal] = useState({isClicked: false, idClicked: ""})
  const photoToBePassed = photos.filter(item => item.id === state.photos)[0]

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
        setModal={setModal} 
        modal={modal} 
        photo={photoToBePassed}
        state={state}
        closeModal={closeModal}
      />}

    </div>
  )
};

export default App
