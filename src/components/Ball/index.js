class Ball{
    constructor(x, size) {
        this.size = size;
        this.x = x;
        this.createBall();
        return this.ball;
    }
    createBall(){
        this.ball = document.createElement('div')
        this.ball.className = 'ball'
        this.ball.style.cssText =  `
          position: fixed;
          width: ${this.size}px;
          height: ${this.size}px;
          border-radius: 50%;
          background: red;
          top: 0px;
          left: ${this.x}px;
        `
        document.body.append(this.ball)
    }
}
export default Ball
