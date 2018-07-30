import React from 'react'
import PropTypes from 'prop-types'

import PlaylistsGridItem from './PlaylistsGridItem'

import './PlaylistsGrid.styl'

function PlaylistsGrid (props) {
  const { loading, playlists } = props

  if (loading) {
    return (
      <div className='playlists-grid'>
        <div className='playlists-grid__container'>
          <p className='playlists-grid__loading'>Carregando suas playlists...</p>
        </div>
      </div>
    )
  }

  if (playlists.length === 0) {
    return (
      <div className='playlists-grid'>
        <div className='playlists-grid__container'>
          <p className='playlists-grid__empty'>Não existe nenhuma playlist disponível...</p>
        </div>
      </div>
    )
  }

  return (
    <div className='playlists-grid'>
      <div className='playlists-grid__container'>
        <div className='playlists-grid__grid'>{ playlists.map(PlaylistsGridItem) }</div>
      </div>
    </div>
  )
}

PlaylistsGrid.propTypes = {
  loading: PropTypes.bool,
  playlists: PropTypes.array
}

PlaylistsGrid.defaultProps = {
  loading: false,
  playlists: []
}

export default PlaylistsGrid
