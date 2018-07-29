import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { loadPlaylists } from '../../../actions/Playlists'

import PlaylistsGrid from './PlaylistsGrid'

class PlaylistsGridContainer extends Component {
  componentDidMount () {
    const { loadPlaylists } = this.props
    loadPlaylists()
  }

  render () {
    const { playlists: { loading, data } } = this.props

    return (
      <PlaylistsGrid
        loading={loading}
        playlists={data} />
    )
  }
}

const mapStateToProps = function (state) {
  const { playlists } = state
  return { playlists }
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
