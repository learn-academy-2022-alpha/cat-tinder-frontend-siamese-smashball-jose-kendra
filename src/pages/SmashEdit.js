import React, { Component } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class SmashEdit extends Component {
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
    this.props.updateCharacter(this.state.newChar, this.props.char.id)
    this.setState({ submitted: true })
  }

  render() {
    return (
      <>
        <h1>Edit your character</h1>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              name="name"
              onChange={this.handleChange}
              value={this.state.newCharacter.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">Age</Label>
            <Input
              name="age"
              onChange={this.handleChange}
              value={this.state.newCharacter.age}
            />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">Enjoys</Label>
            <Input
              name="enjoys"
              onChange={this.handleChange}
              value={this.state.newCharacter.enjoys}
            />
          </FormGroup>
          <FormGroup>
            <Label for="image">Image URL</Label>
            <Input
              name="image"
              onChange={this.handleChange}
              value={this.state.newCharacter.image}
            />
          </FormGroup>
          <Button
            id="newButton"
            name="submit"
            onClick={this.handleSubmit}
          >
            Update Character Profile
          </Button>
        </Form>
        {this.state.submitted && <Redirect to={`/smashshow/${this.props.char.id}`} />}
      </>
    )
  }
}

export default SmashEdit
