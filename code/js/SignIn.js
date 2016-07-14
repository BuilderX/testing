 function userSignIn(uN,ps){
    	var encrpassword = password;
    	encrpassword.split('');
    	if(encrpassword[0] === '&lt;'){
    		return null;
    	}
    	
    	var user = {
    		  userName:uN,
    		  password:encrpassword,
    	}
    	var sendToDB = function(){
    		   var connect = '';
    		   var http;
    		   var str = 'INSERT INTO UsersX values('+'userNames' +user.userNames +'pass'+ user.password + ')';
    		   xhttp = new XMLHttpRequest();
    		   
    		   if (str == "") {
             document.getElementById("dialogTxt").innerHTML = "";
             return;
         }
         xhttp.onreadystatechange = function() {
          if (xhttp.readyState == 4 && xhttp.status == 200) {
           document.getElementById("dialogTxt").innerHTML = xhttp.responseText;
          }
         
        };
          xhttp.open("POST", "Users.db?q="+str, true);
          xhttp.send();
        }
 }	
