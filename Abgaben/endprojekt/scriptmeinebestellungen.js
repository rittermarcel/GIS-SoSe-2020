"use strict";
var endprojekt;
(function (endprojekt) {
    let zähler = parseInt(localStorage.getItem("zählerbestellungen"));
    let gesamtpreis = 0;
    let gesamtpreishtml = document.getElementById("gesamtpreis");
    let bestellungenform = document.getElementById("bestellungenform");
    bestellungenform.hidden = true;
    let gesamttext = "";
    let serverantwort = document.getElementById("serverantwort");
    let formData;
    let buttonbestellen = document.getElementById("bestellen");
    buttonbestellen.addEventListener("click", buttonclickbestellen);
    async function buttonclickbestellen() {
        formData = new FormData(document.forms[0]);
        let url = "http://localhost:8100";
        // let url: string = "https://gissommersemester2020.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "/bestellen" + "?" + query.toString();
        await fetch(url);
        serverantwort.innerHTML = "Bestellt! Vielen Dank :)";
    }
    let divinhalt = document.createElement("div");
    divinhalt.setAttribute("class", "bestellungen");
    for (let i = 1; i <= zähler; i++) {
        console.log(localStorage.getItem("gesamtpreis" + i));
        gesamtpreis = gesamtpreis + JSON.parse(localStorage.getItem("gesamtpreis" + i));
        let info = document.createElement("p");
        info.setAttribute("id", "bestellungen");
        let text = localStorage.getItem("Eissortebestellung" + i);
        info.innerHTML = "<b>" + i + " Bestellung: <br><br>" + "</b>" + text + "<br><br>";
        gesamttext = gesamttext + info.textContent;
        let texts = info.textContent + "";
        let löschen = document.createElement("Button");
        löschen.addEventListener("click", löschenklick);
        löschen.innerHTML = "Löschen";
        divinhalt.appendChild(info);
        info.appendChild(löschen);
        function löschenklick(_event) {
            zähler--;
            localStorage.setItem("zwischenpreis", JSON.parse(localStorage.getItem("gesamtpreis" + i)));
            console.log(texts);
            gesamttext = gesamttext.replace(texts, "");
            bestellungenform.setAttribute("value", gesamttext);
            console.log(gesamttext);
            gesamtpreis = gesamtpreis - JSON.parse(localStorage.getItem("zwischenpreis"));
            console.log(gesamtpreis);
            gesamtpreishtml.innerHTML = "Gesamtsumme: " + gesamtpreis + "€";
            (_event.currentTarget.parentElement).remove();
        }
    }
    bestellungenform.setAttribute("value", gesamttext);
    gesamtpreishtml.innerHTML = "Gesamtsumme: " + gesamtpreis + "€";
    document.getElementById("main")?.appendChild(divinhalt);
})(endprojekt || (endprojekt = {}));
//# sourceMappingURL=scriptmeinebestellungen.js.map