
 function FriendList(){
        var friends = [];
        var enemyList = [];
        var list = function(){
            var frd = friends;
            return frd;
        }
        this.addFriend = function(f){
             list.push(f);
        }
        this.removeFriend = function(o){
            var index = list.indexOf(o);
               if (index > -1) {
               array.splice(index, 1);
           }
        }
        this.mostRecentUser = function() {
             return list[list.length - 1];
     }
        
          
    }
