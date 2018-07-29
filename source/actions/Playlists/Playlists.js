export function fetchPlaylists () {
  return { type: 'FETCH_PLAYLISTS' }
}

export function fetchPlaylistsSucceed (data) {
  return { type: 'FETCH_PLAYLISTS_SUCCEED', data }
}

export function fetchPlaylistsFailed () {
  return { type: 'FETCH_PLAYLISTS_FAILED' }
}

export function loadFilters () {
  return function (dispatch) {
    dispatch(fetchPlaylists())

    fetch('http://www.mocky.io/v2/5a25fade2e0000213aa90776')
      .then(response => dispatch(fetchPlaylistsSucceed(response)))
      .catch(response => dispatch(fetchPlaylistsFailed(response)))
  }
}
