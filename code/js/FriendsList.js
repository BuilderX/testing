  function FriendList(){
        var friends = [];
        var enemyList = [];
        
        var addFr = function(f){
             friends.push(f);
        }
        var removeFr =  function(){
             friends.pop();
        }
        var removeFriend = function(g){
            var index = friends.indexOf(g);
               if (index > -1 ) {
               friends.splice(index, 1);
           }
        }
        var mostRecentUser = function() {
             return friends[friends.length - 1];
     }
        return {
                list:friends,
                add:addFr,
                rem:removeFriend,
                mr:mostRecentUser
            
        };
          
    }
