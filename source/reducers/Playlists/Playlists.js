const initial = {
  loading: true,
  data: []
}

export default function Playlists (state = initial, action) {
  if (action.type === 'FETCH_PLAYLISTS') {
    return { ...initial }
  }
  if (action.type === 'FETCH_PLAYLISTS_SUCCEED') {
    return { ...initial, loading: false, data: action.data }
  }
  if (action.type === 'FETCH_PLAYLISTS_FAILED') {
    return { ...initial, loading: false }
  }
  return state
}
