import PropTypes from 'prop-types'
import React from 'react'

import './Icon.styl'

function getClassNames (props) {
  return props.className
    ? `icon ${props.className}`
    : `icon`
}

function Icon (props) {
  const { name, onClick } = props

  const dangerouslySetInnerHTML = {
    __html: require(`../../assets/vectors/${name}.svg`)
  }

  const classNames = getClassNames(props)

  return (
    <span className={classNames} dangerouslySetInnerHTML={dangerouslySetInnerHTML} onClick={onClick} />
  )
}

Icon.propTypes = {
  name: PropTypes.oneOf(
    [ 'search', 'close' ]
  ),
  onClick: PropTypes.func
}

Icon.defaultProps = {
  name: 'search',
  onClick: function () {}
}

export default Icon
