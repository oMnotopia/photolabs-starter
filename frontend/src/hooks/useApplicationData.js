import { useReducer } from "react";

const useApplicationData = () => {
  const defaultState = {
    isModalOpen: false,
    modalPhotoDetails: null,
    topics: [],
    photos: [],
    liked: [],
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  const addToFavPhotoIds = (id) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, value: id }); 
  }

  const removeFromFavPhotoIds = (id) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, value: id }); 
  }

  const showModal = (id) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, value: {isOpen: true, idClicked: id} });
  }

  const closeModal = (id) => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO, value: {isOpen: false, idClicked: id} });
  }

  const getData = (topics, photos) => {
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, value: {topics, photos} });
  }

  const getPhotosByTopic = (photos) => {
    dispatch({type: ACTIONS.GET_PHOTOS_BY_TOPICS, value: photos});
  }

  return {
    state,
    addToFavPhotoIds,
    removeFromFavPhotoIds,
    showModal,
    closeModal,
    getData,
    getPhotosByTopic
  }
}

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_PHOTO: 'CLOSE_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS'
}

function reducer(state, action) {
  switch (action.type) {
    case "FAV_PHOTO_ADDED":

      return state = { ...state, liked: [...state.liked, action.value]} 

    case "FAV_PHOTO_REMOVED":
      return state = { ...state, liked: [...state.liked.filter(elem => elem !== action.value)]}

    case "SELECT_PHOTO":
      return state = {...state, isModalOpen: action.value.isOpen, modalPhotoDetails: [...state.photos.filter(item => item.id === action.value.idClicked)]}

    case "CLOSE_PHOTO":
      return state = {...state, isModalOpen: action.value.isOpen}
  
    case "SET_PHOTO_DATA":
      return state = {...state, photos: [...action.value.photos], topics: [...action.value.topics]}

    case "GET_PHOTOS_BY_TOPICS":
      return state = {...state, photos: [...action.value]}

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

export default useApplicationData;