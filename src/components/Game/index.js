import ControllerBall from "components/ControllerBall";
import Score from "components/Score";

class Game{
    constructor() {
        this.timer = 1000
        this.score = new Score()
    }
    start(){
      this.balls = []
      this.interval = setInterval(() => {
          this.balls.push(new ControllerBall(this.score).init())
      }, this.timer)
    }
    gameOver(){

    }
}
export default Game

