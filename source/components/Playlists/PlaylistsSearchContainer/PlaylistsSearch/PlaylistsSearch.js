import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../../../Icon'

import './PlaylistsSearch.styl'

function PlaylistsSearch (props) {
  const { search, onChange, onClear } = props
  return (
    <div className='playlists-search'>
      <div className='playlists-search__container'>
        <h1 className='playlists-search__title'>Playlists</h1>
        <div className='playlists-search__input-group'>
          <input className='playlists-search__input' type='text' name='search' placeholder='Buscar por playlists' value={search} onChange={onChange} />
          <Icon className='playlists-search__icon playlists-search__icon--search' name='search' />
          <Icon className='playlists-search__icon playlists-search__icon--close' name='close' onClick={onClear} />
        </div>
      </div>
    </div>
  )
}

PlaylistsSearch.propTypes = {
  search: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired
}

PlaylistsSearch.defaultProps = {
  search: ''
}

export default PlaylistsSearch
