import React from 'react';

import TopicListItem from './TopicListItem';

import '../styles/TopicList.scss';

const TopicList = (props) => {
  return(
    <div className="top-nav-bar__topic-list">

      {props.topics.map((topic, index )=> {
        return <TopicListItem key={index} id={topic.id} slug={topic.slug} title={topic.title}/>
      })}
    </div>
  )
}

TopicList.defaultProps = {
  topics: [
    {
      "id": "1",
      "slug": "topic-1",
      "title": "Nature"
    },  
    {
      "id": "2",
      "slug": "topic-2",
      "title": "Travel"
    },
    {
      "id": "3",
      "slug": "topic-3",
      "title": "People"
    },
    {
      "id": "4",
      "slug": "topic-1",
      "title": "Nature"
    },  
  ]
}
export default TopicList