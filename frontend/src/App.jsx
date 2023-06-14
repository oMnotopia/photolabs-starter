import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoFavButton from './components/PhotoFavButton';

import './App.scss';


// Note: Rendering a single component to build components in isolation
const App = () => {

  const photos = [...Array(3)]
  const list = photos.map((photo, i) => {
    return <PhotoListItem key={i} />
  })

  return(
    <div className="App">
        {/* {list}  */}
        
        {/* <PhotoListItem />  */}
        <PhotoFavButton />

    </div>
  )
};

export default App
