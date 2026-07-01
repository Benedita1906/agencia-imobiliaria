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

const btnPesquisa = document.getElementById("abrirPesquisa");
const caixaPesquisa = document.getElementById("caixaPesquisa");

btnPesquisa.addEventListener("click", function () {

    if (caixaPesquisa.style.width === "250px") {

        caixaPesquisa.style.width = "0";
        caixaPesquisa.style.opacity = "0";

    } else {

        caixaPesquisa.style.width = "250px";
        caixaPesquisa.style.opacity = "1";

        caixaPesquisa.focus();

    }

});