
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
        this.removeFriend = function(){
            list.pop();
        }
        this.mostRecentUser: function() {
        return list[list.length - 1];
     }
        
          
    }
