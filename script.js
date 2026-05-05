const borrar = document.getElementById("blur");
const nomes = document.getElementById("nomes");
const botao = document.getElementById("salvar");


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

let pagina = 1;

function loop() {
    
    if (pagina > 6){

        pagina = 1;

    }else if (pagina <1){

        pagina = 6;

    };

    const pericias = document.getElementById("pericias");
    const combate = document.getElementById("combate");
    const relvas = document.getElementById("relvas");
    const inventario = document.getElementById("inventario");
    const talentos = document.getElementById("talentos");
    const info = document.getElementById("info");


    switch(pagina){
        case 1:
            info.style.display = "none";
            pericias.style.display = "flex";
            combate.style.display = "none";
            break;
        case 2:
            pericias.style.display = "none";
            combate.style.display = "flex";
            relvas.style.display = "none";
            break;
        case 3:
            combate.style.display = "none";
            relvas.style.display = "flex";
            inventario.style.display = "none";
            break;
        case 4:
            relvas.style.display = "none";
            inventario.style.display = "flex";
            talentos.style.display = "none";
            break;
        case 5:
            inventario.style.display = "none";
            talentos.style.display = "flex";
            info.style.display = "none";
            break;
        case 6:
            talentos.style.display = "none";
            info.style.display = "flex";
            pericias.style.display = "none";
            break;

    }

    setTimeout(loop, 100);
}

loop(pagina);


