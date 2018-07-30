import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { loadPlaylists } from '../../../actions/Playlists'
import getVisiblePlaylists from '../../../selectors/playlistsSelectors'

import PlaylistsGrid from './PlaylistsGrid'

class PlaylistsGridContainer extends Component {
  componentDidMount () {
    const { loadPlaylists } = this.props
    loadPlaylists()
  }

  componentDidUpdate (nextProps) {
    const { filters } = nextProps
    const { filters: currentFilters, loadPlaylists } = this.props

    if (JSON.stringify(filters) === JSON.stringify(currentFilters)) {
      return
    }

    loadPlaylists(currentFilters)
  }

  render () {
    const { loading, playlists } = this.props

    return (
      <PlaylistsGrid
        loading={loading}
        playlists={playlists} />
    )
  }
}

const mapStateToProps = function (state) {
  const { playlists: { filters, loading } } = state
  return { loading, filters, playlists: getVisiblePlaylists(state) }
}

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators(
    { loadPlaylists },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistsGridContainer)
