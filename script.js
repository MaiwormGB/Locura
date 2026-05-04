const borrar = document.getElementById("blur");
const nomes = document.getElementById("nomes");
const botao = document.getElementById("salvar");

let pagina = 1;

function borrarFundo(){

    const displayAtual = borrar.style.display || window.getComputedStyle(borrar).display;

    if (displayAtual === "none"){

        borrar.style.display = "flex";

    } else{

        borrar.style.display = "none";

    }


};

botao.addEventListener("click", function () {
    const novoNome = document.getElementById("novoNome").value;
    const novoJogador = document.getElementById("novoJogador").value;
    const nome = document.getElementById("nome");
    const jogador = document.getElementById("jogador");

    console.log(novoNome, novoJogador);

    const dados = {
        nome: novoNome,
        jogador: novoJogador
    };

    console.log(dados);

    nome.innerHTML = "[" + dados.nome + "]";
    jogador.innerHTML = "[" + dados.jogador + "]";

});

function loop() {
    
    switch(pagina){
        case 1:
            


    }

    setTimeout(loop, 100);
}

loop();


