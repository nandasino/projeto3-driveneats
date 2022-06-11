function selecionarPrato (elemento){
    const itemClicado = document.querySelector(".selecionar");
    if (itemClicado !==null){
        itemClicado.classList.remove("selecionar");
    }
    elemento.classList.add("selecionar");
}
function selecionarBebida (elemento){
    const itemClicado = document.querySelector(".bebidas .selecionar");
    if (itemClicado !==null){
        itemClicado.classList.remove("selecionar");
    }
    elemento.classList.add("selecionar");
}
function selecionarSobremesa (elemento){
    const itemClicado = document.querySelector(".sobremesas .selecionar");
    if (itemClicado !==null){
        itemClicado.classList.remove("selecionar");
    }
    elemento.classList.add("selecionar");
}