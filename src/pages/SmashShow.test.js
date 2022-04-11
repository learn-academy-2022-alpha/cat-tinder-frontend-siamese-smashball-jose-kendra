import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SmashShow from './SmashShow.js'
import smashCharacters from '../smashCharacters.js'

Enzyme.configure({ adapter: new Adapter() })

describe("When SmashShow renders", () => {
    it("checks for header", () => {
        const smashShow = shallow(<SmashShow character={smashCharacters[0]} />)
        const heading = smashShow.find('h1')
        expect(heading.length).toEqual(1)
    })
})
