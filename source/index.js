import React from 'react'
import ReactDOM from 'react-dom'

import Layout from './views/Layout'

import Header from './components/Header'

ReactDOM.render(
  <Layout>
    <Header />
  </Layout>,
  document.getElementById('application')
)
