import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {

  const [colour, setColour] = useState("")

  const handleClick = () => {
    setColour(colour ?  "" : "#C80000")
  }

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon  fill={colour}/>  
      </div>
    </div>
  );
}

export default PhotoFavButton;