import React from 'react'

import PlaylistsFiltersContainer from './PlaylistsFiltersContainer'
import PlaylistsGridContainer from './PlaylistsGridContainer'
import PlaylistsSearchContainer from './PlaylistsSearchContainer'

import './Playlists.styl'

function Playlists () {
  return (
    <div className='playlists'>
      <PlaylistsFiltersContainer />

      <div className='playlists__container'>
        <PlaylistsSearchContainer />
        <PlaylistsGridContainer />
      </div>
    </div>
  )
}

export default Playlists
