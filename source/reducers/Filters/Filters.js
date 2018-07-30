const initial = {
  loading: true,
  data: []
}

export default function Filters (state = initial, action) {
  if (action.type === 'FETCH_FILTERS') {
    return { ...state }
  }
  if (action.type === 'FETCH_FILTERS_SUCCEED') {
    return { ...state, loading: false, data: action.data }
  }
  if (action.type === 'FETCH_FILTERS_FAILED') {
    return { ...state, loading: false }
  }
  return state
}
