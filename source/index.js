import React from 'react'
import ReactDOM from 'react-dom'

import Layout from './views/Layout'

import Footer from './components/Footer'
import Header from './components/Header'
import Playlists from './components/Playlists'

ReactDOM.render(
  <Layout>
    <Header />
    <Playlists />
    <Footer />
  </Layout>,
  document.getElementById('application')
)
