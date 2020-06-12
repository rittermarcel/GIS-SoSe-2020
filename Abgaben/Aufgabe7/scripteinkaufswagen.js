"use strict";
var Aufgabe7;
(function (Aufgabe7) {
    let divinhalt = document.createElement("div");
    divinhalt.setAttribute("class", "inhalt");
    let kleidungdiv = document.createElement("div");
    kleidungdiv.setAttribute("id", "Kleidung");
    divinhalt.appendChild(kleidungdiv);
    const gesamtSumme = document.getElementById("Gesamtsumme");
    gesamtSumme.innerHTML = "Gesamtsumme: " + localStorage.getItem("Gesamtsumme") + "";
    document.getElementById("allesentfernen")?.addEventListener("click", allesentfernen);
    function allesentfernen(_event) {
        localStorage.clear();
        (_event.currentTarget.parentElement).remove();
    }
    for (let i = 0; i < localStorage.counterbeginn; i++) {
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
            (_event.currentTarget.parentElement).remove();
        }
    }
    document.getElementById("warenkorbmain")?.appendChild(divinhalt);
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=scripteinkaufswagen.js.map