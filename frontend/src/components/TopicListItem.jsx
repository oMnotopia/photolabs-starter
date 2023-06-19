import React from 'react';
import axios from 'axios'

import '../styles/TopicListItem.scss'

const TopicListItem = (props) => {

  const { id, title, getPhotosByTopic } = props

  const handleClick = (id) => {
    axios.get(`/api/topics/photos/${id}`)
      .then((photos) => {
        getPhotosByTopic(photos.data)
      })
      .catch((err) =>
        console.log(
          "An unexpected error occured attempting to perform request.",
          err
        )
      );
  }

  return (
    <div className="topic-list__item" onClick={() => handleClick(id)}>
      <span>
        {title}
      </span>
    </div>
  )
}

TopicListItem.defaultProps = {
  "id": "1",
  "slug": "topic-1",
  "label": "Nature"
}
export default TopicListItem