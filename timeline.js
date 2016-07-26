import React from 'react'

class Timeline extends React.Component {
  constructor(props) {
    super(props)
    this.updateTimeline = this.updateTimeline.bind(this)
    this.post = this.post.bind(this)
    this.chirpChange = this.chirpChange.bind(this)
    this.state = {
      chirps: [],
      value: '',
      user_picture_url: ''
    }
  }

  updateTimeline() {
    fetchApi('GET', '/tweets', {}, (response) => {
      console.log(response);
      //returns the chirps from the fetch and adds it to the state
      this.setState({chirps: response.user.timeline_tweets, user_picture_url:response.user.picture_url})
    })
  }

  componentDidMount() {
    this.updateTimeline()
  }

  //e is the onkeypress event from the input box.
  post(e){
    if (e.key === 'Enter')  {
      // run Post method for new tweets // e target value is the value of the event target which is input
      fetchApi('post','/tweets', {body: e.target.value}, (response, statusCode) => {
        if (statusCode >= 200 && statusCode < 300) {
          this.setState({value: ''})
          this.updateTimeline()
        }
        else {
          alert('fail')
        }
      })
    }
  }
  chirpChange(e) {
    this.setState({value: e.target.value})
  }
  render() {
    var chirps = this.state.chirps.map(function(chirp, key) {
      //the chirps var is the array that came from rsponse object
      return <div className="well" key={key}>{chirp.body}</div>
    })
    //in order to get the text input to be changeable you have to add a state. hence this.state.value and it requires on onChange
    return <div>
    <div className="chirp-box well">
    <img src={this.state.user_picture_url} />
    <input type="text" placeholder="chirp" className="form-control" onKeyPress={this.post}
     value={this.state.value} onChange={this.chirpChange} />
     </div>
     {chirps}
    </div>
  }
}

export default Timeline
