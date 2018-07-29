import React from 'react'

import PlaylistsGridItem from './PlaylistsGridItem'

import './PlaylistsGrid.styl'

function PlaylistsGrid (props) {
  const { playlists } = props
  const m = [ ...playlists, ...playlists, ...playlists ]
  return (
    <div className='playlists-grid'>
      <div className='playlists-grid__container'>
        <div className='playlists-grid__grid'>{ m.map(PlaylistsGridItem) }</div>
      </div>
    </div>
  )
}

export default PlaylistsGrid
