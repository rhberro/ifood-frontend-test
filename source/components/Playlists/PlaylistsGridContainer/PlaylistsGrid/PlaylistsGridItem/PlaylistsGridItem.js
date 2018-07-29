import React from 'react'

import './PlaylistsGridItem.styl'

function PlaylistsGridItem (props) {
  const { id, name, images: [ image ], tracks: { total } } = props
  return (
    <div className='playlists-grid-item' key={id}>
      <img className='playlists-grid-item__image' src={image.url} alt={name} />
      <p className='playlists-grid-item__name'>{ name }</p>
    </div>
  )
}

export default PlaylistsGridItem
