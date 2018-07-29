export function fetchPlaylists () {
  return { type: 'FETCH_PLAYLISTS' }
}

export function fetchPlaylistsSucceed (response) {
  return { type: 'FETCH_PLAYLISTS_SUCCEED', data: response.playlists.items }
}

export function fetchPlaylistsFailed () {
  return { type: 'FETCH_PLAYLISTS_FAILED' }
}

const temporaryHeaders = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer BQBKuFcTC7ZUOGzetwZhoUaGaWX79y0bJS4V7thIA6b_slAO9pajOUvY5rqCfZpM91aYbalySMi7DqrhNV3BQSBgbRqy7siIeL_q5opF7eFifrT6DKB4vD_QX_0LclNc8YhVw2DI30l4tGRzE0sT8-bfflWGtfRzVjtJbeLpfzy2Va1cKmSV9cJ1iTZT9_V3SkHj6lY'
  }
}

export function loadPlaylists () {
  return function (dispatch) {
    dispatch(fetchPlaylists())

    fetch('https://api.spotify.com/v1/browse/featured-playlists', temporaryHeaders)
      .then(data => data.json())
      .then(response => dispatch(fetchPlaylistsSucceed(response)))
      .catch(response => dispatch(fetchPlaylistsFailed(response)))
  }
}
