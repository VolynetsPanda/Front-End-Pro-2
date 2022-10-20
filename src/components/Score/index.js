class Score{
    constructor() {
        this.score = 0
    }
    render(){
        document.getElementById('root').innerHTML = this.score
    }
    add(){
        this.score++
        this.render()
    }
}
export default Score
