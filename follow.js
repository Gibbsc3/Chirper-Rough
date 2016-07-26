import React from 'react'
import ReactDOM from 'react-dom'
import Following from './following'

fetchApi('GET', '/users', {}, function(response) {

  ReactDOM.render(<Following users={response.users} />, document.getElementById('followers'))
})
