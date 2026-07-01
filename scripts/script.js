const pesquisa = document.getElementById("pesquisa");
const pesquisarBtn = document.getElementById("pesquisar");
const cards = document.querySelectorAll(".card");

pesquisarBtn.addEventListener("click", function () {

    const cidade = pesquisa.value.toLowerCase();

    cards.forEach(function(card) {

        const cidadeCard = card.dataset.cidade.toLowerCase();

        if (cidadeCard.includes(cidade) || cidade === "") {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});