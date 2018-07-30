import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { onChangeSearch } from '../../../actions/Playlists'

import PlaylistsSearch from './PlaylistsSearch'

class PlaylistsSearchContainer extends Component {
  onChange = (event) => {
    const { target: { value } } = event
    const { onChangeSearch } = this.props
    onChangeSearch(value)
  }

  onClear = () => {
    const { onChangeSearch } = this.props
    onChangeSearch('')
  }

  render () {
    const { search } = this.props

    return (
      <PlaylistsSearch
        search={search}
        onChange={this.onChange}
        onClear={this.onClear} />
    )
  }
}

PlaylistsSearchContainer.propTypes = {
  search: PropTypes.string
}

PlaylistsSearchContainer.defaultProps = {
  search: ''
}

const mapStateToProps = function (state) {
  const { playlists: { search } } = state
  return { search }
}

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators(
    { onChangeSearch },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistsSearchContainer)
