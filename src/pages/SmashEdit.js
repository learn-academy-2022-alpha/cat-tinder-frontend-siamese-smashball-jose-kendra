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

  componentDidMount() {
    const { id, ...rest } = this.props.char
    this.setState({ newCharacter: rest })
  }

  handleChange = (e) => {
    let { newCharacter } = this.state
    newCharacter[e.target.name] = e.target.value
    this.setState({ newCharacter: newCharacter })
  }

  handleSubmit = () => {
    this.props.updateCharacter(this.state.newCharacter, this.props.char.id)
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
              text="text"
              onChange={this.handleChange}
              value={this.state.newCharacter.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">Age</Label>
            <Input
              name="age"
              text="text"
              onChange={this.handleChange}
              value={this.state.newCharacter.age}
            />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">Enjoys</Label>
            <Input
              name="enjoys"
              text="text"
              onChange={this.handleChange}
              value={this.state.newCharacter.enjoys}
            />
          </FormGroup>
          <FormGroup>
            <Label for="image">Image URL</Label>
            <Input
              name="image"
              text="url"
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
          {this.state.submitted && <Redirect to={`/smashshow/${this.props.char.id}`} />}
        </Form>
      </>
    )
  }
}

export default SmashEdit
