function Round(RoundMessage,currRound){
	  if(currRound < 0 || typeof currRound != 'number'){return -1;}
	  
	  	  console.log(RoundMessage);
          Intermission(); // starts timer
	      chatOn();
	      
	  if(Intermission.timer === 0){
	  	  chatOff();
	  	  debateSessionBegin(Intermission.timer);
	  	  
	  }
	   return currRound;
	 
}
