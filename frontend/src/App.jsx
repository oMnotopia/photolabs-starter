import React, { useState } from 'react';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal'

import photos from './mocks/photos';
import topics from './mocks/topics';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [liked, setLiked] = useState([]);
  const [modal, setModal] = useState({isClicked: false, idClicked: ""})
  const photoToBePassed = photos.filter(item => item.id === modal.idClicked)[0]

  return(
    <div className="App">

      <HomeRoute photos={photos} topics={topics} liked={liked} setLiked={setLiked} modal={modal} setModal={setModal}/>
      {modal.isClicked && <PhotoDetailsModal setModal={setModal} modal={modal} liked={liked} setLiked={setLiked} photo={photoToBePassed}/>}

    </div>
  )
};

export default App
