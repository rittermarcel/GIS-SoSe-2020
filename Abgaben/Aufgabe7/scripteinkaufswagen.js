"use strict";
var Aufgabe7;
(function (Aufgabe7) {
    let divinhalt = document.createElement("div");
    divinhalt.setAttribute("class", "inhalt");
    const gesamtSumme = document.getElementById("Gesamtsumme");
    gesamtSumme.innerHTML = "Gesamtsumme: " + localStorage.getItem("Gesamtsumme") + "";
    document.getElementById("allesentfernen")?.addEventListener("click", allesentfernen);
    Aufgabe7.zähler = parseInt(localStorage.getItem("counterbeginn"));
    let kleidungdiv = document.createElement("div");
    kleidungdiv.setAttribute("id", "Kleidung");
    divinhalt.appendChild(kleidungdiv);
    for (let i = 0; i < Aufgabe7.zähler; i++) {
        let divElement = document.createElement("div");
        divElement.setAttribute("class", "artikel");
        kleidungdiv.appendChild(divElement);
        let bildElement = document.createElement("img");
        bildElement.setAttribute("src", localStorage.getItem("bildString" + i));
        divElement.appendChild(bildElement);
        let titelElement = document.createElement("h3");
        divElement.appendChild(titelElement);
        titelElement.innerHTML = localStorage.getItem("nameString" + i);
        let beschreibungelement = document.createElement("p");
        divElement.appendChild(beschreibungelement);
        beschreibungelement.innerHTML = localStorage.getItem("beschreibungString" + i);
        let preiselement = document.createElement("i");
        divElement.appendChild(preiselement);
        preiselement.innerHTML = localStorage.getItem("preisString" + i);
        let brelement = document.createElement("br");
        divElement.appendChild(brelement);
        let brelement2 = document.createElement("br");
        divElement.appendChild(brelement2);
        let buttonElement = document.createElement("button");
        buttonElement.innerHTML = "Entfernen";
        divElement.appendChild(buttonElement);
        buttonElement.addEventListener("click", entfernen);
        function entfernen(_event) {
            let gesamtsumme = parseInt(localStorage.getItem("Gesamtsumme") + "");
            let gelöschteSumme = parseInt(localStorage.getItem("preisString" + i));
            let neu = gesamtsumme - gelöschteSumme;
            localStorage.setItem("Gesamtsumme", neu + "€");
            gesamtSumme.innerHTML = "Gesamtsumme: " + neu + " €";
            localStorage.setItem("counterbeginn", Aufgabe7.zähler - 1 + "");
            (_event.currentTarget.parentElement).remove();
        }
    }
    function allesentfernen(_event) {
        localStorage.clear();
        divinhalt.removeChild(kleidungdiv);
        localStorage.setItem("Gesamtsumme", 0 + "€");
        gesamtSumme.innerHTML = "Gesamtsumme: " + localStorage.getItem("Gesamtsumme") + "";
        localStorage.setItem("counterbeginn", 0 + "");
    }
    document.getElementById("warenkorbmain")?.appendChild(divinhalt);
    console.log(localStorage);
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=scripteinkaufswagen.js.map