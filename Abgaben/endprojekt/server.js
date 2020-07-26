"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endprojekt = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var endprojekt;
(function (endprojekt) {
    let bestellungen;
    let databaseUrl = "mongodb+srv://gisuser2020:dv1Y6ayeEBvevpAf@marcelgis.1jm82.mongodb.net/Eisdiele?retryWrites=true&w=majority";
    //let databaseUrl: string = "mongodb://localhost: 27017";
    //mongodb+srv://gisuser2020:<password>@marcelgis.1jm82.mongodb.net/<dbname>?retryWrites=true&w=majority
    console.log("Starting server");
    //Port Number wird unter port gespeichert
    let port = Number(process.env.PORT);
    //Wenn port nicht erreichbar, wird Wert 8100 vergeben
    if (!port)
        port = 8100;
    connectToDatabase(databaseUrl);
    //Server und Listener erstellen
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        bestellungen = mongoClient.db("Eisdiele").collection("bestellungen");
        console.log("Database connection ", bestellungen != undefined);
    }
    function handleListen() {
        console.log("Listening");
    }
    //Server Daten erhalten
    async function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let pfad = url.pathname;
            if (pfad == "/bestellen") {
                bestellungen.insertOne(url.query);
            }
            else if (pfad == "/holen") {
                _response.write(JSON.stringify(await bestellungen.find().toArray()));
            }
            else if (pfad == "/statuswechsel") {
                bestellungen.updateOne({ lieferstatus: "Ausstehend" }, { $set: { lieferstatus: "Versendet" } });
            }
            else if (pfad == "/clear") {
                bestellungen.drop();
            }
        }
        _response.end();
    }
})(endprojekt = exports.endprojekt || (exports.endprojekt = {}));
//# sourceMappingURL=server.js.map