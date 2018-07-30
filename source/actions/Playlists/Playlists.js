import { get } from '../../utilities/Request'

function fetchPlaylists () {
  return { type: 'FETCH_PLAYLISTS' }
}

function fetchPlaylistsSucceed (response) {
  return { type: 'FETCH_PLAYLISTS_SUCCEED', data: response.playlists.items }
}

function fetchPlaylistsFailed () {
  return { type: 'FETCH_PLAYLISTS_FAILED' }
}

function changeSearch (search) {
  return { type: 'CHANGE_SEARCH', search }
}

function changeFilters (filters) {
  return { type: 'CHANGE_FILTERS', filters }
}

export function loadPlaylists (filters) {
  return function (dispatch) {
    dispatch(fetchPlaylists())

    get('https://api.spotify.com/v1/browse/featured-playlists', filters)
      .then(data => data.json())
      .then(response => dispatch(fetchPlaylistsSucceed(response)))
      .catch(response => dispatch(fetchPlaylistsFailed(response)))
  }
}

export function onChangeSearch (search) {
  return function (dispatch) {
    dispatch(changeSearch(search))
  }
}

export function onChangeFilters (filters) {
  return function (dispatch) {
    dispatch(changeFilters(filters))
  }
}
