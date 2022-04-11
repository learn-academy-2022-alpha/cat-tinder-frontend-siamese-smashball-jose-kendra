import React, { Component } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class SmashNew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newCharacter: {
        name: "",
        age: "",
        enjoys: "",
        image: ""
      },
      submitted: false
    }
  }

  handleChange = (e) => {
    let { newCharacter } = this.state
    newCharacter[e.target.name] = e.target.value
    this.setState({ newCharacter: newCharacter })
  }

  handleSubmit = () => {
    this.props.createCharacter(this.state.newCharacter)
    this.setState({ submitted: true })
  }

  render() {
    return (
      <>
        <h1>Create a new character</h1><br />
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.newCharacter.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="name">Age</Label>
            <Input
              type="text"
              name="age"
              onChange={this.handleChange}
              value={this.state.newCharacter.age}
            />
          </FormGroup>
          <FormGroup>
            <Label for="name">Enjoys</Label>
            <Input
              type="text"
              name="enjoys"
              onChange={this.handleChange}
              value={this.state.newCharacter.enjoys}
            />
          </FormGroup>
          <FormGroup>
            <Label for="name">Image URL</Label>
            <Input
              type="text"
              name="image"
              onChange={this.handleChange}
              value={this.state.newCharacter.image}
            />
          </FormGroup>
          <FormGroup>
            <Button id="newButton"
              onClick={this.handleSubmit}
            >
              Create a New Character
            </Button>
          </FormGroup>
        </Form>
        {this.state.submitted && <Redirect to="/smashindex" />}
      </>
    )
  }
}

export default SmashNew

