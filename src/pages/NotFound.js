import React, { Component } from 'react'
import questionbox from '../img/questionbox.png'


class NotFound extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <div class="notfound"><p>Page Not Found</p>
          <div><img src={questionbox} id="box" alt="notfound" height="350px" width="450px" /></div></div>
      </>
    )
  }
}

export default NotFound
