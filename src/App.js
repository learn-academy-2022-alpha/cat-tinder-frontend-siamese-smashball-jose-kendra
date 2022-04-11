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
      characters: smashCharacters
    }
  }

  createCharacter = (char) => {
    console.log(char)
  }

  updateCharacter = (char, id) => {
    console.log("character:", char)
    console.log("id", id);
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
              return <SmashShow character={character} />
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

