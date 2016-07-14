function adminPowers(){};
  adminPowers.prototype = {
  	     add:function(){},
  	     block:function(){},
  	     addPoints:function(){},
  	     removePoints:function(){}
  	 
  };
  
  function makeAdmin(priv,rating){
  	     this.priviledge = priv;
  	     this.rating = rating;
         var rating = $('rating');
  	     
         var admin = {priviledge:priv,
                      rating:rating,
         	          points:0,
         	          Userrating:0
         	           
         };
         return;
  	
  }
    
       
   makeAdmin.prototype = {
   	    createAdmin:function(priv, rating){
   	    	    var obj = Object.create(makeAdmin);
   	    	    obj.setPriv(priv);
   	    	    obj.setRating(rating);
   	    	    return obj;
   	    },
   	    setRating:function(rating){ this.rating = rating;},
   	    getRating:function(){return this.rating;},
   	    setPriv:function(priv){this.priv = priv;},
   	    getPriv:function(){ return this.priv;}  
   	
   	 
