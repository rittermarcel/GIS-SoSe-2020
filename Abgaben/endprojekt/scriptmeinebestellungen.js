"use strict";
var endprojekt;
(function (endprojekt) {
    let zähler = parseInt(localStorage.getItem("zählerbestellungen"));
    let gesamtPreis = 0;
    let gesamtPreisHtml = document.getElementById("gesamtPreis");
    let bestellungenForm = document.getElementById("bestellungenForm");
    bestellungenForm.hidden = true;
    let lieferStatusForm = document.getElementById("lieferstatusForm");
    lieferStatusForm.hidden = true;
    lieferStatusForm.setAttribute("value", "Ausstehend");
    lieferStatusForm.innerHTML = "Ausstehend";
    let gesamtText = "";
    let serverAntwort = document.getElementById("serverAntwort");
    let formData;
    let buttonBestellen = document.getElementById("bestellen");
    buttonBestellen.addEventListener("click", buttonClickBestellen);
    async function buttonClickBestellen() {
        formData = new FormData(document.forms[0]);
        //let url: string = "http://localhost:8100";
        let url = "https://gissommersemester2020.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "/bestellen" + "?" + query.toString();
        await fetch(url);
        serverAntwort.innerHTML = "Bestellt! Vielen Dank :)";
    }
    let divInhalt = document.createElement("div");
    divInhalt.setAttribute("class", "bestellungen");
    for (let i = 1; i <= zähler; i++) {
        console.log(localStorage.getItem("gesamtpreis" + i));
        gesamtPreis = gesamtPreis + JSON.parse(localStorage.getItem("gesamtpreis" + i));
        let info = document.createElement("p");
        info.setAttribute("id", "bestellungen");
        let text = localStorage.getItem("Eissortebestellung" + i);
        info.innerHTML = "<b>" + i + " Bestellung: <br><br>" + "</b>" + text + "<br><br>";
        gesamtText = gesamtText + info.textContent;
        let texts = info.textContent + "";
        let löschen = document.createElement("Button");
        löschen.addEventListener("click", löschenklick);
        löschen.innerHTML = "Löschen";
        divInhalt.appendChild(info);
        info.appendChild(löschen);
        function löschenklick(_event) {
            zähler--;
            localStorage.setItem("zwischenpreis", JSON.parse(localStorage.getItem("gesamtpreis" + i)));
            console.log(texts);
            gesamtText = gesamtText.replace(texts, "");
            bestellungenForm.setAttribute("value", gesamtText);
            console.log(gesamtText);
            gesamtPreis = gesamtPreis - JSON.parse(localStorage.getItem("zwischenpreis"));
            console.log(gesamtPreis);
            gesamtPreisHtml.innerHTML = "Gesamtsumme: " + gesamtPreis.toFixed(2) + "€";
            (_event.currentTarget.parentElement).remove();
        }
    }
    bestellungenForm.setAttribute("value", gesamtText);
    gesamtPreisHtml.innerHTML = "Gesamtsumme: " + gesamtPreis.toFixed(2) + "€";
    document.getElementById("main")?.appendChild(divInhalt);
})(endprojekt || (endprojekt = {}));
//# sourceMappingURL=scriptmeinebestellungen.js.map