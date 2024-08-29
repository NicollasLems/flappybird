const canvas = document.getElementById ('canvas').getContext('2d')
// let context = canvas.getContext('2d')

let fundo = new BG(0, 0, 500, 900, 'assets/sky.png')
let fundo2 = new BG(500, 0, 500, 900, 'assets/sky.png')
let ground = new BG(0, 700, 500, 200, 'assets/ground.png')
let ground2 = new BG(500, 700, 500, 200, 'assets/ground.png')
let bird = new BIRD(50, 400, 63, 51, 'assets/bird0.png')

document.addEventListener('click', function(e){
    bird.velocidade -= 25
})

function draw(){
    fundo.draw()
    fundo2.draw()
    ground.draw()
    ground2.draw()
    bird.draw()
}

function update(){
    fundo.move(1, 500, 0)
    fundo2.move(1, 0, 500)
    ground.move(2, 500, 0)
    ground2.move(2, 0, 500)
    bird.move()
    bird.animacao(7, 4,'bird')
    bird.limite()
}

function main(){
    canvas.clearRect(0, 0, 500, 900)
    update()
    draw()
    requestAnimationFrame(main)
}

main()