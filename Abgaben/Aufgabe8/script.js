"use strict";
var Aufgabe8;
(function (Aufgabe8) {
    let formData;
    let abschicken = document.getElementById("abschicken");
    abschicken.addEventListener("click", abschickenklick);
    async function addToURL() {
        formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        let url = "https://gissommersemester2020.herokuapp.com/" + "?" + query.toString();
        return url;
    }
    async function abschickenklick() {
        getResponse(await addToURL());
    }
    async function getResponse(_url) {
        let antwort = await fetch(_url, { method: "get" });
        let antwort2 = await antwort.text();
        console.log(antwort2);
    }
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=script.js.map