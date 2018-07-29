import React from 'react'

import './PlaylistsFilters.styl'

function PlaylistsFilterOption (props) {
  const { value, name } = props
  return (
    <option value={value}>{ name }</option>
  )
}

function PlaylistsFilter (props) {
  const { name, values } = props

  if (values) {
    return (
      <div className='playlists-filter'>
        <select className='playlists-filter__input' placeholder={name}>
          <option selected disabled>{ name }</option>
          { values.map(PlaylistsFilterOption) }
        </select>
      </div>
    )
  }

  return (
    <div className='playlists-filter'>
      <input className='playlists-filter__input' placeholder={name}/>
    </div>
  )
}

function PlaylistsFilters (props) {
  const { filters, opened, onToggle } = props
  return (
    <div className='playlists-filters'>
      <div className={`playlists-filters__container ${opened ? 'playlists-filters__container--opened' : ''}`}>
        { filters.map(PlaylistsFilter) }
        <button className='playlists-filters__button'>Filtrar</button>
      </div>
      <div className='playlists-filters__container playlists-filters__container--mobile'>
        <button className='playlists-filters__button playlists-filters__button--link' onClick={onToggle}>
          { opened ? 'Fechar' : 'Filtros' }
        </button>
      </div>
    </div>
  )
}

export default PlaylistsFilters
