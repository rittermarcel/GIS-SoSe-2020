"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe9 = void 0;
const Http = require("http");
const Url = require("url");
var Aufgabe9;
(function (Aufgabe9) {
    //mongodb+srv://gisuser2020:<password>@marcelgis.1jm82.mongodb.net/<dbname>?retryWrites=true&w=majority
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
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let pfad = url.pathname;
            if (pfad == "/html") {
                for (let key in url.query) {
                    _response.write(key + ": " + url.query[key] + "<br>");
                }
            }
            else if (pfad == "/json") {
                let jsonString = JSON.stringify(url.query);
                _response.write(jsonString);
            }
        }
        _response.end();
    }
})(Aufgabe9 = exports.Aufgabe9 || (exports.Aufgabe9 = {}));
//# sourceMappingURL=server.js.map