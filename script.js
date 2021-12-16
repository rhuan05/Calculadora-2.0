const contas = document.querySelector('.contas');

document.addEventListener('click', (e)=>{
    const elementoClicado = e.target;

    if(elementoClicado.classList[1] == 'limparConta'){
        contas.innerText = '';
    } else if(elementoClicado.classList[1] == 'contaFinal'){
        contas.innerText = eval(contas.innerText);
    } else if(elementoClicado.innerText == 'x'){
        contas.innerText += '*';
    } else if(elementoClicado.innerText == '÷'){
        contas.innerText += '/';
    } else if(elementoClicado.classList[1] == 'apagarUm'){
        //Excluir Somente UM.
        var contasTexto = contas.innerText;
        contasMenosUm = contasTexto.replace(/.$/, '');
        contas.innerText = contasMenosUm;
    } else if(elementoClicado.classList[1] == 'num'){
        contas.innerText += elementoClicado.innerText;
    };
});