
function tabelaImc(imc) {
    if (imc < 18.5) {
        return "abaixo";
    } else if (imc < 25) {
        return "normal";
    } else if (imc < 30) {
        return "sobrepeso"
    } else {
        return "obesidade"
    }
}


function calcularImc() {
    const peso = Number(document.getElementById("peso").value);
    const altura = Number(document.getElementById("altura").value);
    const imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function atualizarImc() {
    const seuImc = document.getElementById("seuImc");

    const imc = calcularImc();
    const tabela = tabelaImc(imc);

    if (tabela === "abaixo") {
        seuImc.style.color = "var(--cor-azul)";
    } else if (tabela === "normal") {
        seuImc.style.color = "var(--cor-escura)";
    } else if (tabela === "sobrepeso") {
        seuImc.style.color = "var(--cor-amarelo)";
    } else {
        seuImc.style.color = "var(--cor-vermelho)";
    }

    seuImc.textContent = imc;
}

function atualizarClassificacao() {
    const classificacao = document.getElementById("classificacao");

    const imc = calcularImc();
    const tabela = tabelaImc(imc);

    if (tabela === "abaixo") {
        classificacao.textContent = "Abaixo do Peso";
        classificacao.style.color = "var(--cor-azul)";
    } else if (tabela === "normal") {
        classificacao.textContent = "Peso Normal";
        classificacao.style.color = "var(--cor-escura)";
    } else if (tabela === "sobrepeso") {
        classificacao.textContent = "Sobrepeso";
        classificacao.style.color = "var(--cor-amarelo)";
    } else {
        classificacao.textContent = "Obesidade";
        classificacao.style.color = "var(--cor-vermelho)";
    }
}

function atualizarAviso() {
    const avisoDiv = document.getElementById("aviso-container");
    const aviso = document.getElementById("aviso-imc");
    const aviso2 = document.getElementById("aviso-imc2");
    const imc = calcularImc();
    const tabela = tabelaImc(imc);

    if (tabela === "abaixo") {
        aviso.textContent = "Atenção!"
        aviso2.textContent = "Seu imc está Abaixo da faixa considerada"
        avisoDiv.style.backgroundColor = "var(--cor-azul)";
    } else if (tabela === "normal") {
        aviso.textContent = "Parabens!"
        aviso2.textContent = "Seu imc está dentro da faixa considerada saudável"
        avisoDiv.style.backgroundColor = "var(--cor-clara)";
    } else if (tabela === "sobrepeso") {
        aviso.textContent = "Atenção!"
        aviso2.textContent = "Seu imc está acima da faixa considerada saudável"
        avisoDiv.style.backgroundColor = "var(--cor-amarelo)";
    } else {
        aviso.textContent = "Atenção!"
        aviso2.textContent = "Seu imc está na faixa de Obesidade"
        avisoDiv.style.backgroundColor = "var(--cor-vermelho)";
    }
}

function atualizarMarcador() {
    const marcador = document.getElementById("marcador");
    const imc = calcularImc();
    const tabela = tabelaImc(imc);

    if (tabela === "abaixo") {
        marcador.style.left = "12.5%";
    } else if (tabela === "normal") {
        marcador.style.left = "37.5%";
    } else if (tabela === "sobrepeso") {
        marcador.style.left = "62.5%";
    } else {
        marcador.style.left = "87.5%";
    }
}

function validarDados() {
    const peso = Number(document.getElementById("peso").value);
    const altura = Number(document.getElementById("altura").value);

    if (peso <= 0 || altura <= 0) {
        return false;
    }

    return true;
}

function calcularBotao() {
    const calcularBotao = document.getElementById("calcular");
    const aparecer = document.querySelector(".resultado")

    calcularBotao.addEventListener("click", function () {

        if (validarDados() === false) {
            alert("Insira valores validos");
            return;
        }

        aparecer.style.opacity = "0%";
        aparecer.style.transform = "translateY(-30px)";


        setTimeout(function () {
            aparecer.style.opacity = "100%"
            aparecer.style.transform = "translateY(0px)"
        }, 150);

        atualizarImc();
        atualizarClassificacao();
        atualizarMarcador();
        atualizarAviso();
    })

}

calcularBotao();






