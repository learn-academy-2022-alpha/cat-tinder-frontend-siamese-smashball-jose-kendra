import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import SmashIndex from './pages/SmashIndex'
import SmashShow from './pages/SmashShow'
import SmashNew from './pages/SmashNew'
import SmashEdit from './pages/SmashEdit'
import NotFound from './pages/NotFound'
import smashCharacters from './smashCharacters'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    this.readCharacter()
  }

  readCharacter = () => {
    fetch("http://localhost:3000/characters")
      .then(response => response.json())
      .then(payload => this.setState({ characters: payload }))
      .catch(errors => console.log("Character read errors:", errors))
  }

  createCharacter = (char) => {
    fetch("http://localhost:3000/characters", {
      body: JSON.stringify(char),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(response => response.json())
      .then(payload => this.readCharacter())
      .catch(errors => console.log("Character create errors:", errors))
  }


  updateCharacter = (char, id) => {
    fetch(`http://localhost:3000/characters/${id}`, {
      body: JSON.stringify(char),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
      .then(response => response.json())
      .then(payload => this.readCharacter())
      .catch(errors => console.log("Character update errors:", errors))
  }

  deleteCharacter = (id) => {
    console.log("random string");
    fetch(`http://localhost:3000/characters/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then(response => response.json())
      .then(payload => this.readCharacter())
      .catch(errors => console.log("delete errors:", errors))
  }

  render() {
    return (
      <>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/SmashIndex" render={(props) => <SmashIndex characters={this.state.characters} />} />

            <Route path="/SmashShow/:id" render={(props) => {
              let id = props.match.params.id
              let character = this.state.characters.find(character => character.id === +id)
              return <SmashShow character={character} deleteCharacter={this.deleteCharacter} />
            }} />

            <Route path="/SmashNew" render={(props) => <SmashNew createCharacter={this.createCharacter} />} />

            <Route path="/SmashEdit/:id" render={(props) => {
              let id = props.match.params.id
              let char = this.state.characters.find(char => char.id === +id)
              return <SmashEdit updateCharacter={this.updateCharacter} char={char} />
            }} />

            <Route component={NotFound} />
          </Switch>
        </Router>
        <Footer />
      </>
    )
  }
}

export default App

