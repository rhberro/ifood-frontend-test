const initial = {
  loading: true,
  data: []
}

export default function Filters (state = initial, action) {
  if (action.type === 'FETCH_FILTERS') {
    return { ...initial }
  }
  if (action.type === 'FETCH_FILTERS_SUCCEED') {
    return { ...initial, loading: false, data: action.data }
  }
  if (action.type === 'FETCH_FILTERS_FAILED') {
    return { ...initial, loading: false }
  }
  return state
}
