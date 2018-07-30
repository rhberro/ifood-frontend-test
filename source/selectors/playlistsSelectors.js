import { createSelector } from 'reselect'

function getSearch (state) {
  const { playlists: { search } } = state
  return search
}

function getPlaylists (state) {
  const { playlists: { data } } = state
  return data
}

function isVisible (playlist) {
  const { search } = this
  return playlist.name.toLowerCase().includes(search.toLowerCase())
}

function getVisiblePlaylists (search, playlists) {
  const filterScope = { search }
  return playlists.filter(isVisible, filterScope)
}

export default createSelector(
  [getSearch, getPlaylists],
  getVisiblePlaylists
)
