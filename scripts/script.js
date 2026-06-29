const botao = document.getElementById("btnPesquisar");

botao.addEventListener("click", function () {

    const cidade = document
        .getElementById("cidade")
        .value
        .toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(function(card){

        const local = card.dataset.cidade.toLowerCase();

        if(local.includes(cidade) || cidade === ""){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }

    });

});