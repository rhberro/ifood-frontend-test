import React from 'react'
import ReactDOM from 'react-dom'

import Layout from './views/Layout'

import Footer from './components/Footer'
import Header from './components/Header'
import Playlists from './components/Playlists'

import StoreProvider from './components/providers/StoreProvider'

ReactDOM.render(
  <StoreProvider>
    <Layout>
      <Header />
      <Playlists />
      <Footer />
    </Layout>
  </StoreProvider>,
  document.getElementById('application')
)
