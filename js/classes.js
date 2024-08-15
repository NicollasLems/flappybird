class obj{ //constroi o obj
    quadro = 0
    tempo = 0
    
    constructor(px, py, lar, alt, imagem){
        this.px = px
        this.py = py
        this.lar = lar
        this.alt = alt
        this.imagem = imagem
    }
    draw(){
        let img = new Image()
        img.src = this.imagem
        canvas.drawImage(img, this.px, this.py, this.lar, this.alt)
    }

    animacao(vel, limite, nomeImg){
        this.tempo +=1
        if(this.tempo >= vel){
            this.tempo = 0
            this.quadro += 1
        }

        if(this.quadro >= limite){
            this.quadro = 0
        }

        this.imagem = 'assets/'+nomeImg+this.quadro+'.png'
    }
}

class BG extends obj{
    move(velocidade, limite, pos){
        this.px -= velocidade
        if(this.px < -limite){
            this.px = pos
        }
    }
}

class GROUND extends BG{

}

class BIRD extends obj{

}