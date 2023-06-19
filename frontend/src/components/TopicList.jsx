import React from 'react';

import TopicListItem from './TopicListItem';

import '../styles/TopicList.scss';

const TopicList = (props) => {

  const { getPhotosByTopic, topics } = props

  return(
    <div className="top-nav-bar__topic-list">

      {topics.map((topic, index )=> {
        return <TopicListItem key={index} id={topic.id} slug={topic.slug} title={topic.title} getPhotosByTopic={getPhotosByTopic}/>
      })}
    </div>
  )
}

export default TopicList