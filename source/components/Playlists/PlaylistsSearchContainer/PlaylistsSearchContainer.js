import React, { Component } from 'react'

import PlaylistsSearch from './PlaylistsSearch'

class PlaylistsSearchContainer extends Component {
  constructor (props) {
    super(props)
    this.state = { search: '' }
    this.onChange = this.onChange.bind(this)
  }

  onChange (event) {
    const { target: { value } } = event
    const newState = { search: value }
    this.setState(newState)
  }

  render () {
    const { search } = this.state
    return (
      <PlaylistsSearch search={search} onChange={this.onChange} />
    )
  }
}

export default PlaylistsSearchContainer
