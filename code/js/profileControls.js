 function  profileControls(){}
  profileControls.prototype = {
  	   init:function(){ },
  	   changeProfilePic:function(){},
  	   openPicGallery:function(){
  	   	  var galleryBtn = $('#galleryBtn');
  	   	      galleryBtn.on('click','button',function(){
  	   	   
  	   	      });
  	   },
  	   createDebate:function(){
  	   	   var createDebate = $('#crtDebate');
  	   	
  	   },
  	   joinDebates:function(){
  	   	  var joinBtn = $('#joinBtn');
  	   	      joinBtn.on('click','button',function(){});},
  	   deletePosting:function(){},
  	   addPosting:function(){},
  	   logout:function(){
  	   	 var logout = $('logoutbtn');
  	   	    logout.on('click','button',function(){
  	   	      window.location.href = 'http://site.com/logout.php';
   	   	    });
  	   	
  	   }
  	
  }
