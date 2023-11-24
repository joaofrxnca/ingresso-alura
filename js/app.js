function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let qtdIngresso = parseInt(document.getElementById('qtd').value);

    if (tipoIngresso == 'inferior') {
        comprarInferior(qtdIngresso);
    }  else if (tipoIngresso == 'superior') {
        comprarSuperior (qtdIngresso)
    } else if (tipoIngresso = 'pista') {
        comprarPista (qtdIngresso)
    }
}

function comprarInferior (qtdIngresso) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (qtdIngresso > qtdInferior) {
        alert ('Ingressos indisponiveis para compra!');
    } else {
        qtdInferior = qtdInferior - qtdIngresso;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert ('Compra realizada com sucesso!');
    }
}

function comprarSuperior (qtdIngresso) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if (qtdIngresso > qtdSuperior) {
        alert ('Ingressos indisponiveis para compra!');
    } else {
        qtdSuperior = qtdSuperior - qtdIngresso;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert ('Compra realizada com sucesso!');
    }
}

function comprarPista (qtdIngresso) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    if (qtdIngresso > qtdPista) {
        alert ('Ingressos indisponiveis para compra!');
    } else {
        qtdPista = qtdPista - qtdIngresso;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert ('Compra realizada com sucesso!');
    }
}

