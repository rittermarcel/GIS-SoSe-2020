"use strict";
var endprojekt;
(function (endprojekt) {
    let buttonholen = document.getElementById("einsehen");
    buttonholen.addEventListener("click", buttonclickholen);
    let buttonlöschen = document.getElementById("löschen");
    buttonlöschen.addEventListener("click", buttonclicklöschen);
    let htmltext = document.getElementById("text");
    async function buttonclickholen() {
        //let url: string = "https://gissommersemester2020.herokuapp.com";
        let url = "http://localhost:8100";
        url = url + "/holen";
        let response = await fetch(url);
        let responseString = await response.text();
        htmltext.innerHTML = responseString;
        console.log("holen");
    }
    async function buttonclicklöschen() {
        let url = "http://localhost:8100";
        url = url + "/clear";
        await fetch(url);
    }
})(endprojekt || (endprojekt = {}));
//# sourceMappingURL=scripteingegangenebestellungen.js.map