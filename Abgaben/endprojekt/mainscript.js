"use strict";
var endprojekt;
(function (endprojekt) {
    function Maintextaufrufen() {
        let j = 1;
        let text = "";
        let preis = 0;
        let klickCounterWaffel = 0;
        let klickCounterEis = 0;
        let klickCounterStreußel = 0;
        let zählerBestellungen = 0;
        let counterHtml = document.getElementById("counter");
        let preisHtml = document.getElementById("preis");
        let streußelBestellung = document.getElementById("streußelsortebestellt");
        let eisBestellung = document.getElementById("eissortebestellt");
        let waffelBestellung = document.getElementById("waffelsortebestellt");
        let startLink = document.getElementById("startlink");
        startLink.addEventListener("click", startKlick);
        localStorage.setItem("zählerbestellungen", 0 + "");
        function startKlick(_event) {
            window.location.href = "#eiserstellentitel";
        }
        let beschreibungHtml = document.getElementById("beschreibung");
        beschreibungHtml.innerHTML = endprojekt.maintext[0].beschreibung1;
        let titelHtml = document.getElementById("titel");
        titelHtml.innerHTML = endprojekt.maintext[0].titel;
        let hausgemachtHtml = document.getElementById("hausgemachtbeschreibung");
        hausgemachtHtml.innerHTML = endprojekt.maintext[0].hausgemachtbeschreibung;
        let taeglichFrischHtml = document.getElementById("taeglichfrischbeschreibung");
        taeglichFrischHtml.innerHTML = endprojekt.maintext[0].taeglichfrischbeschreibung;
        let umweltschonendHtml = document.getElementById("umweltschonendbeschreibung");
        umweltschonendHtml.innerHTML = endprojekt.maintext[0].umweltschonendbeschreibung;
        let divInhalt = document.createElement("div");
        divInhalt.setAttribute("class", "inhalt");
        let bestellungBild = document.createElement("img");
        bestellungBild.setAttribute("src", "Bilder/notizblock.png");
        bestellungBild.setAttribute("id", "notizblock");
        divInhalt.appendChild(bestellungBild);
        let divElement = document.createElement("div");
        divElement.setAttribute("class", "eisgenerieren");
        divInhalt.appendChild(divElement);
        let eisBild = document.getElementById("eisbild");
        divInhalt.appendChild(eisBild);
        let waffelTitel = document.createElement("p");
        waffelTitel.setAttribute("id", "waffeltitel");
        waffelTitel.innerHTML = "Wähle deine Waffelsorte aus:";
        divElement.appendChild(waffelTitel);
        let eisTitel = document.createElement("p");
        eisTitel.setAttribute("id", "eistitel");
        eisTitel.innerHTML = "Wähle deine Eissorte aus:";
        divElement.appendChild(eisTitel);
        let streußelTitel = document.createElement("p");
        streußelTitel.setAttribute("id", "streußeltitel");
        streußelTitel.innerHTML = "Wähle deine Streußelsorte aus:";
        divElement.appendChild(streußelTitel);
        let info = document.createElement("p");
        info.setAttribute("id", "info");
        info.innerHTML = "Schicke dein Eis in den Warenkorb oder lösche deine Bestellung<br><br><br>";
        divElement.appendChild(info);
        let neuesEis = document.createElement("Button");
        neuesEis.setAttribute("name", "neueseis");
        neuesEis.setAttribute("value", "neueseis");
        neuesEis.setAttribute("id", "neueseis");
        let label = document.createElement("label");
        label.setAttribute("for", "neueseis");
        label.innerHTML = "In den Warenkorb" + "<br><br>";
        neuesEis.addEventListener("click", neuesEisKlick);
        info.appendChild(neuesEis);
        info.appendChild(label);
        let löschen = document.createElement("Button");
        let labelLöschen = document.createElement("label");
        labelLöschen.innerHTML = "Bestellung löschen<br>";
        löschen.addEventListener("click", löschenklick);
        info.appendChild(löschen);
        info.appendChild(labelLöschen);
        function löschenklick(_event) {
            streußelBestellung.innerHTML = "<b>Streußelsorte:</b>";
            eisBestellung.innerHTML = "<b>Eissorte:</b>";
            waffelBestellung.innerHTML = "<b>Waffelsorte:</b>";
            //localStorage.clear();
            j = 0;
            text = "";
            preis = 0;
            klickCounterWaffel = 0;
            klickCounterStreußel = 0;
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
            localStorage.setItem("Eissortebestellung" + zählerBestellungen, waffelBestellung.textContent + " <br>" + eisBestellung.textContent + " <br>" + streußelBestellung.textContent + " <br>" + "Preis: " + preis.toFixed(2) + "€ ");
            localStorage.setItem("zählerbestellungen", zählerBestellungen + "");
            counterHtml.innerHTML = zählerBestellungen + "";
            j = 0;
            text = "";
            klickCounterWaffel = 0;
            klickCounterStreußel = 0;
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
                klasse.setAttribute("class", "waffelartikel");
                waffelTitel.appendChild(klasse);
                let element = document.createElement("INPUT");
                element.setAttribute("name", "waffel");
                element.setAttribute("type", "button");
                //element.setAttribute("value", eis[i].name);
                element.setAttribute("id", endprojekt.eis[i].name);
                element.addEventListener("click", waffelKlick);
                let label = document.createElement("label");
                label.setAttribute("for", endprojekt.eis[i].name);
                label.innerHTML = endprojekt.eis[i].name + "<br>" + "<br>";
                let anzeigeBild = document.createElement("img");
                anzeigeBild.setAttribute("src", endprojekt.eis[i].bild);
                anzeigeBild.setAttribute("id", "anzeigebild");
                klasse.appendChild(anzeigeBild);
                klasse.appendChild(element);
                klasse.appendChild(label);
            }
            else if (endprojekt.eis[i].kategorie == "eis") {
                let klasse = document.createElement("div");
                klasse.setAttribute("class", "eisartikel");
                eisTitel.appendChild(klasse);
                let element = document.createElement("Button");
                element.setAttribute("value", endprojekt.eis[i].name);
                element.addEventListener("click", eisKlick);
                let label = document.createElement("label");
                label.setAttribute("for", endprojekt.eis[i].name);
                label.innerHTML = endprojekt.eis[i].name + "<br>" + "<br>";
                let anzeigeBild = document.createElement("img");
                anzeigeBild.setAttribute("src", endprojekt.eis[i].bild);
                anzeigeBild.setAttribute("id", "anzeigebild");
                klasse.appendChild(anzeigeBild);
                klasse.appendChild(element);
                klasse.appendChild(label);
            }
            else if (endprojekt.eis[i].kategorie == "streußel") {
                let klasse = document.createElement("div");
                klasse.setAttribute("class", "streußelartikel");
                streußelTitel.appendChild(klasse);
                let element = document.createElement("INPUT");
                element.setAttribute("name", "streußel");
                element.setAttribute("type", "button");
                // element.setAttribute("value", eis[i].name);
                element.setAttribute("id", endprojekt.eis[i].name);
                element.addEventListener("click", streußelKlick);
                let label = document.createElement("label");
                label.setAttribute("for", endprojekt.eis[i].name);
                label.innerHTML = endprojekt.eis[i].name + "<br>" + "<br>";
                let anzeigeBild = document.createElement("img");
                anzeigeBild.setAttribute("src", endprojekt.eis[i].bild);
                anzeigeBild.setAttribute("id", "anzeigebild");
                klasse.appendChild(anzeigeBild);
                klasse.appendChild(element);
                klasse.appendChild(label);
            }
            function waffelKlick(_event) {
                if (klickCounterWaffel < 1) {
                    let klasse = document.createElement("div");
                    klasse.setAttribute("id", "test");
                    eisBild.appendChild(klasse);
                    let bild = document.createElement("img");
                    bild.setAttribute("src", endprojekt.eis[i].bild);
                    bild.setAttribute("id", endprojekt.eis[i].kategorie2);
                    localStorage.setItem("waffelsorte", endprojekt.eis[i].name);
                    klasse.appendChild(bild);
                    preis = preis + endprojekt.eis[i].preis;
                    waffelBestellung.innerHTML = "<b>Waffelsorte:</b> 1X" + endprojekt.eis[i].name;
                    klickCounterWaffel++;
                }
                else if (klickCounterWaffel > 1) {
                    //document.getElementById("test")?.remove(); 
                    preis = preis - endprojekt.eis[i].preis;
                }
                preisHtml.innerHTML = "<b>Preis: </b>" + preis + "€";
            }
            function streußelKlick(_event) {
                if (klickCounterEis > 0) {
                    let klasse = document.createElement("div");
                    klasse.setAttribute("id", "test");
                    eisBild.appendChild(klasse);
                    if (klickCounterStreußel < 1) {
                        let bild = document.createElement("img");
                        bild.setAttribute("src", endprojekt.eis[i].bild);
                        bild.setAttribute("id", "streußel");
                        bild.setAttribute("div", "");
                        klasse.appendChild(bild);
                        localStorage.setItem("streußelsorte", endprojekt.eis[i].name);
                        streußelBestellung.innerHTML = "<b>Streußelsorte:</b> 1X" + endprojekt.eis[i].name;
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
            function eisKlick(_event) {
                if (klickCounterWaffel > 0 && klickCounterStreußel < 1) {
                    let bild = document.createElement("img");
                    bild.setAttribute("src", endprojekt.eis[i].bild);
                    bild.setAttribute("id", "kugel");
                    bild.setAttribute("div", "");
                    localStorage.setItem("eissorte" + j, endprojekt.eis[i].name);
                    if (j > 6) {
                        console.log("Maximale Anzahl an Kugeln erreicht");
                        let maximaleAnzahl = document.getElementById("maximaleanzahl");
                        maximaleAnzahl.innerHTML = "Maximale Anzahl <br> an Kugeln erreicht!";
                        divElement.appendChild(maximaleAnzahl);
                    }
                    else {
                        eisBild.appendChild(bild);
                        text = text + "1X" + endprojekt.eis[i].name + ", ";
                        eisBestellung.innerHTML = "<b>Eissorte:</b> " + text;
                        preis = preis + endprojekt.eis[i].preis;
                        preisHtml.innerHTML = "<b>Preis: </b>" + preis + "€";
                        console.log(preis + " €");
                        j++;
                        console.log(text);
                    }
                    klickCounterEis++;
                }
                else {
                    console.log("Zuerst Waffel auswählen!");
                }
            }
        }
        document.getElementById("main")?.appendChild(divInhalt);
    }
    endprojekt.Maintextaufrufen = Maintextaufrufen;
})(endprojekt || (endprojekt = {}));
//# sourceMappingURL=mainscript.js.map