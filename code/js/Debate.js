function Debate(NOR,debateTime,func,timeTil){
	
	 this.currentTiming;
	 this.currentRound;
	 this.NumOfRounds = NOR;
	 this.TotaldebateTime = debateTime;
	 var voiceOn = false;
	 
	 var DebateModel = {
	 	  currentTiming:0,
	 	  currentRound:0,
	 	  NofRounds:NOR,
	 	  TotaldebateTime:debateTime,
	 	  roundTime:timeSet(func,timeTil),
	 	  voice:voiceOn,
	   }
	 DebateModel.intermission = function(func,timeTil){
	 	
	 	         timeSet(func,timeTil);
	 	
	 }  
	   
	   
	return DebateModel;
}
