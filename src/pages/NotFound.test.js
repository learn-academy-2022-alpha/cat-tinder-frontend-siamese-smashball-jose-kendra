// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import NotFound from './NotFound.js'
import questionbox from '../img/questionbox.png'


//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })


describe("When NotFound renders", () => {
    let notFound
    beforeEach(() => {
        notFound = shallow(<NotFound />)
    })

    it("displays a heading ", () => {
        const heading = notFound.find('p')
        expect(heading.text()).toEqual("Page Not Found")
    })

    it("checks all props for img", () => {
        const img = notFound.find('img')
        expect(img.prop('src')).toEqual(questionbox)
        expect(img.prop('alt')).toEqual('notfound')
        expect(img.prop('id')).toEqual('box')

    })
})
