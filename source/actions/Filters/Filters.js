export function fetchFilters () {
  return { type: 'FETCH_FILTERS' }
}

export function fetchFiltersSucceed (data) {
  return { type: 'FETCH_FILTERS_SUCCEED', data }
}

export function fetchFiltersFailed () {
  return { type: 'FETCH_FILTERS_FAILED' }
}

export function loadFilters () {
  return function (dispatch) {
    dispatch(fetchFilters())

    fetch('http://www.mocky.io/v2/5a25fade2e0000213aa90776')
      .then(response => dispatch(fetchFiltersSucceed(response)))
      .catch(response => dispatch(fetchFiltersFailed(response)))
  }
}
