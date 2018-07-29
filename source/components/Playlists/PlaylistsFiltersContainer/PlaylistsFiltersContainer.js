import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { loadFilters } from '../../../actions/Filters'

import PlaylistsFilters from './PlaylistsFilters'

class PlaylistsFiltersContainer extends Component {
  constructor (props) {
    super(props)
    this.state = { opened: false }
    this.onToggle = this.onToggle.bind(this)
  }

  componentDidMount () {
    const { loadFilters } = this.props
    loadFilters()
  }

  toggleOpenedState (state) {
    const { opened } = state
    return { opened: !opened }
  }

  onToggle () {
    this.setState(this.toggleOpenedState)
  }

  render () {
    const { opened } = this.state
    const { filters: { data, loading } } = this.props

    return (
      <PlaylistsFilters
        opened={opened}
        loading={loading}
        filters={data}
        onToggle={this.onToggle} />
    )
  }
}

const mapStateToProps = function (state) {
  const { filters } = state
  return { filters }
}

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators(
    { loadFilters },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistsFiltersContainer)
