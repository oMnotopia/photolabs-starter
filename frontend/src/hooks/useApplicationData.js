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
    dispatch({ type: SET_PHOTO_DATA, value: {topics, photos} });
  }

  return {
    state,
    addToFavPhotoIds,
    removeFromFavPhotoIds,
    showModal,
    closeModal,
    // setPhotoSelected,
    // onClosePhotoDetailsModal,
  }
}

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_PHOTO: 'CLOSE_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

function reducer(state, action) {
  switch (action.type) {
    case "FAV_PHOTO_ADDED":

      return state = { ...state, liked: [...state.liked, action.value]} 

    case "FAV_PHOTO_REMOVED":
      return state = { ...state, liked: [...state.liked.filter(elem => elem !== action.value)]}

    case "SELECT_PHOTO":
      return state = {...state, isModalOpen: action.value.isOpen, photos: action.value.idClicked}

    case "CLOSE_PHOTO":
      return state = {...state, isModalOpen: action.value.isOpen}
  
    case SET_PHOTO_DATA:
      return state.photos = action.value

    case SET_TOPIC_DATA:
      return state.topics.push(action.value)

    case DISPLAY_PHOTO_DETAILS:
      return state.isModalOpen = true;

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

export default useApplicationData;