class obj{ //constroi o obj
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
}

class BG extends obj{
    move(velocidade, limite, pos){
        this.px -= velocidade
        if(this.px < -limite){
            this.px = pos
        }
    }
}