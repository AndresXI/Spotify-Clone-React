import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../store/actions'

class RecentlyPlayed extends Component {

  componentDidMount() {
    this.props.fetchRecentlyPlayedTracks(this.props.token);
    this.props.setBrowseView('trackList')
  }


  render() {
    const { tracks } = this.props;
    let trackList;

    if (tracks) {
      trackList = tracks.map((track) => {
        return (

          <div key={track.track.id}>
            {/* <img src={track.images[0].url} alt="" /> */}
            <p>{track.track.album.name}</p>
            <p>{track.track.name}</p>
          </div>
        )
      })
    }


    return (
      <div>
        {trackList}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.tokenReducer.token,
    tracks: state.playlistReducer.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecentlyPlayedTracks: (token) => dispatch(actionTypes.fetchRecentlyPlayed(token)),
    setBrowseView: (title) => dispatch(actionTypes.updateBrowseView(title)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecentlyPlayed);