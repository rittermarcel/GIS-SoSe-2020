"use strict";
var endprojekt;
(function (endprojekt) {
    loadArtikel("data.json");
    async function loadArtikel(_url) {
        let response = await fetch(_url);
        let jsonArray = await response.json();
        endprojekt.maintext = await JSON.parse(JSON.stringify(jsonArray));
        endprojekt.eis = await JSON.parse(JSON.stringify(jsonArray));
        endprojekt.Maintextaufrufen();
    }
})(endprojekt || (endprojekt = {}));
//# sourceMappingURL=inhalt.js.map