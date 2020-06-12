"use strict";
var Aufgabe7;
(function (Aufgabe7) {
    //JSON Dateien erstellen
    localStorage.clear();
    let j = 0;
    let divinhalt = document.createElement("div");
    divinhalt.setAttribute("class", "inhalt");
    let kleidungtitel = document.createElement("h2");
    kleidungtitel.setAttribute("id", "Kleidunglink");
    kleidungtitel.innerHTML = "Kleidung";
    divinhalt.appendChild(kleidungtitel);
    let kleidungdiv = document.createElement("div");
    kleidungdiv.setAttribute("id", "Kleidung");
    divinhalt.appendChild(kleidungdiv);
    let preis = 0.00;
    //Ja ich weis immer noch 2 for Schleifen. Aber ich bekomm es einfach nicht hin, dass der entsprechende Titel jeweils über den Bildern ist.
    for (let i = 0; i < Aufgabe7.artikelkleidung.length; i++) {
        let divElement = document.createElement("div");
        divElement.setAttribute("class", "artikel");
        kleidungdiv.appendChild(divElement);
        let bildElement = document.createElement("img");
        bildElement.setAttribute("src", JSON.parse(Aufgabe7.myJSONkleidung)[i].bild);
        divElement.appendChild(bildElement);
        let titelElement = document.createElement("h3");
        divElement.appendChild(titelElement);
        titelElement.innerHTML = JSON.parse(Aufgabe7.myJSONkleidung)[i].name;
        let beschreibungelement = document.createElement("p");
        divElement.appendChild(beschreibungelement);
        beschreibungelement.innerHTML = JSON.parse(Aufgabe7.myJSONkleidung)[i].beschreibung;
        let preiselement = document.createElement("i");
        divElement.appendChild(preiselement);
        preiselement.innerHTML = JSON.parse(Aufgabe7.myJSONkleidung)[i].preis + "€";
        let brelement = document.createElement("br");
        divElement.appendChild(brelement);
        let brelement2 = document.createElement("br");
        divElement.appendChild(brelement2);
        let buttonElement = document.createElement("button");
        buttonElement.innerHTML = "Kaufen";
        buttonElement.addEventListener("click", allgemeinbutton);
        divElement.appendChild(buttonElement);
        buttonElement.addEventListener("click", kleidungpreis);
        function kleidungpreis(_event) {
            preis = preis + Aufgabe7.artikelkleidung[i].preis;
            console.log("Gesamtsumme: " + preis + " €");
            localStorage.setItem("Gesamtsumme", preis + "€");
            localStorage.setItem("bildString" + j, JSON.parse(Aufgabe7.myJSONkleidung)[i].bild);
            localStorage.setItem("nameString" + j, JSON.parse(Aufgabe7.myJSONkleidung)[i].name);
            localStorage.setItem("beschreibungString" + j, JSON.parse(Aufgabe7.myJSONkleidung)[i].beschreibung);
            localStorage.setItem("preisString" + j, JSON.parse(Aufgabe7.myJSONkleidung)[i].preis + "€");
            j++;
        }
    }
    let equipmentTitel = document.createElement("h2");
    equipmentTitel.setAttribute("id", "Equipmentlink");
    equipmentTitel.innerHTML = "Equipment";
    divinhalt.appendChild(equipmentTitel);
    let equipmentdiv = document.createElement("div");
    equipmentdiv.setAttribute("id", "Equipment");
    divinhalt.appendChild(equipmentdiv);
    for (let i = 0; i < Aufgabe7.artikelequipment.length; i++) {
        let divElement = document.createElement("div");
        divElement.setAttribute("class", "artikel");
        equipmentdiv.appendChild(divElement);
        let bildElement = document.createElement("img");
        bildElement.setAttribute("src", JSON.parse(Aufgabe7.myJSONequipment)[i].bild);
        divElement.appendChild(bildElement);
        let titelElement = document.createElement("h3");
        divElement.appendChild(titelElement);
        titelElement.innerHTML = JSON.parse(Aufgabe7.myJSONequipment)[i].name;
        let beschreibungelement = document.createElement("p");
        divElement.appendChild(beschreibungelement);
        beschreibungelement.innerHTML = JSON.parse(Aufgabe7.myJSONequipment)[i].beschreibung;
        let preiselement = document.createElement("i");
        divElement.appendChild(preiselement);
        preiselement.innerHTML = JSON.parse(Aufgabe7.myJSONequipment)[i].preis + "€";
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
            preis = preis + Aufgabe7.artikelequipment[i].preis;
            console.log("Gesamtsumme " + preis + " €");
            localStorage.setItem("Gesamtsumme", preis + "€");
            localStorage.setItem("bildString" + j, JSON.parse(Aufgabe7.myJSONequipment)[i].bild);
            localStorage.setItem("nameString" + j, JSON.parse(Aufgabe7.myJSONequipment)[i].name);
            localStorage.setItem("beschreibungString" + j, JSON.parse(Aufgabe7.myJSONequipment)[i].beschreibung);
            localStorage.setItem("preisString" + j, JSON.parse(Aufgabe7.myJSONequipment)[i].preis + "€");
            j++;
        }
    }
    Aufgabe7.counterbeginn = 0;
    localStorage.counterbeginn = 0;
    const counter = document.getElementById("counter");
    function allgemeinbutton(_event) {
        Aufgabe7.counterbeginn++;
        localStorage.counterbeginn = Number(localStorage.counterbeginn) + 1;
        counter.innerHTML = "" + Aufgabe7.counterbeginn;
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