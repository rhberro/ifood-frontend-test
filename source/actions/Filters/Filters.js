export function fetchFilters () {
  return { type: 'FETCH_FILTERS' }
}

export function fetchFiltersSucceed (data) {
  return { type: 'FETCH_FILTERS_SUCCEED', data: data.filters }
}

export function fetchFiltersFailed () {
  return { type: 'FETCH_FILTERS_FAILED' }
}

export function loadFilters () {
  return function (dispatch) {
    dispatch(fetchFilters())

    window.fetch('http://www.mocky.io/v2/5a25fade2e0000213aa90776')
      .then(data => data.json())
      .then(data => dispatch(fetchFiltersSucceed(data)))
      .catch(error => dispatch(fetchFiltersFailed(error)))
  }
}
