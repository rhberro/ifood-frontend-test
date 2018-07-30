import React from 'react'
import PropTypes from 'prop-types'

import './PlaylistsGridItem.styl'

function PlaylistsGridItem (props) {
  const { id, name, uri, images: [ image ] } = props
  const { url } = image

  return (
    <a className='playlists-grid-item' href={uri} key={id}>
      <img className='playlists-grid-item__image' src={url} alt={name} />
      <p className='playlists-grid-item__name'>{ name }</p>
    </a>
  )
}

PlaylistsGridItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape(
      { url: PropTypes.string.isRequired }
    )
  ).isRequired
}

export default PlaylistsGridItem
