import React, { Component } from 'react'
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button
} from 'reactstrap'


class SmashNew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newCharacter: {
        name: "",
        age: "",
        enjoys: "",
        image: ""
      }
    }
  }

  handleChange = (e) => {
    let { newCharacter } = this.state
    newCharacter[e.target.name] = e.target.value
    this.setState({ newCharacter: newCharacter })
  }

  render() {
    return (
      <>
        <h1>Smash New</h1>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              placeholder="Enter character name"
              name="name"
              onChange={this.handleChange}
              value={this.state.newCharacter.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="name">Age</Label>
            <Input
              type="text"
              placeholder="Enter character age"
              name="age"
            />
          </FormGroup>
          <FormGroup>
            <Label for="name">Enjoys</Label>
            <Input
              type="text"
              placeholder="Enter character enjoyment"
              name="enjoys"
            />
          </FormGroup>
          <FormGroup>
            <Label for="name">Image</Label>
            <Input
              type="text"
              placeholder="Enter character image"
              name="image"
            />
          </FormGroup>
        </Form>
        <Button
          name="submit"
          onClick={this.handleSubmit}
        >
          Create a New Character
        </Button>
      </>
    )
  }
}

export default SmashNew
