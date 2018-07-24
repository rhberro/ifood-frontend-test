import React from 'react'
import { shallow } from 'enzyme'

import Layout from './Layout'

describe(
  'source/views/Layout/Layout.js', function () {
    it(
      'renders a div with the "layout" class', function () {
        const wrapper = shallow(<Layout />)
        expect(wrapper.find('.layout')).toHaveLength(1)
      }
    )

    it(
      'renders the given children', function () {
        const wrapper = shallow(<Layout><h1>Spotifood</h1></Layout>)
        const title = wrapper.find('h1')
        expect(title).toHaveLength(1)
        expect(title.text()).toEqual('Spotifood')
      }
    )
  }
)
