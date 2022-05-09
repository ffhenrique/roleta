function Roleta () {
    let contLinha = 1;
    let contQuadrante = 1;
    let seqFiboLinha = [0];
    let seqFiboQuadrante = [0];

    this.conteudoLinha = document.querySelector('.input-linha');
    this.conteudoQuadrante = document.querySelector('.input-quadrante');


    this.inicia = () => {
        this.conteudoLinha.innerText = '0'
        this.conteudoQuadrante.innerText = '0'
        this.cliqueBotoes();
        
    };
    
    this.cliqueBotoes = () => {
        document.addEventListener('click', (e) => {
            el = e.target;

            if (el.classList.contains('btn-zera-linha')) {
                this.zeraLinha();
            }

            if (el.classList.contains('btn-zera-quadrante')) {
                this.zeraQuadrante();
            }

            if (el.classList.contains('btn-zerar')) {
                this.zerar();
            }

            if (el.classList.contains('btn-add-linha')) {
                contLinha += 1;  
                this.fiboLinha(); 
                             
            }

            if (el.classList.contains('btn-add-quadrante')) {
                contQuadrante += 1;
                this.fiboQuadrante();
            }


        });  
    };
    
    this.zeraLinha = () => {
        this.conteudoLinha.innerText = '0';
        contLinha = 1;
        seqFiboLinha = [0];
    };

    this.zeraQuadrante = () => {
        this.conteudoQuadrante.innerText = '0';
        contQuadrante = 1;
        seqFiboQuadrante = [0];
    };

    this.zerar = () => {
        this.zeraLinha();
        this.zeraQuadrante();
    };



    this.fiboLinha = () => {

        if (contLinha == 2) {
            seqFiboLinha.push(1);
            return this.conteudoLinha.innerText = seqFiboLinha[seqFiboLinha.length - 1];
        }

        if (contLinha == 3) {
            let t1 = seqFiboLinha[seqFiboLinha.length - 2];
            let t2 = seqFiboLinha[seqFiboLinha.length -1];
            let t3 = t1 + t2;
            seqFiboLinha.push(t3); 
            return this.conteudoLinha.innerText = seqFiboLinha[seqFiboLinha.length - 1];
        }

        if (contLinha > 3) {
            let t1 = seqFiboLinha[seqFiboLinha.length - 2];
            let t2 = seqFiboLinha[seqFiboLinha.length -1];
            let t3 = t1 + t2;
            seqFiboLinha.push(t3);
            return this.conteudoLinha.innerText = seqFiboLinha[seqFiboLinha.length - 1];

        }     
    };

    this.fiboQuadrante = () => {

        if (contQuadrante == 2) {
            seqFiboQuadrante.push(1);
            return this.conteudoQuadrante.innerText = seqFiboQuadrante[seqFiboQuadrante.length - 1];
        }

        if (contQuadrante == 3) {
            let t1 = seqFiboQuadrante[seqFiboQuadrante.length - 2];
            let t2 = seqFiboQuadrante[seqFiboQuadrante.length -1];
            let t3 = t1 + t2;
            seqFiboQuadrante.push(t3); 
            return this.conteudoQuadrante.innerText = seqFiboQuadrante[seqFiboQuadrante.length - 1];
        }

        if (contQuadrante > 3) {
            let t1 = seqFiboQuadrante[seqFiboQuadrante.length - 2];
            let t2 = seqFiboQuadrante[seqFiboQuadrante.length -1];
            let t3 = t1 + t2;
            seqFiboQuadrante.push(t3);
            return this.conteudoQuadrante.innerText = seqFiboQuadrante[seqFiboQuadrante.length - 1];

        }     
    };

}

    
const roleta = new Roleta();
roleta.inicia();