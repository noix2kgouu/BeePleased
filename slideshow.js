//selecteur suivant et precedent des images
let selecteurPrecedent = document.querySelector('#selecteurPrecedent');
let selecteurSuivant = document.querySelector('#selecteurSuivant');

//images du diaporama
let image1 = document.querySelector('#image1');//parapente
let image2 = document.querySelector('#image2');//culinaire
let image3 = document.querySelector('#image3');//voiture
let image4 = document.querySelector('#image4');//vtt

//texte sous titre
let texte1 = document.querySelector('#text1');//parapente
let texte2 = document.querySelector('#text2');//culinaire
let texte3 = document.querySelector('#text3');//voiture
let texte4 = document.querySelector('#text4');//vtt

//indication image actuel
let cercle1 = document.querySelector('#cercle1');//parapente
let cercle2 = document.querySelector('#cercle2');//culinaire
let cercle3 = document.querySelector('#cercle3');//voiture
let cercle4 = document.querySelector('#cercle4');//vtt

let imageActuel = 1;//var image actuel

selecteurPrecedent.addEventListener("click", () => {//image precedente demandé

    if (imageActuel == 1) {
        image4.style.display = "block";
        image1.style.display = "none";

        texte4.style.display = "block";
        texte1.style.display = "none";

        cercle4.style.backgroundColor = "white";
        cercle1.style.backgroundColor = "transparent";


        imageActuel=4;
    }
    else if (imageActuel == 2) {
        image1.style.display = "block";
        image2.style.display = "none";

        texte1.style.display = "block";
        texte2.style.display = "none";

        cercle1.style.backgroundColor = "white";
        cercle2.style.backgroundColor = "transparent";

        imageActuel=1;
    }
    else if (imageActuel == 3) {
        image2.style.display = "block";
        image3.style.display = "none";

        texte2.style.display = "block";
        texte3.style.display = "none";

        cercle2.style.backgroundColor = "white";
        cercle3.style.backgroundColor = "transparent";

        imageActuel=2;
    }
    else if (imageActuel == 4) {
        image3.style.display = "block";
        image4.style.display = "none";

        texte3.style.display = "block";
        texte4.style.display = "none";

        cercle3.style.backgroundColor = "white";
        cercle4.style.backgroundColor = "transparent";

        imageActuel=3;
    }
})

selecteurSuivant.addEventListener("click", () => {//image suivante demandé

    if (imageActuel == 1) {
        image2.style.display = "block";
        image1.style.display = "none";

        texte2.style.display = "block";
        texte1.style.display = "none";

        cercle2.style.backgroundColor = "white";
        cercle1.style.backgroundColor = "transparent";

        imageActuel=2;
    }
    else if (imageActuel == 2) {
        image3.style.display = "block";
        image2.style.display = "none";

        texte3.style.display = "block";
        texte2.style.display = "none";

        cercle3.style.backgroundColor = "white";
        cercle2.style.backgroundColor = "transparent";

        imageActuel=3;
    }
    else if (imageActuel == 3) {
        image4.style.display = "block";
        image3.style.display = "none";

        texte4.style.display = "block";
        texte3.style.display = "none";

        cercle4.style.backgroundColor = "white";
        cercle3.style.backgroundColor = "transparent";

        imageActuel=4;
    }
    else if (imageActuel == 4) {
        image1.style.display = "block";
        image4.style.display = "none";

        texte1.style.display = "block";
        texte4.style.display = "none";

        cercle1.style.backgroundColor = "white";
        cercle4.style.backgroundColor = "transparent";

        imageActuel=1;
    }
})

cercle1.addEventListener("click", () => {
    cercle1.style.backgroundColor = "white";
    cercle2.style.backgroundColor = "transparent";
    cercle3.style.backgroundColor = "transparent";
    cercle4.style.backgroundColor = "transparent";

    image1.style.display = "block";
    image2.style.display = "none";
    image3.style.display = "none";
    image4.style.display = "none";

    texte1.style.display = "block";
    texte2.style.display = "none";
    texte3.style.display = "none";
    texte4.style.display = "none";

    imageActuel=1;
})
cercle2.addEventListener("click", () => {
    cercle2.style.backgroundColor = "white";
    cercle1.style.backgroundColor = "transparent";
    cercle3.style.backgroundColor = "transparent";
    cercle4.style.backgroundColor = "transparent";

    image2.style.display = "block";
    image1.style.display = "none";
    image3.style.display = "none";
    image4.style.display = "none";

    texte2.style.display = "block";
    texte1.style.display = "none";
    texte3.style.display = "none";
    texte4.style.display = "none";

    imageActuel=2;
})
cercle3.addEventListener("click", () => {
    cercle3.style.backgroundColor = "white";
    cercle2.style.backgroundColor = "transparent";
    cercle1.style.backgroundColor = "transparent";
    cercle4.style.backgroundColor = "transparent";

    image3.style.display = "block";
    image2.style.display = "none";
    image1.style.display = "none";
    image4.style.display = "none";

    texte3.style.display = "block";
    texte2.style.display = "none";
    texte1.style.display = "none";
    texte4.style.display = "none";

    imageActuel=3;
})
cercle4.addEventListener("click", () => {
    cercle4.style.backgroundColor = "white";
    cercle2.style.backgroundColor = "transparent";
    cercle3.style.backgroundColor = "transparent";
    cercle1.style.backgroundColor = "transparent";

    image4.style.display = "block";
    image2.style.display = "none";
    image3.style.display = "none";
    image1.style.display = "none";

    texte4.style.display = "block";
    texte2.style.display = "none";
    texte3.style.display = "none";
    texte1.style.display = "none";
    
    imageActuel=4;
})
