 function signInForm(){
    var submitLogin = $('lgsubmitBtn');
    var grab = 'SELECT FROM Users WHERE User = ' + user +'AND WHERE pass = %' + password +'%';
    var user = $('userlogin').val();
    var password = $('passInput').val();  
          
    var secure = function(){
          	 if(password !== pass){return false;}
          	 if(password === grab){
          	  $('lgsubmitBtn').click(function(){
          	 		  return true;	});}}
              if(secure){
          	       console.log('User Granted Access');
          	       window.location.replace("profile.html/userId='42534'");
              }
    }
