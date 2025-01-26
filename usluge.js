const naslov = document.getElementById("usluge-title");
const objasnjenje = document.getElementById("usluge-explain");
const cijena = document.getElementById("usluge-price");
const hosting = document.getElementById("usluge-hosting");
const list = document.getElementById("usluge-list");
const button1 = document.getElementById("option-1");
const button2 = document.getElementById("option-2");
const button3 = document.getElementById("option-3");

const usluge = [
    {
        id: 0,
        naslov: "Start",
        objasnjenje: "Čista, mobilno responzivna, web stranica savršena za osobne profile ili landing stranice.",
        cijena: "150€ - 300€",
        hosting: "Hosting + domena",
    },
    {
        id: 1,
        naslov: "Multi-page",
        objasnjenje: "Višestranična web stranica s naprednim funkcionalnostima za rastuće tvrtke i organizacije.",
        cijena: "400€ - 600€",
        hosting: "Hosting + domena",
    },
    {
        id: 2,
        naslov: "Pro",
        objasnjenje: "Veće tvrtke koje žele profesionalnu, naprednu web stranicu.",
        cijena: "800€ - 1500€",
        hosting: "Hosting + domena",
    },
]

const uslugeListItems = [
    [

        "1 - 3 stranice",
        "Dizajn s prilagodbom boja i logotipa.",
        "Mobilno responzivan dizajn.",
        "Osnovne kontakt forme.",
        "Instalacija i postavljanje na hosting."
    ],
    [
        "Do 6 stranica",
        "Prilagođeni dizajn u skladu s brendom.",
        "Optimizacija za mobilne uređaje i brzinu učitavanja.",
        "SEO optimizacija.",
        "Integracija osnovnih analitika (Google Analytics).",
        "Podrška u trajanju od 30 dana nakon lansiranja.",
    ],
    [
        "Web stranica s prilagođenim funkcionalnostima",
        "Puni custom dizajn i UX optimizacija.",
        "Višejezična podrška.",
        "Integracija naprednih analitika i marketinških alata",
        "SEO optimizacija.",
        "3 mjeseca podrške i održavanja.",
    ]
]

naslov.innerText = usluge[0].naslov;
objasnjenje.innerText = usluge[0].objasnjenje;
cijena.innerText = usluge[0].cijena;
hosting.innerText = usluge[0].hosting;
const firstListItems = uslugeListItems[0];
firstListItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.innerText = item;
    list.appendChild(listItem);
})

const updateUsluge = (id) => {
    const usluga = usluge.find((usluga) => usluga.id === id);
    naslov.innerText = usluga.naslov;
    objasnjenje.innerText = usluga.objasnjenje;
    cijena.innerText = usluga.cijena;
    hosting.innerText = usluga.hosting;

    list.innerHTML = "";

    const listItems = uslugeListItems[id];
    listItems.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.innerText = item;
        list.appendChild(listItem);
    })
}

button1.addEventListener("click", () => {
    updateUsluge(0);
})
button2.addEventListener("click", () => {
    updateUsluge(1);
})
button3.addEventListener("click", () => {
    updateUsluge(2);
})