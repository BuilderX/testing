
    function signUpForm(){
        var user = $('userlogin');
        var password = $('passInput');  	
    	var matching = $('passInputMatch');
    	var submitButton = $('submitBtn');
    	var submit = userSignIn.sendToDB();
        var match = function checkMatch(pass,matching){
    	
    	checkMatch(password,matching);
    	
    	
    	var userWarningId = $('userWarning');
    	  if(typeof pass && typeof matching !=='string' ){
    	  	return -1;
    	  }
    	  while(pass !== matching){
    	  	$('userWarning').data('Passwords Do not match').addClass('userWarning');
     
    	  }
    	  return true;
    }
       
         if(match){
            $('submitBtn').click(function(){
                      submit();
                      window.location.replace('demo.html');
            	
            	
            });	
         	
         }else{
         	$('submitBtn').click(function(){
               $(this).attr("disabled","disabled");
               // onclick="disable('1')
});
         	
         }
         
    
    }
