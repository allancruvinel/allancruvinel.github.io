const palavra = document.querySelector('.textAnswer');
const palavraPause = document.querySelector('.pausebutton');

var velocidade;

var progresso;
lendo = false;
i=0;
var texto;




function proximaPalavra(){
    palavra.innerHTML = texto[i];
    if(i<texto.length-1){
        i++;
    }
    
}

function playPause(){
    lendo = !lendo;
    if(lendo){
    progresso = setInterval(proximaPalavra, velocidade);
    palavraPause.innerHTML = 'Pause';
    }
    else
    {
        clearInterval(progresso);
        palavraPause.innerHTML = 'Play';
    }
    
}

function backwardwords(){
    i -= 10;
    if(i<0){
        i=0;
    }
    palavra.innerHTML = texto[i];
}

function frontwardwords(){
    i += 10;
    if(i>=texto.length){
        i=texto.length-1;
    }
    palavra.innerHTML = texto[i];
}

function lerIniciar(){
    velocidade = document.querySelector('input[type = radio]:checked').value;
    velocidade = 60000 / velocidade;
    clearInterval(progresso);
    userText = document.querySelector('.textField').value;
    texto = userText.split(" ");
    i=0;
    lendo= true;
    progresso = setInterval(proximaPalavra, velocidade);
}

function alterarVelocidade(){

}


