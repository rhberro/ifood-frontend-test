import React from 'react'

import './PlaylistsFiltersItem.styl'

function renderOption (option) {
  const { value, name } = option
  return (
    <option value={value} key={value}>
      { name }
    </option>
  )
}

function renderSelect (item, props) {
  const { id, name, values } = item
  const { onChange, fields } = props
  const value = fields[id]

  return (
    <div className='playlists-filter' key={id}>
      <select className='playlists-filter__input' name={id} placeholder={name} value={value || ''} onChange={onChange}>
        <option value=''>{ name }</option>
        { values.map(renderOption) }
      </select>
    </div>
  )
}

function renderText (item, props) {
  const { id, name } = item
  const { onChange, fields } = props
  const value = fields[id]

  return (
    <div className='playlists-filter' key={id}>
      <input className='playlists-filter__input' type='text' name={id} placeholder={name} value={value || ''} onChange={onChange} />
    </div>
  )
}

function PlaylistsFiltersItem (props) {
  const { values } = props

  return values
    ? renderSelect(props, this)
    : renderText(props, this)
}

export default PlaylistsFiltersItem
