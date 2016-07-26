import React from 'react'

class Following extends React.Component {
  constructor(props) {
    super(props)
    this.followToggle = this.followToggle.bind(this)
    this.state = {
      users: props.users
    }
  }
  followToggle(e) {
    var users = this.state.users,
    followingUser = users[e.target.getAttribute('data-user-key')].currently_being_followed

    users[e.target.getAttribute('data-user-key')].currently_being_followed = followingUser
    this.setState({users: users})

    if(followingUser){
      // fetchApi('POST', '/followings/' + users[e.target.getAttribute('data-user-key')].id, {})
    }
    else {
      // fetchApi('DELETE', '/followings/' + users[e.target.getAttribute('data-user-key')].id, {})
    }
  }
  render() {
    var users = this.state.users.map((user, key) => {
      return <p key={key}>{user.email}
      <button className="btn btn-default" onClick={this.followToggle} data-user-key={key}>{user.currently_being_followed ? 'Following' : 'Follow'} </button></p>
    })
    return <div>{users}</div>
  }
}

export default Following
