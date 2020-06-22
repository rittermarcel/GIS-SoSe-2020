"use strict";
var Aufgabe8;
(function (Aufgabe8) {
    let button = document.getElementById("button");
    button.addEventListener("click", buttonclick);
    async function buttonclick() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissommersemester2020.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        await fetch(url);
        for (let entry of query) {
            console.log(entry);
            console.log("name: " + entry[0] + " Wert:" + entry[1]);
        }
    }
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=script.js.map