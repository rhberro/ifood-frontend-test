import React from 'react'

import './PlaylistsFilters.styl'

function PlaylistsFilterOption (props) {
  const { value, name } = props
  return (
    <option value={value} key={value}>
      { name }
    </option>
  )
}

function PlaylistsFilter (props) {
  const { id, name, values } = props

  if (values) {
    return (
      <div className='playlists-filter' key={id}>
        <select className='playlists-filter__input' placeholder={name} value=''>
          <option value='' disabled>{ name }</option>
          { values.map(PlaylistsFilterOption) }
        </select>
      </div>
    )
  }

  return (
    <div className='playlists-filter' key={id}>
      <input className='playlists-filter__input' placeholder={name}/>
    </div>
  )
}

function PlaylistsFilters (props) {
  const { loading, filters, opened, onToggle } = props

  if (loading) {
    return (
      <div className='playlists-filters'>
        <div className='playlists-filters__container'>
          <button className='playlists-filters__button'>Carregando</button>
        </div>
        <div className='playlists-filters__container playlists-filters__container--mobile'>
          <button className='playlists-filters__button playlists-filters__button--link'>
            Carregando
          </button>
        </div>
      </div>
    )
  }

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
