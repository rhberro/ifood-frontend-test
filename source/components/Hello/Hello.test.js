import React from 'react'
import { shallow } from 'enzyme'

import Hello from './Hello'

it(
  'renders a welcome message', function () {
    const wrapper = shallow(<Hello />)
    expect(wrapper.find('main').text()).toBe('Hello, World!')
  }
)
