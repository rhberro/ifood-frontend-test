import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { loadFilters } from '../../../actions/Filters'
import { onChangeFilters } from '../../../actions/Playlists'

import PlaylistsFilters from './PlaylistsFilters'

class PlaylistsFiltersContainer extends Component {
  constructor (props) {
    super(props)
    this.state = { opened: false, fields: {} }
  }

  componentDidMount () {
    const { loadFilters } = this.props
    loadFilters()
  }

  toggleOpenedState (state) {
    const { opened } = state
    return { opened: !opened }
  }

  onToggle = () => {
    this.setState(this.toggleOpenedState)
  }

  onClick = (event) => {
    event.preventDefault()

    const { fields } = this.state
    const { onChangeFilters } = this.props
    const { onToggle } = this

    onChangeFilters(fields)
    onToggle()
  }

  onChange = (event) => {
    const { target: { name, value } } = event
    const { fields } = this.state

    const newField = { [name]: value || undefined }
    const newState = {
      fields: {
        ...fields,
        ...newField
      }
    }

    this.setState(newState)
  }

  render () {
    const { opened, fields } = this.state
    const { filters: { data, loading } } = this.props

    return (
      <PlaylistsFilters
        opened={opened}
        loading={loading}
        filters={data}
        fields={fields}
        onToggle={this.onToggle}
        onClick={this.onClick}
        onChange={this.onChange} />
    )
  }
}

PlaylistsFiltersContainer.propTypes = {
  filters: PropTypes.shape(
    {
      data: PropTypes.array,
      loading: PropTypes.bool
    }
  ).isRequired,
  loadFilters: PropTypes.func.isRequired,
  onChangeFilters: PropTypes.func.isRequired
}

const mapStateToProps = function (state) {
  const { filters } = state
  return { filters }
}

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators(
    { loadFilters, onChangeFilters },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistsFiltersContainer)
