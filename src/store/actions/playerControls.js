import * as actionTypes from './actionTypes';

export const setPlayerTrack = (track) => {
  return {
    type: actionTypes.SET_PLAYER_TRACK,
    track
  }
}

export const setAlbumImage = (albumUrl) => {
  return {
    type: actionTypes.SET_ALBUM_IMAGE,
    albumUrl
  }
}

export const playTrack = (songUrl) => {
  return {
    type: actionTypes.PLAY_TRACK,
    songUrl
  }
}