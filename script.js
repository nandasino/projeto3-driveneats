function selecionarPrato (elemento){
    let itemClicado = document.querySelector('.pratos .selecionar');
    if (itemClicado !==null){
        itemClicado.classList.remove('selecionar');
    }
    elemento.classList.add('selecionar');
    fecharPedido()
}
function selecionarBebida (elemento){
    let itemClicado = document.querySelector('.bebidas .selecionar');
    if (itemClicado !==null){
        itemClicado.classList.remove('selecionar');
    }
    elemento.classList.add("selecionar");
    fecharPedido()
}
function selecionarSobremesa (elemento){
    let itemClicado = document.querySelector('.sobremesas .selecionar');
    if (itemClicado !==null){
        itemClicado.classList.remove('selecionar');
    }
    elemento.classList.add('selecionar');
    fecharPedido()
}

function fecharPedido(){
    let pedidoFechado = document.querySelector('.botao');
    let textoBotao = document.querySelector('.texto-botao');

    let checarPratos = document.querySelector('.pratos .selecionar');
    let checarBebidas = document.querySelector('.bebidas .selecionar');
    let checarSobremesas = document.querySelector('.sobremesas .selecionar');

    if(checarPratos && checarBebidas && checarSobremesas){
    pedidoFechado.classList.add('fechar-pedido')
    textoBotao.innerHTML = "Fechar pedido"
    }
}

function abrirWhats(){
    let checarPratos = document.querySelector('.pratos .selecionar');
    let checarBebidas = document.querySelector('.bebidas .selecionar');
    let checarSobremesas = document.querySelector('.sobremesas .selecionar');

    if(checarPratos && checarBebidas && checarSobremesas){
        const nomePrato = checarPratos.querySelector('.nome-opcao')
        const nomeBebida = checarBebidas.querySelector('.nome-opcao')
        const nomeSobremesa = checarSobremesas.querySelector('.nome-opcao')

        const precoPrato = checarPratos.querySelector('.numero')
        const precoBebida = checarBebidas.querySelector('.numero')
        const precoSobremesa = checarSobremesas.querySelector('.numero')

        const nomePratoApenas = nomePrato.innerText
        const nomeBebidaApenas = nomeBebida.innerText
        const nomeSobremesaApenas = nomeSobremesa.innerText

        const precoPratoApenas = precoPrato.innerText
        const precoBebidaApenas = precoBebida.innerText
        const precoSobremesaApenas = precoSobremesa.innerText

        const precoPratoApenasNumero = parseFloat(precoPratoApenas)
        const precoBebidaApenasNumero = parseFloat(precoBebidaApenas)
        const precoSobremesaApenasNumero = parseFloat(precoSobremesaApenas)

        const total = precoPratoApenasNumero + precoBebidaApenasNumero + precoSobremesaApenasNumero

        let textodecompra = `
        Olá, gostaria de fazer o pedido:
        - Prato: ${nomePratoApenas}
        - Bebida: ${nomeBebidaApenas}
        - Sobremesa: ${nomeSobremesaApenas}
        Total: R$ ${total}
        `
        alert(textodecompra)
    }
}
