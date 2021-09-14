// Fala pro navegador pra ser mais restrito, para prestar mais atenção aos erros
// Para mostrar mais os erros
"use strict"
//                                      evento
const lampada = document.getElementById("lampada")
let idLigar 
let idDesligar


function lampadaInteira(){
    return lampada.src.includes ("ligada")
}

function ligarLampada(){
    if(lampadaInteira())
    {
        lampada.src = "img/ligada.jpg"
    }
}

function desligarLampada(){
    if(lampadaInteira())
    {
        lampada.src = "img/desligada.jpg"
    }
}

function quebrarLampada(){
    lampada.src = "img/quebrada.jpg"
}

function lampadaDesligada(){
    return lampada.src.includes ("desligada")
}

function trocarImagem(){
    if (lampadaDesligada()) {
        ligarLampada()
    }
    else{
        desligarLampada()
    }
}

function piscar()
{
    // const botaoPiscar = document.getElementById("btnPiscar")
    // if(botaoPiscar.textContent == "Parar"){
    //     idLigar = setInterval(ligarLampada,500)
    //     idDesligar = setInterval(desligarLampada,1000)
    //     botaoPiscar.textContent = "Parar"
    // }

    setInterval(trocarImagem,1000)
}

//callback é uma função passada como parâmetro para outra função
document.getElementById("btnLigar")
    .addEventListener("click",ligarLampada)

document.getElementById("btnDesligar")
    .addEventListener("click",desligarLampada)

document.getElementById("btnPiscar")
    .addEventListener("click", piscar)

lampada.addEventListener("mouseover", ligarLampada)
lampada.addEventListener("mouseout",desligarLampada)


document.getElementById("lampada").addEventListener("dblclick",quebrarLampada)