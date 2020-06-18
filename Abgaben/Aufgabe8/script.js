"use strict";
var Aufgabe8;
(function (Aufgabe8) {
    let formData;
    let abschicken = document.getElementById("abschicken");
    abschicken.addEventListener("click", abschickenklick);
    async function addToURL() {
        formData = new FormData(document.forms[0]);
        let url = "https://gissommersemester2020.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        return url;
    }
    async function abschickenklick() {
        getResponse(await addToURL());
    }
    async function getResponse(_url) {
        let response = await fetch(_url, { method: "get" });
        let resp2 = await response.text();
        console.log(resp2);
    }
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=script.js.map