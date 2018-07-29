import React, { Component } from 'react'

import PlaylistsGrid from './PlaylistsGrid'

import PlaylistsData from '../../../utilities/playlists.js'

class PlaylistsGridContainer extends Component {
  render () {
    return (
      <PlaylistsGrid playlists={PlaylistsData} />
    )
  }
}

export default PlaylistsGridContainer
