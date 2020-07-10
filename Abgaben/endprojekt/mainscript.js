"use strict";
var endprojekt;
(function (endprojekt) {
    function Maintextaufrufen() {
        let j = 1;
        let text = "";
        let preis = 0;
        let zählerbestellungen = 0;
        let preishtml = document.getElementById("preis");
        let streußelbestellung = document.getElementById("streußelsortebestellt");
        let eisbestellung = document.getElementById("eissortebestellt");
        let waffellbestellung = document.getElementById("waffelsortebestellt");
        localStorage.setItem("zählerbestellungen", 0 + "");
        let beschreibunghtml = document.getElementById("beschreibung");
        beschreibunghtml.innerHTML = endprojekt.maintext[0].beschreibung1;
        let titelhtml = document.getElementById("titel");
        titelhtml.innerHTML = endprojekt.maintext[0].titel;
        let hausgemachthtml = document.getElementById("hausgemachtbeschreibung");
        hausgemachthtml.innerHTML = endprojekt.maintext[0].hausgemachtbeschreibung;
        let taeglichfrischhtml = document.getElementById("taeglichfrischbeschreibung");
        taeglichfrischhtml.innerHTML = endprojekt.maintext[0].taeglichfrischbeschreibung;
        let umweltschonendhtml = document.getElementById("umweltschonendbeschreibung");
        umweltschonendhtml.innerHTML = endprojekt.maintext[0].umweltschonendbeschreibung;
        let divinhalt = document.createElement("div");
        divinhalt.setAttribute("class", "inhalt");
        let bestellungbild = document.createElement("img");
        bestellungbild.setAttribute("src", "Bilder/notizblock.png");
        bestellungbild.setAttribute("id", "notizblock");
        divinhalt.appendChild(bestellungbild);
        let divElement = document.createElement("div");
        divElement.setAttribute("class", "eisgenerieren");
        divinhalt.appendChild(divElement);
        let waffeltitel = document.createElement("p");
        waffeltitel.setAttribute("id", "waffeltitel");
        waffeltitel.innerHTML = "Wähle deine Waffelsorte aus:";
        divElement.appendChild(waffeltitel);
        let eistitel = document.createElement("p");
        eistitel.setAttribute("id", "eistitel");
        eistitel.innerHTML = "Wähle deine Eissorte aus:";
        divElement.appendChild(eistitel);
        let streußeltitel = document.createElement("p");
        streußeltitel.setAttribute("id", "streußeltitel");
        streußeltitel.innerHTML = "Wähle deine Streußelsorte aus:";
        divElement.appendChild(streußeltitel);
        let info = document.createElement("p");
        info.setAttribute("id", "info");
        info.innerHTML = "Erstelle noch ein Eis aus oder gib deine Adressdaten ein und klicke auf Bestellen<br><br><br>";
        divElement.appendChild(info);
        let neueseis = document.createElement("Button");
        neueseis.setAttribute("name", "neueseis");
        neueseis.setAttribute("value", "neueseis");
        neueseis.setAttribute("id", "neueseis");
        let label = document.createElement("label");
        label.setAttribute("for", "neueseis");
        label.innerHTML = "In den Warenkorb" + "<br><br>";
        neueseis.addEventListener("click", neueseisklick);
        info.appendChild(neueseis);
        info.appendChild(label);
        let löschen = document.createElement("Button");
        let labellöschen = document.createElement("label");
        labellöschen.innerHTML = "Bestellung löschen<br>";
        löschen.addEventListener("click", löschenklick);
        info.appendChild(löschen);
        info.appendChild(labellöschen);
        function löschenklick(_event) {
            streußelbestellung.innerHTML = "<b>Streußelsorte:</b>";
            eisbestellung.innerHTML = "<b>Eissorte:</b>";
            waffellbestellung.innerHTML = "<b>Waffelsorte:</b>";
            localStorage.clear();
            preis = 0;
            preishtml.innerHTML = "<b>Preis: </b>" + preis + " €";
        }
        function neueseisklick(_event) {
            localStorage.setItem("Eissortebestellung" + zählerbestellungen, waffellbestellung.textContent + "" + eisbestellung.textContent + " " + streußelbestellung.textContent + " ");
            zählerbestellungen++;
            streußelbestellung.innerHTML = "<b>Streußelsorte:</b>";
            eisbestellung.innerHTML = "<b>Eissorte:</b>";
            waffellbestellung.innerHTML = "<b>Waffelsorte:</b>";
            preishtml.innerHTML = "<b>Preis: </b>" + 0 + " €";
            console.log(localStorage);
        }
        for (let i = 0; i < endprojekt.eis.length; i++) {
            if (endprojekt.eis[i].kategorie == "waffel") {
                let klasse = document.createElement("div");
                klasse.setAttribute("class", "waffelartikel");
                waffeltitel.appendChild(klasse);
                let element = document.createElement("Button");
                element.setAttribute("name", "waffel");
                element.setAttribute("value", endprojekt.eis[i].name);
                element.setAttribute("id", endprojekt.eis[i].name);
                element.addEventListener("click", waffelklick);
                let label = document.createElement("label");
                label.setAttribute("for", endprojekt.eis[i].name);
                label.innerHTML = endprojekt.eis[i].name + "<br>" + "<br>";
                klasse.appendChild(element);
                klasse.appendChild(label);
            }
            else if (endprojekt.eis[i].kategorie == "eis") {
                let klasse = document.createElement("div");
                klasse.setAttribute("class", "eisartikel");
                eistitel.appendChild(klasse);
                let element = document.createElement("Button");
                element.setAttribute("value", endprojekt.eis[i].name);
                element.addEventListener("click", eisklick);
                let label = document.createElement("label");
                label.setAttribute("for", endprojekt.eis[i].name);
                label.innerHTML = endprojekt.eis[i].name + "<br>" + "<br>";
                klasse.appendChild(element);
                klasse.appendChild(label);
            }
            else if (endprojekt.eis[i].kategorie == "streußel") {
                let klasse = document.createElement("div");
                klasse.setAttribute("class", "streußelartikel");
                streußeltitel.appendChild(klasse);
                let element = document.createElement("Button");
                element.setAttribute("name", "streußel");
                element.setAttribute("value", endprojekt.eis[i].name);
                element.setAttribute("id", endprojekt.eis[i].name);
                element.addEventListener("click", streußelklick);
                let label = document.createElement("label");
                label.setAttribute("for", endprojekt.eis[i].name);
                label.innerHTML = endprojekt.eis[i].name + "<br>" + "<br>";
                klasse.appendChild(element);
                klasse.appendChild(label);
            }
            function waffelklick(_event) {
                localStorage.setItem("waffelsorte", endprojekt.eis[i].name);
                waffellbestellung.innerHTML = "<b>Waffelsorte:</b> 1X" + endprojekt.eis[i].name;
                preis = preis + endprojekt.eis[i].preis;
                preishtml.innerHTML = "<b>Preis: </b>" + preis + " €";
            }
            function streußelklick(_event) {
                localStorage.setItem("streußelsorte", endprojekt.eis[i].name);
                streußelbestellung.innerHTML = "<b>Streußelsorte:</b> 1X" + endprojekt.eis[i].name;
                preis = preis + endprojekt.eis[i].preis;
                preishtml.innerHTML = "<b>Preis: </b>" + preis + " €";
            }
            function eisklick(_event) {
                localStorage.setItem("eissorte" + j, endprojekt.eis[i].name);
                if (j > 6) {
                    console.log("Maximale Anzahl an Kugeln erreicht");
                }
                else {
                    text = text + "1X" + localStorage.getItem("eissorte" + j) + ", ";
                    eisbestellung.innerHTML = "<b>Eissorte:</b> " + text;
                    preis = preis + endprojekt.eis[i].preis;
                    preishtml.innerHTML = "<b>Preis: </b>" + preis + " €";
                    console.log(preis + " €");
                    j++;
                    console.log(text);
                }
            }
        }
        document.getElementById("main")?.appendChild(divinhalt);
    }
    endprojekt.Maintextaufrufen = Maintextaufrufen;
})(endprojekt || (endprojekt = {}));
//# sourceMappingURL=mainscript.js.map