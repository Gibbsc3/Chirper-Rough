document.getElementById('signupbutton').addEventListener('click', function(){
  var formFields = {
     name: document.getElementById('name').value,
     email: document.getElementById('email').value,
     password: document.getElementById('password').value,
     picture_url: document.getElementById('picture_url').value
  }
  fetchApi('POST','/users', formFields, function(response, statusCode) {
    saveToken(response.user.token)
    redirect('/timeline.html')
  })
})
