import React from 'react'

import './Header.styl'

function Header () {
  return (
    <header className='header'>
      <div className='header__container'>
        <a className='header__logo' href='/'>
          Spotifood
        </a>
      </div>
    </header>
  )
}

export default Header
