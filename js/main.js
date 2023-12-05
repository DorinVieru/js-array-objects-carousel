const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// ------------- MILESTONE 1 ------------
// DICHIARO VARIABILE CHE TENGA TRACCIA DELL'INDEX DELL'IMMAGINE ATTUALE 
let slideIndex = 0;
const allImages = images.length;

//  VARIABILI PER IDENTIFICARE LE IMMAGINI, TITOLI, TESTI E PULSANTI DI PREV E NEXT
const slideImage = document.getElementById("slide-image");
const slideTitle = document.getElementById("slide-title");
const slideText = document.getElementById("slide-text");

const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");


// FUNZIONE PER AGGIORNARE IL CAROSELLO
function aggiornaCarousel() {
    const items = document.querySelectorAll(".item");

    items.forEach((item, index) => {
        item.classList.remove("active");

        if (index === slideIndex) {
            item.classList.add("active");
        }
    })
}


// ------------- MILESTONE 2 ------------
// FUNZIONE PER MOSTRARE L'IMMAGINE PRECEDENTE
prevButton.addEventListener("click", () => {
    slideIndex = (slideIndex - 1 + images.length) % images.length;
    aggiornaCarousel(slideImage);
})

// FUNZIONE PER MOSTRARE L'IMMAGINE SUCCESSIVA
nextButton.addEventListener("click", () => {
    slideIndex = (slideIndex + 1) % images.length;
    aggiornaCarousel(slideImage);
})