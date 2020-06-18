"use strict";
var Aufgabe8;
(function (Aufgabe8) {
    let formData;
    let abschicken = document.getElementById("abschicken");
    abschicken.addEventListener("click", abschickenklick);
    async function abschickenklick() {
        formData = new FormData(document.forms[0]);
        let url = "https://gissommersemester2020.herokuapp.com/";
        let urlquery = new URLSearchParams(formData);
        url = url + "?" + urlquery.toString();
        let antwort = await fetch(url);
        let antworttext = await antwort.text();
        console.log(antworttext);
    }
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=script.js.map