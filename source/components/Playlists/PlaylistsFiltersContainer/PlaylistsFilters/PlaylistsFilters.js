import React from 'react'

import PlaylistsFiltersItem from './PlaylistsFiltersItem'

import './PlaylistsFilters.styl'

function PlaylistsFilters (props) {
  const { loading, filters, opened, onToggle, onClick } = props

  if (loading) {
    return (
      <div className='playlists-filters'>
        <div className='playlists-filters__container'>
          Carregando
        </div>
        <div className='playlists-filters__container playlists-filters__container--mobile'>
          Carregando
        </div>
      </div>
    )
  }

  return (
    <div className='playlists-filters'>
      <div className={`playlists-filters__container ${opened ? 'playlists-filters__container--opened' : ''}`}>
        <form className='playlists-filters__form'>
          { filters.map(PlaylistsFiltersItem, props) }
          <button className='playlists-filters__button' onClick={onClick}>Filtrar</button>
        </form>
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
