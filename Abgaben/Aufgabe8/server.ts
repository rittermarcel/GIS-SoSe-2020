import * as Http from "http";
export namespace Aufgabe8 {


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
    
        _response.write(_request.url);
    
        _response.end();
      }
    }
