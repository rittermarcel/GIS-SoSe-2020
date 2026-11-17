"use strict";
var endprojekt;
(function (endprojekt) {
    function Maintextaufrufen() {
        let j = 1;
        let text = "";
        let preis = 0;
        let klickCounterWaffel = 0;
        let klickCounterEis = 0;
        let klickCounterEisKugel = 0;
        let klickCounterStreußel = 0;
        let zählerBestellungen = 0;
        let counterHtml = document.getElementById("counter");
        let preisHtml = document.getElementById("preis");
        let streußelBestellung = document.getElementById("streußelSorteBestellt");
        let eisBestellung = document.getElementById("eisSorteBestellt");
        let waffelBestellung = document.getElementById("waffelSorteBestellt");
        let eisGenerator = document.getElementById("eis-generator");
        let startLink = document.getElementById("eis-erstellen-link");
        startLink.addEventListener("click", startKlick);
        localStorage.setItem("zählerbestellungen", 0 + "");
        klickCounterEis = 0;
        function startKlick(_event) {
            window.location.href = "#eis-erstellen-titel";
        }
        let beschreibungHtml = document.getElementById("beschreibung");
        beschreibungHtml.innerHTML = endprojekt.maintext[0].beschreibung1;
        let titelHtml = document.getElementById("titel");
        titelHtml.innerHTML = endprojekt.maintext[0].titel;
        let hausgemachtHtml = document.getElementById("hausgemachtBeschreibung");
        hausgemachtHtml.innerHTML = endprojekt.maintext[0].hausgemachtBeschreibung;
        let taeglichFrischHtml = document.getElementById("taeglichFrischBeschreibung");
        taeglichFrischHtml.innerHTML = endprojekt.maintext[0].taeglichfrischBeschreibung;
        let umweltschonendHtml = document.getElementById("umweltschonendBeschreibung");
        umweltschonendHtml.innerHTML = endprojekt.maintext[0].umweltschonendBeschreibung;
        let rechnungHTML = document.getElementById("rechnung");
        // let bestellungBild: HTMLElement = document.createElement("img");
        // bestellungBild.setAttribute("src", "Bilder/notizblock.png");
        // bestellungBild.setAttribute("id", "notizblock");
        // rechnungHTML.appendChild(bestellungBild);
        let eisBildHTML = document.getElementById("eis-bild");
        let waffelTitel = document.createElement("p");
        waffelTitel.setAttribute("id", "waffelTitel");
        waffelTitel.innerHTML = "Wähle deine Waffelsorte aus:";
        eisBildHTML.appendChild(waffelTitel);
        let eisTitel = document.createElement("p");
        eisTitel.setAttribute("id", "eisTitel");
        eisTitel.innerHTML = "Wähle deine Eissorte aus:";
        eisBildHTML.appendChild(eisTitel);
        let streußelTitel = document.createElement("p");
        streußelTitel.setAttribute("id", "streußelTitel");
        streußelTitel.innerHTML = "Wähle deine Streußelsorte aus:";
        eisBildHTML.appendChild(streußelTitel);
        let info = document.createElement("p");
        info.setAttribute("id", "info");
        info.innerHTML = "Schicke dein Eis in den Warenkorb oder lösche deine Bestellung<br><br>";
        eisBildHTML.appendChild(info);
        let flexBoxWarenkorb = document.createElement("div");
        flexBoxWarenkorb.setAttribute("class", "artikel-auswahl");
        let neuesEis = document.createElement("INPUT");
        neuesEis.setAttribute("class", "artikel-button-auswahl");
        neuesEis.setAttribute("type", "button");
        neuesEis.setAttribute("name", "neuesEis");
        // neuesEis.setAttribute("value", "neuesEis");
        neuesEis.setAttribute("id", "neuesEis");
        let label = document.createElement("label");
        label.setAttribute("for", "neuesEis");
        label.innerHTML = "In den Warenkorb";
        neuesEis.addEventListener("click", neuesEisKlick);
        flexBoxWarenkorb.appendChild(neuesEis);
        flexBoxWarenkorb.appendChild(label);
        info.appendChild(flexBoxWarenkorb);
        let flexloeschen = document.createElement("div");
        flexloeschen.setAttribute("class", "artikel-auswahl");
        let löschen = document.createElement("INPUT");
        löschen.setAttribute("class", "artikel-button-auswahl-loeschen");
        löschen.setAttribute("type", "button");
        let labelLöschen = document.createElement("label");
        labelLöschen.innerHTML = "Bestellung löschen<br>";
        löschen.addEventListener("click", löschenKlick);
        flexloeschen.appendChild(löschen);
        flexloeschen.appendChild(labelLöschen);
        info.appendChild(flexloeschen);
        function löschenKlick(_event) {
            streußelBestellung.innerHTML = "<b>Streußelsorte:</b>";
            eisBestellung.innerHTML = "<b>Eissorte:</b>";
            waffelBestellung.innerHTML = "<b>Waffelsorte:</b>";
            localStorage.clear();
            j = 0;
            text = "";
            preis = 0;
            klickCounterWaffel = 0;
            klickCounterStreußel = 0;
            klickCounterEisKugel = 0;
            for (let i = 0; i < 7; i++) {
                document.getElementById("kugel")?.remove();
                document.getElementById("streußel")?.remove();
                document.getElementById("test")?.remove();
            }
            preisHtml.innerHTML = "<b>Preis: </b>" + preis + "€";
        }
        function neuesEisKlick(_event) {
            for (let i = 0; i < 7; i++) {
                document.getElementById("kugel")?.remove();
                document.getElementById("streußel")?.remove();
                document.getElementById("test")?.remove();
            }
            zählerBestellungen++;
            localStorage.setItem("Eissortebestellung" + zählerBestellungen, waffelBestellung.textContent + " <br><br>" + eisBestellung.textContent + " <br><br>" + streußelBestellung.textContent + " <br><br><br><b>" + "Preis: " + preis.toFixed(2) + "€ </b>");
            localStorage.setItem("zählerbestellungen", zählerBestellungen + "");
            counterHtml.innerHTML = zählerBestellungen + "";
            j = 0;
            text = "";
            klickCounterWaffel = 0;
            klickCounterStreußel = 0;
            klickCounterEisKugel = 0;
            streußelBestellung.innerHTML = "<b>Streußelsorte:</b>";
            eisBestellung.innerHTML = "<b>Eissorte:</b>";
            waffelBestellung.innerHTML = "<b>Waffelsorte:</b>";
            localStorage.setItem("gesamtpreis" + zählerBestellungen, preis + "");
            preis = 0;
            preisHtml.innerHTML = "<b>Preis: </b>" + preis + "€";
            console.log(localStorage);
            klickCounterEis++;
        }
        for (let i = 0; i < endprojekt.eis.length; i++) {
            if (endprojekt.eis[i].kategorie == "waffel") {
                let klasse = document.createElement("div");
                klasse.setAttribute("class", "artikel");
                waffelTitel.appendChild(klasse);
                let element = document.createElement("INPUT");
                element.setAttribute("type", "button");
                element.setAttribute("class", "artikel-button");
                //element.setAttribute("value", eis[i].name);
                element.setAttribute("id", endprojekt.eis[i].name);
                element.addEventListener("click", waffelKlick);
                let label = document.createElement("label");
                label.setAttribute("class", "label");
                label.setAttribute("for", endprojekt.eis[i].name);
                label.innerHTML = endprojekt.eis[i].name;
                let anzeigeBild = document.createElement("img");
                anzeigeBild.setAttribute("src", endprojekt.eis[i].bild);
                anzeigeBild.setAttribute("id", "anzeigeBild");
                klasse.appendChild(anzeigeBild);
                klasse.appendChild(element);
                klasse.appendChild(label);
            }
            else if (endprojekt.eis[i].kategorie == "eis") {
                let klasse = document.createElement("div");
                klasse.setAttribute("class", "artikel");
                eisTitel.appendChild(klasse);
                let element = document.createElement("INPUT");
                element.setAttribute("type", "button");
                element.setAttribute("class", "artikel-button");
                // element.setAttribute("value", eis[i].name);
                element.addEventListener("click", eisKlick);
                let label = document.createElement("label");
                label.setAttribute("for", endprojekt.eis[i].name);
                label.innerHTML = endprojekt.eis[i].name;
                let anzeigeBild = document.createElement("img");
                anzeigeBild.setAttribute("src", endprojekt.eis[i].bild);
                anzeigeBild.setAttribute("id", "anzeigeBild");
                klasse.appendChild(anzeigeBild);
                klasse.appendChild(element);
                klasse.appendChild(label);
            }
            else if (endprojekt.eis[i].kategorie == "streußel") {
                let klasse = document.createElement("div");
                klasse.setAttribute("class", "artikel");
                streußelTitel.appendChild(klasse);
                let element = document.createElement("INPUT");
                element.setAttribute("name", "streußel");
                element.setAttribute("class", "artikel-button");
                element.setAttribute("type", "button");
                // element.setAttribute("value", eis[i].name);
                element.setAttribute("id", endprojekt.eis[i].name);
                element.addEventListener("click", streußelKlick);
                let label = document.createElement("label");
                label.setAttribute("for", endprojekt.eis[i].name);
                label.innerHTML = endprojekt.eis[i].name;
                let anzeigeBild = document.createElement("img");
                anzeigeBild.setAttribute("src", endprojekt.eis[i].bild);
                anzeigeBild.setAttribute("id", "anzeigeBild");
                klasse.appendChild(anzeigeBild);
                klasse.appendChild(element);
                klasse.appendChild(label);
            }
            function waffelKlick(_event) {
                if (klickCounterWaffel < 1) {
                    let klasse = document.createElement("div");
                    klasse.setAttribute("id", "test");
                    eisGenerator.appendChild(klasse);
                    let bild = document.createElement("img");
                    bild.setAttribute("src", endprojekt.eis[i].bild);
                    bild.setAttribute("id", endprojekt.eis[i].kategorie2);
                    localStorage.setItem("waffelsorte", endprojekt.eis[i].name);
                    klasse.appendChild(bild);
                    preis = preis + endprojekt.eis[i].preis;
                    waffelBestellung.innerHTML = "<b>Waffelsorte:</b><br> 1X " + endprojekt.eis[i].name;
                    klickCounterWaffel++;
                }
                else if (klickCounterWaffel > 1) {
                    //document.getElementById("test")?.remove(); 
                    preis = preis - endprojekt.eis[i].preis;
                }
                preisHtml.innerHTML = "<b>Preis: </b>" + preis + "€";
            }
            function eisKlick(_event) {
                if (klickCounterWaffel > 0 && klickCounterStreußel < 1) {
                    let bild = document.createElement("img");
                    bild.setAttribute("src", endprojekt.eis[i].bild);
                    bild.setAttribute("id", "kugel");
                    bild.setAttribute("div", "");
                    localStorage.setItem("eissorte" + j, endprojekt.eis[i].name);
                    if (j > 4) {
                        console.log("Maximale Anzahl an Kugeln erreicht");
                        let maximaleAnzahl = document.getElementById("maximale-kugelanzahl-message");
                        maximaleAnzahl.innerHTML = "Maximale Anzahl <br> an Kugeln erreicht!";
                        // eisBildHTML.appendChild(maximaleAnzahl);
                    }
                    else {
                        eisGenerator.appendChild(bild);
                        text = text + "<br>1X " + endprojekt.eis[i].name;
                        eisBestellung.innerHTML = "<b>Eissorte:</b> " + text;
                        preis = preis + endprojekt.eis[i].preis;
                        preisHtml.innerHTML = "<b>Preis: </b>" + preis + "€";
                        console.log(preis + " €");
                        j++;
                        console.log(text);
                    }
                    klickCounterEis++;
                    klickCounterEisKugel++;
                }
                else {
                    console.log("Zuerst Waffel auswählen!");
                }
            }
            function streußelKlick(_event) {
                if (klickCounterEisKugel > 0) {
                    let klasse = document.createElement("div");
                    klasse.setAttribute("id", "test");
                    eisGenerator.appendChild(klasse);
                    if (klickCounterStreußel < 1) {
                        let bild = document.createElement("img");
                        bild.setAttribute("src", endprojekt.eis[i].bild);
                        bild.setAttribute("id", "streußel");
                        bild.setAttribute("div", "");
                        klasse.appendChild(bild);
                        localStorage.setItem("streußelsorte", endprojekt.eis[i].name);
                        streußelBestellung.innerHTML = "<b>Streußelsorte:</b><br> 1X " + endprojekt.eis[i].name;
                        preis = preis + endprojekt.eis[i].preis;
                        klickCounterStreußel++;
                    }
                    else if (klickCounterStreußel > 1) {
                        preis = preis - endprojekt.eis[i].preis;
                    }
                    preisHtml.innerHTML = "<b>Preis: </b>" + preis + "€";
                }
                else {
                    console.log("zuerst Eiskugel auswählen");
                }
            }
        }
        // document.getElementById("main")?.appendChild(divInhalt);
    }
    endprojekt.Maintextaufrufen = Maintextaufrufen;
})(endprojekt || (endprojekt = {}));
//# sourceMappingURL=mainscript.js.map