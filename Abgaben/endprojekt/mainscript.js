"use strict";
var endprojekt;
(function (endprojekt) {
    function Maintextaufrufen() {
        let beschreibunghtml = document.getElementById("beschreibung");
        beschreibunghtml.innerHTML = endprojekt.maintext[0].beschreibung1;
        let titelhtml = document.getElementById("titel");
        titelhtml.innerHTML = endprojekt.maintext[0].titel;
        let hausgemachthtml = document.getElementById("hausgemachtbeschreibung");
        hausgemachthtml.innerHTML = endprojekt.maintext[0].hausgemachtbeschreibung;
        let taeglichfrischhtml = document.getElementById("taeglichfrischbeschreibung");
        taeglichfrischhtml.innerHTML = endprojekt.maintext[0].taeglichfrischbeschreibung;
        let umweltschonendhtml = document.getElementById("umweltschonendbeschreibung");
        umweltschonendhtml.innerHTML = endprojekt.maintext[0].umweltschonendbeschreibung;
    }
    endprojekt.Maintextaufrufen = Maintextaufrufen;
})(endprojekt || (endprojekt = {}));
//# sourceMappingURL=mainscript.js.map