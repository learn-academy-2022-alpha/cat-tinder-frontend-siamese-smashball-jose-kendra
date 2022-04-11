import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SmashEdit from './SmashEdit.js'

Enzyme.configure({ adapter: new Adapter() })

describe("When SmashEdit renders", () => {
    let update
    beforeEach(() => {
        update = shallow(<SmashEdit />)
    })
    it("displays a heading", () => {
        const heading = update.find('h1')
        expect(heading.text()).toEqual('Edit your character')
    })

    it("displays a form", () => {
        const form = update.find('Form')
        expect(form.length).toEqual(1)
    })
})

