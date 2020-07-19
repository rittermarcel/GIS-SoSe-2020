"use strict";
var endprojekt;
(function (endprojekt) {
    let buttonholen = document.getElementById("einsehen");
    buttonholen.addEventListener("click", buttonclickholen);
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
})(endprojekt || (endprojekt = {}));
//# sourceMappingURL=scripteingegangenebestellungen.js.map