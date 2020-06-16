"use strict";
var Aufgabe7;
(function (Aufgabe7) {
    let j = parseInt(localStorage.getItem("counterbeginn"));
    const counter = document.getElementById("counter");
    if (Aufgabe7.zähler == 0) {
        counter.innerHTML = "0";
    }
    else {
        counter.innerHTML = "" + localStorage.getItem("counterbeginn");
    }
    let divinhalt = document.createElement("div");
    divinhalt.setAttribute("class", "inhalt");
    let kleidungtitel = document.createElement("h2");
    kleidungtitel.setAttribute("id", "Kleidunglink");
    kleidungtitel.innerHTML = "Kleidung";
    divinhalt.appendChild(kleidungtitel);
    let kleidungdiv = document.createElement("div");
    kleidungdiv.setAttribute("id", "Kleidung");
    divinhalt.appendChild(kleidungdiv);
    let preis = parseInt(localStorage.getItem("Gesamtsumme") + "");
    let equipmentTitel = document.createElement("h2");
    equipmentTitel.setAttribute("id", "Equipmentlink");
    equipmentTitel.innerHTML = "Equipment";
    divinhalt.appendChild(equipmentTitel);
    let equipmentdiv = document.createElement("div");
    equipmentdiv.setAttribute("id", "Equipment");
    divinhalt.appendChild(equipmentdiv);
    function artikelErstellen() {
        for (let i = 0; i < Aufgabe7.artikel.length; i++) {
            if (Aufgabe7.artikel[i].kategorie == "Kleidung") {
                let divElement = document.createElement("div");
                divElement.setAttribute("class", "artikel");
                kleidungdiv.appendChild(divElement);
                let bildElement = document.createElement("img");
                bildElement.setAttribute("src", Aufgabe7.artikel[i].bild);
                divElement.appendChild(bildElement);
                let titelElement = document.createElement("h3");
                divElement.appendChild(titelElement);
                titelElement.innerHTML = Aufgabe7.artikel[i].name;
                let beschreibungelement = document.createElement("p");
                divElement.appendChild(beschreibungelement);
                beschreibungelement.innerHTML = Aufgabe7.artikel[i].beschreibung;
                let preiselement = document.createElement("i");
                divElement.appendChild(preiselement);
                preiselement.innerHTML = Aufgabe7.artikel[i].preis + "€";
                let brelement = document.createElement("br");
                divElement.appendChild(brelement);
                let brelement2 = document.createElement("br");
                divElement.appendChild(brelement2);
                let buttonElement = document.createElement("button");
                buttonElement.innerHTML = "Kaufen";
                buttonElement.addEventListener("click", allgemeinbutton);
                divElement.appendChild(buttonElement);
                buttonElement.addEventListener("click", allgemeinpreis);
            }
            else if (Aufgabe7.artikel[i].kategorie == "Equipment") {
                let divElement = document.createElement("div");
                divElement.setAttribute("class", "artikel");
                equipmentdiv.appendChild(divElement);
                let bildElement = document.createElement("img");
                bildElement.setAttribute("src", Aufgabe7.artikel[i].bild);
                divElement.appendChild(bildElement);
                let titelElement = document.createElement("h3");
                divElement.appendChild(titelElement);
                titelElement.innerHTML = Aufgabe7.artikel[i].name;
                let beschreibungelement = document.createElement("p");
                divElement.appendChild(beschreibungelement);
                beschreibungelement.innerHTML = Aufgabe7.artikel[i].beschreibung;
                let preiselement = document.createElement("i");
                divElement.appendChild(preiselement);
                preiselement.innerHTML = Aufgabe7.artikel[i].preis + "€";
                let brelement = document.createElement("br");
                divElement.appendChild(brelement);
                let brelement2 = document.createElement("br");
                divElement.appendChild(brelement2);
                let buttonElement = document.createElement("button");
                buttonElement.innerHTML = "Kaufen";
                buttonElement.addEventListener("click", allgemeinbutton);
                buttonElement.addEventListener("click", allgemeinpreis);
                divElement.appendChild(buttonElement);
            }
            function allgemeinpreis(_event) {
                if (parseInt(localStorage.getItem("Gesamtsumme") + "") == 0) {
                    preis = 0 + Aufgabe7.artikel[i].preis;
                    console.log("Gesamtsumme " + preis + " €");
                    localStorage.setItem("Gesamtsumme", preis + "€");
                }
                else {
                    localStorage.setItem("Gesamtsumme", preis + Aufgabe7.artikel[i].preis + "€");
                }
                localStorage.setItem("bildString" + j, Aufgabe7.artikel[i].bild);
                localStorage.setItem("nameString" + j, Aufgabe7.artikel[i].name);
                localStorage.setItem("beschreibungString" + j, Aufgabe7.artikel[i].beschreibung);
                localStorage.setItem("preisString" + j, Aufgabe7.artikel[i].preis + "€");
                j++;
                localStorage.setItem("counterbeginn", j + "");
            }
        }
    }
    Aufgabe7.artikelErstellen = artikelErstellen;
    let counterbeginn = 0;
    if (parseInt(localStorage.getItem("counterbeginn")) > 0) {
        counterbeginn = parseInt(localStorage.getItem("counterbeginn"));
    }
    else {
        counterbeginn = 0;
    }
    function allgemeinbutton(_event) {
        counterbeginn++;
        localStorage.setItem("counterbeginn", counterbeginn + "");
        counter.innerHTML = "" + localStorage.getItem("counterbeginn");
    }
    Aufgabe7.allgemeinbutton = allgemeinbutton;
    document.getElementById("main")?.appendChild(divinhalt);
    const kleidungTitel = document.getElementById("Kleidunglink");
    document.getElementById("kleidungnavi")?.addEventListener("click", kleidungklick);
    //Kleidung anzeigen
    function kleidungklick(_event) {
        document.getElementById("Equipment").setAttribute("style", "display: none");
        document.getElementById("Equipmentlink").setAttribute("style", "display: none");
        document.getElementById("Kleidung").setAttribute("style", "visibility: visible");
        document.getElementById("Kleidunglink").setAttribute("style", "visibility: visible");
        kleidungTitel.innerHTML = "Kleidung";
    }
    //Equipment anzeigen
    document.getElementById("equipmentnavi")?.addEventListener("click", equipmentnavi);
    function equipmentnavi(_event) {
        document.getElementById("Kleidung").setAttribute("style", "display: none");
        document.getElementById("Equipmentlink").setAttribute("style", "display: none");
        kleidungTitel.innerHTML = "Equipment";
        document.getElementById("Equipment").setAttribute("style", "visibility: visible");
    }
    //Auf den Home Button klicken, um alle Artikel anzuzeigen :)
    document.getElementById("home")?.addEventListener("click", homeklick);
    function homeklick(_event) {
        document.getElementById("Kleidung").setAttribute("style", "visibility: visible");
        document.getElementById("Kleidunglink").setAttribute("style", "visibility: visible");
        document.getElementById("Equipment").setAttribute("style", "visibility: visible");
        document.getElementById("Equipmentlink").setAttribute("style", "visibility: visible");
        kleidungTitel.innerHTML = "Kleidung";
    }
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=script.js.map