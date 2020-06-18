"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe8 = void 0;
const Http = require("http");
var Aufgabe8;
(function (Aufgabe8) {
    console.log("Starting server");
    //Port Number wird unter port gespeichert
    let port = Number(process.env.PORT);
    //Wenn port nicht erreichbar, wird Wert 8100 vergeben
    if (!port)
        port = 8100;
    //Server und Listener erstellen
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    //Server Daten erhalten
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);
        _response.end();
    }
})(Aufgabe8 = exports.Aufgabe8 || (exports.Aufgabe8 = {}));
//# sourceMappingURL=server.js.map