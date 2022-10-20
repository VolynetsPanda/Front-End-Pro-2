import Ball from "components/Ball";

class ControllerBall{
    constructor(score) {
        this.score = score
        this.size = 100
        this.speed = 5
        this.interval = 100
    }
    init(){
        this.renderBall()
        this.move()
    }
    renderBall(){
       this.ball = new Ball(this.random(), this.size)
       this.ball.addEventListener('click', () => {
           this.destroy()
           this.score.add()
       })
    }
    random(){
        return Math.ceil(Math.random() * window.innerWidth) - this.size
    }
    move(){
        let y = 0
        this.moveInterval = setInterval(() => {
            y += this.speed
            this.ball.style.top = y + 'px'
            if(y > window.innerHeight - this.size){
                clearInterval(this.moveInterval)
                this.destroy()
            }
        }, this.interval)
    }
    destroy(){
        this.ball.remove()
        delete this
    }
}
export default ControllerBall
