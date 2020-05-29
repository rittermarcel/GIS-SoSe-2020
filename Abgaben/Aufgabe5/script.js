"use strict";
var Aufgabe5;
(function (Aufgabe5) {
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
    kleidungdiv.setAttribute("class", "Kleidung");
    divinhalt.appendChild(kleidungdiv);
    //Schleife die den array mit den Kleidern komplett durchgeht. 
    for (let i = 0; i < Aufgabe5.artikelkleidung.length; i++) {
        //Jeder neue Artikel wird in Klasse artikel gespeichern
        let divElement = document.createElement("div");
        divElement.setAttribute("class", "artikel");
        kleidungdiv.appendChild(divElement);
        //Bild hinzufügen
        let bildElement = document.createElement("img");
        bildElement.setAttribute("src", Aufgabe5.artikelkleidung[i].bild);
        divElement.appendChild(bildElement);
        //Titel hinzufügen
        let titelElement = document.createElement("h3");
        divElement.appendChild(titelElement);
        titelElement.innerHTML = Aufgabe5.artikelkleidung[i].name;
        //Beschreibung hinzufügen
        let beschreibungelement = document.createElement("p");
        divElement.appendChild(beschreibungelement);
        beschreibungelement.innerHTML = Aufgabe5.artikelkleidung[i].beschreibung;
        //Preis hinzufügen
        let preiselement = document.createElement("i");
        divElement.appendChild(preiselement);
        preiselement.innerHTML = Aufgabe5.artikelkleidung[i].preis;
        //Br tags
        let brelement = document.createElement("br");
        divElement.appendChild(brelement);
        let brelement2 = document.createElement("br");
        divElement.appendChild(brelement2);
        //Kaufen Button
        let buttonElement = document.createElement("button");
        buttonElement.innerHTML = "Kaufen";
        divElement.appendChild(buttonElement);
    }
    //H2 Equipment Titel mit ID
    let equipmentTitel = document.createElement("h2");
    equipmentTitel.setAttribute("id", "Equipmentlink");
    equipmentTitel.innerHTML = "Equipment";
    divinhalt.appendChild(equipmentTitel);
    //neue Klasse Equipment
    let equipmentdiv = document.createElement("div");
    equipmentdiv.setAttribute("class", "Equipment");
    divinhalt.appendChild(equipmentdiv);
    //Das selbe Spiel wie vorhin
    for (let i = 0; i < Aufgabe5.artikelequipment.length; i++) {
        let divElement = document.createElement("div");
        divElement.setAttribute("class", "artikel");
        equipmentdiv.appendChild(divElement);
        let bildElement = document.createElement("img");
        bildElement.setAttribute("src", Aufgabe5.artikelequipment[i].bild);
        divElement.appendChild(bildElement);
        let titelElement = document.createElement("h3");
        divElement.appendChild(titelElement);
        titelElement.innerHTML = Aufgabe5.artikelequipment[i].name;
        let beschreibungelement = document.createElement("p");
        divElement.appendChild(beschreibungelement);
        beschreibungelement.innerHTML = Aufgabe5.artikelequipment[i].beschreibung;
        let preiselement = document.createElement("i");
        divElement.appendChild(preiselement);
        preiselement.innerHTML = Aufgabe5.artikelequipment[i].preis;
        let brelement = document.createElement("br");
        divElement.appendChild(brelement);
        let brelement2 = document.createElement("br");
        divElement.appendChild(brelement2);
        let buttonElement = document.createElement("button");
        buttonElement.innerHTML = "Kaufen";
        divElement.appendChild(buttonElement);
    }
    //Den ganzen Inhalt oben in den html main Tag hinzufügen
    document.getElementById("main")?.appendChild(divinhalt);
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=script.js.map