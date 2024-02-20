botaoCriptografia();
botaoDescriptografar();
let texto = document.querySelector('textarea').value;


function botaoCriptografia() {
    let telaPrincipal = document.getElementById("conteudo__imagem");
    let telaFinal = document.getElementById("conteudo__sem__imagem");
    let mensagem = "";
    let texto = document.querySelector('textarea').value;

    telaPrincipal.style.display = 'block';
    telaFinal.style.display = 'none';


    if (/[A-ZÀ-Úà-ú0-9]/.test(texto)) {
        alert("Não utilize números ou caracteres acentuados");
    }else {

        for (let i = 0; i < texto.length; i++) {
            if (texto[i] == "a") {
                mensagem = mensagem + "ai";
            }
            else if (texto[i] == "e") {
                mensagem = mensagem + "enter";
            }
            else if (texto[i] == "i") {
                mensagem = mensagem + "imes";
            }
            else if (texto[i] == "o") {
                mensagem = mensagem + "ober";
            }
            else if (texto[i] == "u") {
                mensagem = mensagem + "ufat";
            }
            else {
                mensagem = mensagem + texto[i]
            }

            telaPrincipal.style.display = 'none';
            telaFinal.style.display = 'block';
        }

        let textoTraduzido = document.getElementById("texto__traduzido");
        textoTraduzido.textContent = mensagem;
    
    } 
}


function botaoDescriptografar() {
    let telaPrincipal = document.getElementById("conteudo__imagem");
    let telaFinal = document.getElementById("conteudo__sem__imagem");
    let mensagem = "";
    let texto = document.querySelector('textarea').value;

    telaPrincipal.style.display = 'block';
    telaFinal.style.display = 'none';

    if (/[A-ZÀ-Úà-ú0-9]/.test(texto)) {
        alert("Não utilize números ou caracteres acentuados");
    }else {
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            mensagem = mensagem + "a";
            i += 1;
        }
        else if (texto[i] == "e") {
            mensagem = mensagem + "e";
            i += 4;
        }
        else if (texto[i] == "i") {
            mensagem = mensagem + "i";
            i += 3;
        }
        else if (texto[i] == "o") {
            mensagem = mensagem + "o";
            i += 3;
        }
        else if (texto[i] == "u") {
            mensagem = mensagem + "u";
            i += 3;
        }
        else {
            mensagem = mensagem + texto[i];
        }
        telaPrincipal.style.display = 'none';
        telaFinal.style.display = 'block';

        console.log(mensagem);
    }
    let textoTraduzido = document.getElementById("texto__traduzido");
    textoTraduzido.textContent = mensagem;
}

}

let copiarTexto = document.getElementById('texto__traduzido');
console.log(copiarTexto);

function botaoCopiar() {
    const msg = document.querySelector(".texto__traduzido").value;
    console.log(msg);
    navigator.clipboard.writeText(msg);

    let telaLimpa = document.querySelector('textarea');
    telaLimpa.value = '';

}

