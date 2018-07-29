import React, { Component } from 'react'

import PlaylistsFilters from './PlaylistsFilters'

import FiltersData from '../../../utilities/filters.js'

class PlaylistsFiltersContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      opened: false
    }

    this.onToggle = this.onToggle.bind(this)
  }

  toggleOpenedState (state) {
    const { opened } = state
    return {
      opened: !opened
    }
  }

  onToggle () {
    this.setState(this.toggleOpenedState)
  }

  render () {
    const { opened } = this.state
    return (
      <PlaylistsFilters
        opened={opened}
        filters={FiltersData}
        onToggle={this.onToggle} />
    )
  }
}

export default PlaylistsFiltersContainer
