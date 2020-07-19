"use strict";
var endprojekt;
(function (endprojekt) {
    function Maintextaufrufen() {
        let j = 1;
        let text = "";
        let preis = 0;
        let klickcounterwaffel = 0;
        let klickcounterstreußel = 0;
        let zählerbestellungen = 0;
        let counterhtml = document.getElementById("counter");
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
        let eisbild = document.getElementById("eisbild");
        divinhalt.appendChild(eisbild);
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
        info.innerHTML = "Schicke dein Eis in den Warenkorb oder lösche deine Bestellung<br><br><br>";
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
            //localStorage.clear();
            j = 0;
            text = "";
            preis = 0;
            klickcounterwaffel = 0;
            klickcounterstreußel = 0;
            for (let i = 0; i < 7; i++) {
                document.getElementById("schokokugel")?.remove();
                document.getElementById("streußel")?.remove();
                document.getElementById("test")?.remove();
            }
            preishtml.innerHTML = "<b>Preis: </b>" + preis + "€";
        }
        function neueseisklick(_event) {
            for (let i = 0; i < 7; i++) {
                document.getElementById("schokokugel")?.remove();
                document.getElementById("streußel")?.remove();
                document.getElementById("test")?.remove();
            }
            zählerbestellungen++;
            localStorage.setItem("Eissortebestellung" + zählerbestellungen, waffellbestellung.textContent + " <br>" + eisbestellung.textContent + " <br>" + streußelbestellung.textContent + " <br>" + "Preis: " + preis + "€ ");
            localStorage.setItem("zählerbestellungen", zählerbestellungen + "");
            counterhtml.innerHTML = zählerbestellungen + "";
            j = 0;
            text = "";
            klickcounterwaffel = 0;
            klickcounterstreußel = 0;
            streußelbestellung.innerHTML = "<b>Streußelsorte:</b>";
            eisbestellung.innerHTML = "<b>Eissorte:</b>";
            waffellbestellung.innerHTML = "<b>Waffelsorte:</b>";
            localStorage.setItem("gesamtpreis" + zählerbestellungen, preis + "");
            preis = 0;
            preishtml.innerHTML = "<b>Preis: </b>" + preis + "€";
            console.log(localStorage);
        }
        for (let i = 0; i < endprojekt.eis.length; i++) {
            if (endprojekt.eis[i].kategorie == "waffel") {
                let klasse = document.createElement("div");
                klasse.setAttribute("class", "waffelartikel");
                waffeltitel.appendChild(klasse);
                let element = document.createElement("INPUT");
                element.setAttribute("name", "waffel");
                element.setAttribute("type", "button");
                //element.setAttribute("value", eis[i].name);
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
                let element = document.createElement("INPUT");
                element.setAttribute("name", "streußel");
                element.setAttribute("type", "button");
                // element.setAttribute("value", eis[i].name);
                element.setAttribute("id", endprojekt.eis[i].name);
                element.addEventListener("click", streußelklick);
                let label = document.createElement("label");
                label.setAttribute("for", endprojekt.eis[i].name);
                label.innerHTML = endprojekt.eis[i].name + "<br>" + "<br>";
                klasse.appendChild(element);
                klasse.appendChild(label);
            }
            function waffelklick(_event) {
                if (klickcounterwaffel < 1) {
                    let klasse = document.createElement("div");
                    klasse.setAttribute("id", "test");
                    eisbild.appendChild(klasse);
                    let bild = document.createElement("img");
                    bild.setAttribute("src", endprojekt.eis[i].bild);
                    bild.setAttribute("id", endprojekt.eis[i].kategorie2);
                    localStorage.setItem("waffelsorte", endprojekt.eis[i].name);
                    klasse.appendChild(bild);
                    preis = preis + endprojekt.eis[i].preis;
                    waffellbestellung.innerHTML = "<b>Waffelsorte:</b> 1X" + endprojekt.eis[i].name;
                    klickcounterwaffel++;
                }
                else if (klickcounterwaffel > 1) {
                    //document.getElementById("test")?.remove(); 
                    preis = preis - endprojekt.eis[i].preis;
                }
                preishtml.innerHTML = "<b>Preis: </b>" + preis + "€";
            }
            function streußelklick(_event) {
                let klasse = document.createElement("div");
                klasse.setAttribute("id", "test");
                eisbild.appendChild(klasse);
                if (klickcounterstreußel < 1) {
                    let bild = document.createElement("img");
                    bild.setAttribute("src", endprojekt.eis[i].bild);
                    bild.setAttribute("id", "streußel");
                    bild.setAttribute("div", "");
                    klasse.appendChild(bild);
                    localStorage.setItem("streußelsorte", endprojekt.eis[i].name);
                    streußelbestellung.innerHTML = "<b>Streußelsorte:</b> 1X" + endprojekt.eis[i].name;
                    preis = preis + endprojekt.eis[i].preis;
                    klickcounterstreußel++;
                }
                else if (klickcounterstreußel > 1) {
                    preis = preis - endprojekt.eis[i].preis;
                }
                preishtml.innerHTML = "<b>Preis: </b>" + preis + "€";
            }
            function eisklick(_event) {
                let bild = document.createElement("img");
                bild.setAttribute("src", endprojekt.eis[i].bild);
                bild.setAttribute("id", "schokokugel");
                bild.setAttribute("div", "");
                localStorage.setItem("eissorte" + j, endprojekt.eis[i].name);
                if (j > 6) {
                    console.log("Maximale Anzahl an Kugeln erreicht");
                    let maximaleanzahl = document.getElementById("maximaleanzahl");
                    maximaleanzahl.innerHTML = "Maximale Anzahl <br> an Kugeln erreicht!";
                    divElement.appendChild(maximaleanzahl);
                }
                else {
                    eisbild.appendChild(bild);
                    text = text + "1X" + endprojekt.eis[i].name + ", ";
                    eisbestellung.innerHTML = "<b>Eissorte:</b> " + text;
                    preis = preis + endprojekt.eis[i].preis;
                    preishtml.innerHTML = "<b>Preis: </b>" + preis + "€";
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