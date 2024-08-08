const canvas = document.getElementById ('canvas').getContext('2d')
// let context = canvas.getContext('2d')

let fundo = new BG(0, 0, 500, 900, 'assets/sky.png')
let fundo2 = new BG(500, 0, 500, 900, 'assets/sky.png')

function draw(){
    fundo.draw()
    fundo2.draw()
}

function update(){
    fundo.move(7, 500, 0)
    fundo2.move(7, 0, 500)
}

function main(){
    canvas.clearRect(0, 0, 500, 900)
    update()
    draw()
}

setInterval(main, 100)