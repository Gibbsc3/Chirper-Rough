window.onload = (function(){

  fetchApi('GET','/tweets', {}, function(response) {
  var userObject = response.user
  var username = userObject.name
  var email = userObject.email
  var followers = userObject.followers.length
  var following = userObject.followees.length
  var avatar = userObject.picture_url
  var idForDb = userObject.id
  var name =  document.getElementById('name')
  var followers =  document.getElementById('followers')
  var usernameText = document.createTextNode(userObject.name)
  var followerCount = document.createTextNode(userObject.followers_count)
  var followingCount = document.createTextNode(userObject.followees_count)
  name.appendChild(usernameText)
  followers.appendChild(followerCount)
  console.log(userObject);

  // This renders the tweets on the screen
    userObject.timeline_tweets.forEach(function(chirp){
      var div = document.createElement('div')
      div.classList.add('well')
      var chirpText = document.createTextNode(chirp.body)
      var chirpHolder = document.createElement('p')
      chirpHolder.classList.add('chirpHolder')

      div.appendChild(chirpHolder)
      chirpHolder.appendChild(chirpText)
      var timeline =  document.getElementById('timeline')
        timeline.appendChild(div);

// end of adding tweets
//get user info
    })
     userObject.suggested_people_to_follow.forEach(function(suggested){
       //div to hold suggested followers
       var suggestFollowsWrap =  document.getElementById('suggestFollows')
       var suggestFollowsList =  document.getElementById('suggestFollowsList')
       var suggHolder = document.createElement('li')
       var suggButton = document.createElement('button')
       suggButton.setAttribute('type','button')
       suggButton.classList.add('btn-primary')
       suggButton.classList.add('btn')
       suggButton.classList.add('follow')
       var btnText = document.createTextNode('Follow')
       suggButton.appendChild(btnText)
       var suggName = document.createTextNode(suggested.name)
       var img = document.createElement('img')
       var p = document.createElement('p')
       img.setAttribute('src', 'http://unsplash.it/30/30?random')
       img.classList.add('tiny_pic')
      //  suggestFollowsWrap.appendChild(suggestFollowsList)
       suggestFollowsList.appendChild(suggHolder)
       p.appendChild(suggName)
       suggHolder.appendChild(p)
       suggHolder.appendChild(img)
       suggHolder.appendChild(suggButton)

       suggButton.addEventListener('click',function(){
         var formFields = {
            id: suggested.id
         }
         fetchApi('POST','/follow/' + suggested.id, formFields, function(response) {
           redirect('/timeline.html')
         })
        console.log(suggested.id);
       })

     })
  // console.log(email)
  // console.log(followers)
  // console.log(name)
    // console.log(response.user.suggested_people_to_follow[1].name);
    // response.user.forEach(function(result){
    //
    //  })2
  })
  // fetchApi('GET','/users',{}, function(response) {
  //   console.log(response);
  // })
})
document.getElementById('chirpButton').addEventListener('click',function(){
  var formFields = {
     body: document.getElementById('chirp').value
  }
  console.log(formFields);
  fetchApi('POST','/tweets', formFields, function(response, statusCode) {
     redirect('/timeline.html')
  })
document.getElementById('chirp').value = ''

})
// var flwBtns = document.getElementsByClassName('btn-primary btn follow')
// Array.prototype.forEach.call(flwBtns, function(el) {
//     // Do stuff here
//
//     el.addEventListener('click',function(){
//       alert('swag')
//     })
//
// })
// console.log(flwBtns[1]);



// /follow
// /unfollow
// 'get' users returns user list
