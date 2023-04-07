import * as Http from "http";
import * as Url from "url";
export namespace Aufgabe9 {

//mongodb+srv://gisuser2020:<password>@marcelgis.1jm82.mongodb.net/<dbname>?retryWrites=true&w=majority
      console.log("Starting server");
      //Port Number wird unter port gespeichert
      let port: number = Number(process.env.PORT);
      //Wenn port nicht erreichbar, wird Wert 8100 vergeben
      if (!port)
        port = 8100;
    //Server und Listener erstellen
      let server: Http.Server = Http.createServer();
      server.addListener("request", handleRequest);
      server.addListener("listening", handleListen);
      server.listen(port);
    
      function handleListen(): void {
        console.log("Listening");
      }
      //Server Daten erhalten
      function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");
    
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
    
        if (_request.url) {
          let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
          let pfad: string | null = url.pathname;
          if (pfad == "/html") {
            for (let key in url.query) {
              _response.write(key + ": " + url.query[key] + "<br>");
            }
          } else if (pfad == "/json") {
            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString);
          }
        }
    
        _response.end();
      }
    }