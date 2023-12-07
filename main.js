function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio'){
        //console.log(elemento.localName)
        elemento.play()
    }
    else{
        console.log('Elemento não encontrado ou seletor inválido')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

/* Usando while

let contador = 0;

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador]

    const instrumento = tecla.classList[1]

    //template string
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function () {
        tocaSom(idAudio)
    }

    contador += 1
}
*/

for (contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]
    
    const instrumento = tecla.classList[1]

    //template string
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function () {
        tocaSom(idAudio)
    }

    tecla.onkeydown = function (event) {

        //console.log(event)
        
        if (event.code === 'Space' || event.code === 'Enter'){
           tecla.classList.add('ativa'); 
        }
        
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}

