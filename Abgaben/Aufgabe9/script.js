"use strict";
var Aufgabe9;
(function (Aufgabe9) {
    let buttonhtml = document.getElementById("buttonhtml");
    buttonhtml.addEventListener("click", buttonclickhtml);
    let buttonjson = document.getElementById("buttonjson");
    buttonjson.addEventListener("click", buttonclickjson);
    async function buttonclickhtml() {
        let formData = new FormData(document.forms[0]);
        // let url: string = "http://localhost:8100";
        let url = "https://gissommersemester2020.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "/html" + "?" + query.toString();
        let response = await fetch(url);
        let responseString = await response.text();
        let serverResponse = document.getElementById("serverantwort");
        serverResponse.innerHTML = responseString;
    }
    async function buttonclickjson() {
        let formData = new FormData(document.forms[0]);
        //let url: string = "http://localhost:8100";
        let url = "https://gissommersemester2020.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "/json" + "?" + query.toString();
        //BUGS gefixt
        let response = await fetch(url);
        let responseString = await response.json();
        console.log(responseString);
    }
})(Aufgabe9 || (Aufgabe9 = {}));
//# sourceMappingURL=script.js.map