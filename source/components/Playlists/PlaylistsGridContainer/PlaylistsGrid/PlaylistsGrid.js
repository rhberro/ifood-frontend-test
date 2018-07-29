import React from 'react'

import PlaylistsGridItem from './PlaylistsGridItem'

import './PlaylistsGrid.styl'

function PlaylistsGrid (props) {
  const { playlists } = props
  return (
    <div className='playlists-grid'>
      <div className='playlists-grid__container'>
        <div className='playlists-grid__grid'>{ playlists.map(PlaylistsGridItem) }</div>
      </div>
    </div>
  )
}

export default PlaylistsGrid
