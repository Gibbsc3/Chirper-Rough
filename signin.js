document.getElementById('btnLogin').addEventListener('click', function(){

  var formFields = {
     email: document.getElementById('email').value,
     password: document.getElementById('password').value,
  }
  fetchApi('POST','/users/login/', formFields, function(response, statusCode) {
    if (statusCode >= 200 && statusCode <= 400){
      saveToken(response.user.token)
      redirect('./timeline.html')
    }
    else {
      console.log('we are drunk sorry');
    }

  })
})

// /follow
// /unfollow
