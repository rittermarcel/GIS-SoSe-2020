"use strict";
var Aufgabe6;
(function (Aufgabe6) {
    //Aufgabe 6
    //Klasse Inhalt
    let divinhalt = document.createElement("div");
    divinhalt.setAttribute("class", "inhalt");
    // H2 Titel Kleidung mit ID
    let kleidungtitel = document.createElement("h2");
    kleidungtitel.setAttribute("id", "Kleidunglink");
    kleidungtitel.innerHTML = "Kleidung";
    divinhalt.appendChild(kleidungtitel);
    //Klasse Kleidung
    let kleidungdiv = document.createElement("div");
    kleidungdiv.setAttribute("id", "Kleidung");
    divinhalt.appendChild(kleidungdiv);
    let preis = 0.00;
    //Schleife die den array mit den Kleidern komplett durchgeht. 
    for (let i = 0; i < Aufgabe6.artikelkleidung.length; i++) {
        //Jeder neue Artikel wird in Klasse artikel gespeichern
        let divElement = document.createElement("div");
        divElement.setAttribute("class", "artikel");
        kleidungdiv.appendChild(divElement);
        //Bild hinzufügen
        let bildElement = document.createElement("img");
        bildElement.setAttribute("src", Aufgabe6.artikelkleidung[i].bild);
        divElement.appendChild(bildElement);
        //Titel hinzufügen
        let titelElement = document.createElement("h3");
        divElement.appendChild(titelElement);
        titelElement.innerHTML = Aufgabe6.artikelkleidung[i].name;
        //Beschreibung hinzufügen
        let beschreibungelement = document.createElement("p");
        divElement.appendChild(beschreibungelement);
        beschreibungelement.innerHTML = Aufgabe6.artikelkleidung[i].beschreibung;
        //Preis hinzufügen
        let preiselement = document.createElement("i");
        divElement.appendChild(preiselement);
        preiselement.innerHTML = Aufgabe6.artikelkleidung[i].preis + "€";
        //Br tags
        let brelement = document.createElement("br");
        divElement.appendChild(brelement);
        let brelement2 = document.createElement("br");
        divElement.appendChild(brelement2);
        //Kaufen Button
        let buttonElement = document.createElement("button");
        buttonElement.innerHTML = "Kaufen";
        buttonElement.addEventListener("click", allgemeinbutton);
        divElement.appendChild(buttonElement);
        buttonElement.addEventListener("click", kleidungpreis);
        function kleidungpreis(_event) {
            preis = preis + Aufgabe6.artikelkleidung[i].preis;
            console.log("Gesamtsumme: " + preis + " €");
        }
    }
    //H2 Equipment Titel mit ID
    let equipmentTitel = document.createElement("h2");
    equipmentTitel.setAttribute("id", "Equipmentlink");
    equipmentTitel.innerHTML = "Equipment";
    divinhalt.appendChild(equipmentTitel);
    //neue Klasse Equipment
    let equipmentdiv = document.createElement("div");
    equipmentdiv.setAttribute("id", "Equipment");
    divinhalt.appendChild(equipmentdiv);
    //Das selbe Spiel wie vorhin
    for (let i = 0; i < Aufgabe6.artikelequipment.length; i++) {
        let divElement = document.createElement("div");
        divElement.setAttribute("class", "artikel");
        equipmentdiv.appendChild(divElement);
        let bildElement = document.createElement("img");
        bildElement.setAttribute("src", Aufgabe6.artikelequipment[i].bild);
        divElement.appendChild(bildElement);
        let titelElement = document.createElement("h3");
        divElement.appendChild(titelElement);
        titelElement.innerHTML = Aufgabe6.artikelequipment[i].name;
        let beschreibungelement = document.createElement("p");
        divElement.appendChild(beschreibungelement);
        beschreibungelement.innerHTML = Aufgabe6.artikelequipment[i].beschreibung;
        let preiselement = document.createElement("i");
        divElement.appendChild(preiselement);
        preiselement.innerHTML = Aufgabe6.artikelequipment[i].preis + "€";
        let brelement = document.createElement("br");
        divElement.appendChild(brelement);
        let brelement2 = document.createElement("br");
        divElement.appendChild(brelement2);
        let buttonElement = document.createElement("button");
        buttonElement.innerHTML = "Kaufen";
        buttonElement.addEventListener("click", allgemeinbutton);
        buttonElement.addEventListener("click", equipmentpreis);
        divElement.appendChild(buttonElement);
        function equipmentpreis(_event) {
            preis = preis + Aufgabe6.artikelequipment[i].preis;
            console.log("Gesamtsumme " + preis + " €");
        }
    }
    let counterbeginn = 0;
    const counter = document.getElementById("counter");
    function allgemeinbutton(_event) {
        counterbeginn++;
        counter.innerHTML = "" + counterbeginn;
    }
    //Den ganzen Inhalt oben in den html main Tag hinzufügen
    document.getElementById("main")?.appendChild(divinhalt);
})(Aufgabe6 || (Aufgabe6 = {}));
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
//# sourceMappingURL=script.js.map