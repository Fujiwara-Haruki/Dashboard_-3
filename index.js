//document.querySelector - buscar elemento a partir do seletor css
//document.getElementById - buscar pelo ID
//document.getElementByClassName - buscar pelo nome da classe
//document.getElementByTagName - buscar elemento pela tag HTML
//document.querySelectorAll - buscar todos os elementos a partir de seletor css

let formulario = document.querySelector(".formulario_produto");
console.log(formulario);

let corpo_tabela = document.querySelector(".tabela_produto");

let campos = document.querySelectorAll(".campo");
console.log(campos);

//primeira forma - programador junior
 /*function submenterFormularioSimples(evento){
    evento.preventDefault();  //não recaregar a página ao submeter no formulario
    alert("teste");
}

formulario.addEventListener("submit", submenterFormularioSimples);*/

// segunda forma - programação pleno - função anonima(sem nome);
/*
formulario.addEventListener("submit", function(evento){
    evento.preventDefault();
    alert("Testeaaa");
});*/

// terceira forma - programador sênior - arrow function
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    
    //jogar os valores do formulario na tabela
    let tr = document.createElement("tr");

    /*for (let x = 0; x < campos.length; x++){
        let td = document.createElement("td");
        td.textContent = campos[x].value; //innerHTML e textContent
        tr.appendChild(td);
    }*/

    campos.forEach(campo =>{
        let td = document.createElement("td");
        td.textContent = campo.value; //innerHTML e textContent
        tr.appendChild(td);
    })

    corpo_tabela.appendChild(tr);
})