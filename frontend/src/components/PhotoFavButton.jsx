import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const [colour, setColour] = useState("")

  const { liked, setLiked } = props

  const handleClick = () => {
    setColour(colour ?  "" : "#C80000")
    if (liked.includes(props.id)) {
      setLiked(prev => [...prev.filter(item => item !== props.id)])
    } else {
      setLiked(prev => [...prev, props.id])
    }
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