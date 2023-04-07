"use strict";
var Aufgabe7;
(function (Aufgabe7) {
    loadArtikel("data.json");
    async function loadArtikel(_url) {
        let response = await fetch(_url);
        let jsonArray = await response.json();
        Aufgabe7.artikel = await JSON.parse(JSON.stringify(jsonArray));
        Aufgabe7.artikelErstellen();
    }
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=scriptinhalt.js.map