function codificar(texto) {
    let texto_codificado = "";
  
    for (let i = 0; i < texto.length; i++) {
      if (texto[i] === "e") {
        texto_codificado += "enter";
      } else if (texto[i] === "a") {
        texto_codificado += "ai";
      } else if (texto[i] === "i") {
        texto_codificado += "imes";
      } else if (texto[i] === "o") {
        texto_codificado += "ober";
      } else if (texto[i] === "u") {
        texto_codificado += "ufat";
      } else {
        texto_codificado += texto[i];
      } 
    }

    
    console.log(texto_codificado);
    return(texto_codificado)
  }
  

function decodificar(textoCodificado) {
    const dicionario = {
        enter: "e",
        ai: "a",
        imes: "i",
        ober: "o",
        ufat: "u"
    };
  
    let textoDecodificado = textoCodificado;
  
    for (const chave in dicionario) {
        textoDecodificado = textoDecodificado.replaceAll(chave, dicionario[chave]);
    }
  
    return (textoDecodificado);
}

function campoRespostaCriptografar() {
    texto = document.getElementById("areaTextoId").value;
    const elemento = document.querySelector(".resposta")
    if (elemento) {
        elemento.value = codificar(texto);
        
    } else {
        const campoTexto = document.createElement("textarea");
        campoTexto.value = codificar(texto);
        campoTexto.classList.add("resposta");
        

        container = document.getElementById("teste1");
        container.removeChild(document.getElementById("teste"));
        container.removeChild(document.getElementById("teste2"));
    
        container.appendChild(campoTexto);

    }
}

function campoRespostaDescriptografar() {
    texto = document.getElementById("areaTextoId").value;
    const elemento = document.querySelector('.resposta');
    if (elemento) {
        elemento.value = decodificar(texto);
        
    } else {
        const campoTexto = document.createElement("textarea");
        campoTexto.value = decodificar(texto);
        campoTexto.classList.add("resposta");
        

        container = document.getElementById("teste1");
        container.removeChild(document.getElementById("teste"));
        container.removeChild(document.getElementById("teste2"));
    
        container.appendChild(campoTexto);

    }
}

function converterTexto(textarea) {
    //Converter para minúscula
    let texto = textarea.value.toLowerCase();
    texto = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    textarea.value = texto;
}