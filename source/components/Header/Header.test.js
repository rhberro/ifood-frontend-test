import React from 'react'
import { shallow } from 'enzyme'

import Header from '../Header'

describe(
  'source/components/Header/Header.js', function () {
    it(
      'renders a header element', function () {
        const wrapper = shallow(<Header />)
        expect(wrapper.find('header')).toHaveLength(1)
      }
    )

    it(
      'renders a anchor element', function () {
        const wrapper = shallow(<Header />)
        expect(wrapper.find('a')).toHaveLength(1)
        expect(wrapper.find('a').text()).toEqual('Spotifood')
      }
    )
  }
)
