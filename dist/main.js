(() => {
  "use strict";
  class e {
    constructor(e) {
      (this.username = e);
        (this.score = { user: 0, cpu: 0 });
        (this.gameHistoryLog = []);
    }
    generateCPUResponse() {
      return ["rock", "paper", "scissors"][Math.floor(3 * Math.random())];
    }
    determineWinner(e, t) {
      return e === t
        ? "tie"
        : "rock" === e
        ? "scissors" === t
          ? "win"
          : "lose"
        : "paper" === e
        ? "rock" === t
          ? "win"
          : "lose"
        : "scissors" == e && "paper" === t
        ? "win"
        : "lose";
    }
    play(e) {
      const t = this.generateCPUResponse();
      "win" == this.determineWinner(e, t)
        ? (this.score.user++,
          this.gameHistoryLog.push(
            `${this.username} selected ${e}, CPU selected ${t}: ${this.username} wins`.toString()
          ))
        : "lose" == this.determineWinner(e, t)
        ? (this.score.cpu++,
          this.gameHistoryLog.push(
            `${this.username} selected ${e}, CPU selected ${t}: CPU wins`.toString()
          ))
        : "tie" == this.determineWinner(e, t) &&
          this.gameHistoryLog.push(
            `${this.username} selected ${e}, CPU selected ${t}: ${this.username} ties with CPU`.toString()
          );
    }
  }
  const t = document.getElementById("welcome-screen"),
    s = document.getElementById("game-screen"),
    n = document.getElementById("start-game-button"),
    o = document.getElementById("username"),
    r = document.getElementById("user-selection"),
    i = document.getElementById("go-button"),
    c = document.getElementById("score"),
    a = document.getElementById("game-history");

    let m = new e();

    s.classList.add("d-none");
    
    n.addEventListener("click", function (n) {
      n.preventDefault();
      s.classList.remove("d-none");
      const r = o.value;
      t.classList.add("d-none"); 
      (m = new e(r));
    }),
    i.addEventListener("click", function (e) {
      e.preventDefault();
        m.play(r.value.toLowerCase());
        (c.textContent = "");
        (c.textContent = `${m.username}: ${m.score.user} vs CPU: ${m.score.cpu}`.toString());
        (a.textContent = new String());
        (a.textContent = m.gameHistoryLog.split(", "));
    });
})();
