import React from 'react'

import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import SmashNew from './SmashNew.js'

Enzyme.configure({ adapter: new Adapter() })

describe("When SmashNew renders", () => {
    let newChar
    beforeEach(() => {
        newChar = shallow(<SmashNew />)
    })
    it("displays a heading", () => {
        const heading = newChar.find('h1')
        expect(heading.text()).toEqual('Smash New')
    })
    it("displays a new form", () => {
        const form = newChar.find('Form')
        expect(form.length).toEqual(1)
    })
})

