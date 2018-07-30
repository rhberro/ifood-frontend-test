const initial = {
  data: [],
  filters: {},
  loading: true,
  search: ''
}

export default function Playlists (state = initial, action) {
  if (action.type === 'FETCH_PLAYLISTS') {
    return { ...state, loading: true }
  }
  if (action.type === 'FETCH_PLAYLISTS_SUCCEED') {
    return { ...state, loading: false, data: action.data }
  }
  if (action.type === 'FETCH_PLAYLISTS_FAILED') {
    return { ...state, loading: false }
  }
  if (action.type === 'CHANGE_SEARCH') {
    return { ...state, search: action.search }
  }
  if (action.type === 'CHANGE_FILTERS') {
    return { ...state, filters: action.filters }
  }
  return state
}
