import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";
export namespace endprojekt {

      let bestellungen: Mongo.Collection;
      let databaseUrl: string = "mongodb+srv://gisuser2020:dv1Y6ayeEBvevpAf@marcelgis.1jm82.mongodb.net/Eisdiele?retryWrites=true&w=majority";
     // let databaseUrl: string = "mongodb://localhost: 27017";
//mongodb+srv://gisuser2020:<password>@marcelgis.1jm82.mongodb.net/<dbname>?retryWrites=true&w=majority
      console.log("Starting server");
      //Port Number wird unter port gespeichert
      let port: number = Number(process.env.PORT);
      //Wenn port nicht erreichbar, wird Wert 8100 vergeben
      if (!port)
        port = 8100;

      connectToDatabase(databaseUrl);
    //Server und Listener erstellen
      let server: Http.Server = Http.createServer();
      server.addListener("request", handleRequest);
      server.addListener("listening", handleListen);
      server.listen(port);
    
      async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();

        bestellungen = mongoClient.db("Eisdiele").collection("bestellungen");
        console.log("Database connection ", bestellungen != undefined);
    }




      function handleListen(): void {
        console.log("Listening");
      }
      //Server Daten erhalten
      async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise <void> {
        console.log("I hear voices!");
    
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
    
        if (_request.url) {
          let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
          let pfad: string | null = url.pathname;
          if (pfad == "/bestellen") {
          bestellungen.insertOne(url.query);
          } else if (pfad == "/holen") {
            
            _response.write(JSON.stringify(await bestellungen.find().toArray()));
          } else if (pfad == "/clear") {
            bestellungen.drop();
          }
        }
    
        _response.end();
      }
    }