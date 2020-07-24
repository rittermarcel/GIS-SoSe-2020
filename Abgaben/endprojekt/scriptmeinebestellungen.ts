namespace endprojekt {
let zähler: number = parseInt(<string>localStorage.getItem("zählerbestellungen"));
let gesamtpreis: number = 0;
let gesamtpreishtml: HTMLElement = <HTMLElement>document.getElementById("gesamtPreis");
let bestellungenform: HTMLElement = <HTMLElement>document.getElementById("bestellungenform");
bestellungenform.hidden = true;
let gesamttext: string = "";
let serverantwort: HTMLElement = <HTMLElement>document.getElementById("serverAntwort");




let formData: FormData;


let buttonbestellen: HTMLButtonElement = <HTMLButtonElement>document.getElementById("bestellen");
buttonbestellen.addEventListener("click", buttonclickbestellen);

    


async function buttonclickbestellen(): Promise<void> {
        
        formData = new FormData(document.forms[0]);
        let url: string = "http://localhost:8100";
       // let url: string = "https://gissommersemester2020.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/bestellen" + "?" + query.toString();
        await fetch(url);
        
        serverantwort.innerHTML = "Bestellt! Vielen Dank :)";
    }



let divinhalt: HTMLElement = document.createElement("div");
divinhalt.setAttribute("class", "bestellungen");


for (let i: number = 1; i <= zähler; i++) {


console.log(localStorage.getItem("gesamtpreis" + i));
gesamtpreis = gesamtpreis + JSON.parse(<string>localStorage.getItem("gesamtpreis" + i));


let info: HTMLElement = document.createElement("p");
info.setAttribute("id", "bestellungen");
let text: string = <string>localStorage.getItem("Eissortebestellung" + i);
info.innerHTML = "<b>" + i + " Bestellung: <br><br>" + "</b>" + text + "<br><br>";
gesamttext = gesamttext + info.textContent;
let texts: string = info.textContent + "";

let löschen: HTMLElement = document.createElement("Button");
löschen.addEventListener("click", löschenklick);
löschen.innerHTML = "Löschen";
divinhalt.appendChild(info);
info.appendChild(löschen);
function löschenklick(_event: Event): void {
   
    
    zähler--;
    localStorage.setItem("zwischenpreis", JSON.parse(<string>localStorage.getItem("gesamtpreis" + i)));
    
    console.log(texts);
 
    gesamttext = gesamttext.replace(texts, "");
    bestellungenform.setAttribute("value", gesamttext);
    console.log(gesamttext);
    gesamtpreis = gesamtpreis - JSON.parse(<string>localStorage.getItem("zwischenpreis"));
    console.log(gesamtpreis);
    gesamtpreishtml.innerHTML = "Gesamtsumme: " + gesamtpreis.toFixed(2) + "€";
    ((<HTMLDivElement>_event.currentTarget).parentElement!).remove();
    }
}
bestellungenform.setAttribute("value", gesamttext);
gesamtpreishtml.innerHTML = "Gesamtsumme: " + gesamtpreis.toFixed(2) + "€";


document.getElementById("main")?.appendChild(divinhalt);
}