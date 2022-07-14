export class RockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = {
      user: 0,
      cpu: 0 
    },
    this.gameHistoryLog = [];
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse(){
    const acceptedValues = [ `rock`, `paper`, `scissors` ];
    return acceptedValues[Math.floor(Math.random() * 3)];
  }
  /**
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(userSelection, cpuSelection){
    if (userSelection === cpuSelection) {
      return "tie";
    }

    if (userSelection === "rock") {
      if (cpuSelection === "scissors") {
        return "win"
      } else {
        return "lose"
      }
    }
    //Check for Paper
    else if (userSelection === "paper") {
      if (cpuSelection === "rock") {
       return "win"
      } else {
        return "lose"
      }
    }
    //Check for Scissors
    else if(userSelection == "scissors"){
      if (cpuSelection === "paper") {
        return "win"
      } else {
        return "lose"
      }
    }

  else{
    return "lose"
  }
} 
  /**
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection){
    const cpuResponse = this.generateCPUResponse()
    if(this.determineWinner(userSelection, cpuResponse) == "win")
    {
      this.score.user++
      this.gameHistoryLog.push(`${this.username} selected ${userSelection}, CPU selected ${cpuResponse}: ${this.username} wins`.toString());

    }
    
    else if(this.determineWinner(userSelection, cpuResponse)=="lose")
    {
      this.score.cpu++
      this.gameHistoryLog.push(`${this.username} selected ${userSelection}, CPU selected ${cpuResponse}: CPU wins`.toString());

    }
    else if(this.determineWinner(userSelection, cpuResponse)=="tie")
    {
      this.gameHistoryLog.push(`${this.username} selected ${userSelection}, CPU selected ${cpuResponse}: ${this.username} ties with CPU`.toString());
    }
    //alert(this.determineWinner(userSelection, cpuResponse))
  }

}