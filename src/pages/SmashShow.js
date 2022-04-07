import React, { Component } from 'react'
import { Card, CardText, CardTitle, Col } from 'reactstrap'


class SmashShow extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let { character } = this.props
    return (
      <>
        <h1>Smash Show</h1>
        <Col sm="6">
          <Card body>
            <CardTitle>Hi, my name is {this.props.character.name}!</CardTitle>
            <img src={this.props.character.image} alt="char" />
            <CardText>I am {this.props.character.age} years old. I enjoy {this.props.character.enjoys}.</CardText>
          </Card>
        </Col>
      </>
    )
  }
}

export default SmashShow
