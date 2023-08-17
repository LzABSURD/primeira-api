const apiKey = "e4c91a3b";
const formPesquisa = document.querySelector("form");

const carregaLista = (json) => {
     const lista = document.querySelector(".lista");
     lista.innerHTML = "";
     
     json.Search.forEach(element =>{
            let item = document.createElement("div");
            item.classList.add("item");

            item.innerHTML = `<img src="${element.Poster}" /><h2>${element.Title}</h2>`;

            lista.appendChild(item);

     });
};



formPesquisa.onsubmit = (e) => {
    e.preventDefault();

    const pesquisa = e.target.pesquisa.value;
    
    if (pesquisa == ""){
        alert("Porfavor, preencha o campo");
        return;
    }

    fetch(`https://www.omdbapi.com/?s=${pesquisa}&apikey=${apiKey}`)
        .then(result => result.json())
        .then(json => carregaLista(json))
        .catch(error => console.error("ocorreu um erro:", error));
};