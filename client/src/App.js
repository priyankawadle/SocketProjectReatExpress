import React from 'react';
import { Component } from 'react';
import io from 'socket.io-client'

 class App extends Component{

  componentDidMount(){
    const socket = io.connect('/')
    socket.on('message', (data) => {
      document.getElementById("h1Id").innerText = data;
    })
  }

  render(){
    return(
      <h1 id='h1Id'>Hi</h1>
    )
  }
}
export default App