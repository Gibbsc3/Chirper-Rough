import React from 'react'

var Profile = (props) =>  <div>
  <img className="img-responsive" src={props.picture_url} />
  <h6>{props.name}</h6>
  <div className="row">
  <div className="col-sm-6">{props.followers_count} Followers</div>
  <div className="col-sm-6">{props.followees_count} Following</div>
  </div>
  <a href="followers.html" className="btn btn-default btn-block">Follow some people</a>
</div>

export default Profile
