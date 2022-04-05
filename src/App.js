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
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import smashCharacters from './smashCharacters'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: smashCharacters
    }
  }

  render() {
    return (
      <>
        <Header />
        <p>Super Smash Tinder App</p>
        <Button color="danger">SMASH button!!</Button>
        <p>{this.state.characters.map(characters => `${characters.name} `)}<br /></p>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/SmashIndex" component={SmashIndex} />
            <Route path="/SmashShow" component={SmashShow} />
            <Route path="/SmashNew" component={SmashNew} />
            <Route path="/SmashEdit" component={SmashEdit} />
            <Route component={NotFound} />
          </Switch>
        </Router>
        <Footer />
      </>
    )
  }
}

export default App
