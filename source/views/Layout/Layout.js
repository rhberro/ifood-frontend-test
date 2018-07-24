import React from 'react'

import './Layout.styl'

function Layout (props) {
  return (
    <div className='layout'>
      { props.children }
    </div>
  )
}

export default Layout
