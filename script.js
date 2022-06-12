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
        const nomePrato = checarPratos.querySelector('.nome')
        const nomeBebida = checarBebidas.querySelector('.nome')
        const nomeSobremesa = checarSobremesas.querySelector('.nome')

        const precoPrato = checarPratos.querySelector('.preco')
        const precoBebida = checarBebidas.querySelector('.preco')
        const precoSobremesa = checarSobremesas.querySelector('.preco')
    }
}
