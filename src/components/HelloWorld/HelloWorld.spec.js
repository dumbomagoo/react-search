import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import HelloWorld from './HelloWorld'

describe('HelloWorld Component', () => {
  const wrapper = shallow(<HelloWorld />);
  it('renders h1', () => {
    expect(wrapper.find('h1').text()).to.equal('Hello World')
  })
  it('renders p', () => {
    expect(wrapper.find('p').text()).to.equal('Welcome to my world')
  })
})