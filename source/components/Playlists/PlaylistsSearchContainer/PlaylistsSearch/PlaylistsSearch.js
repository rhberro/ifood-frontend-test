import React from 'react'

import './PlaylistsSearch.styl'

function PlaylistsSearch () {
  return (
    <div className='playlists-search'>
      <div className='playlists-search__container'>
        <h2 className='playlists-search__title'>10 Playlists</h2>
        <input className='playlists-search__input' placeholder='Search for playlists' />
      </div>
    </div>
  )
}

export default PlaylistsSearch
