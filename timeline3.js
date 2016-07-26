import React from 'react'
import ReactDOM from 'react-dom'
import Profile from './Profile'
import Timeline from './timeline'
fetchApi('GET','/users', {}, function(response) {
  ReactDOM.render(<Profile  {...response} />, document.getElementById('profile'))
})
ReactDOM.render(<Timeline />, document.getElementById('timeline'))
