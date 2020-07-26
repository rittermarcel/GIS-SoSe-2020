namespace endprojekt {
let zähler: number = parseInt(<string>localStorage.getItem("zählerbestellungen"));
let gesamtPreis: number = 0;
let gesamtPreisHtml: HTMLElement = <HTMLElement>document.getElementById("gesamtPreis");
let bestellungenForm: HTMLElement = <HTMLElement>document.getElementById("bestellungenForm");
bestellungenForm.hidden = true;


let lieferStatusForm: HTMLElement = <HTMLElement>document.getElementById("lieferstatusForm");
lieferStatusForm.hidden = true;
lieferStatusForm.setAttribute("value", "Ausstehend");
lieferStatusForm.innerHTML = "Ausstehend";

let gesamtText: string = "";
let serverAntwort: HTMLElement = <HTMLElement>document.getElementById("serverAntwort");


let formData: FormData;


let buttonBestellen: HTMLButtonElement = <HTMLButtonElement>document.getElementById("bestellen");
buttonBestellen.addEventListener("click", buttonClickBestellen);

   
async function buttonClickBestellen(): Promise<void> {
        
        formData = new FormData(document.forms[0]);
        //let url: string = "http://localhost:8100";
        let url: string = "https://gissommersemester2020.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/bestellen" + "?" + query.toString();
        await fetch(url);
        
        serverAntwort.innerHTML = "Bestellt! Vielen Dank :)";
        
    }



let divInhalt: HTMLElement = document.createElement("div");
divInhalt.setAttribute("class", "bestellungen");


for (let i: number = 1; i <= zähler; i++) {


console.log(localStorage.getItem("gesamtpreis" + i));
gesamtPreis = gesamtPreis + JSON.parse(<string>localStorage.getItem("gesamtpreis" + i));


let info: HTMLElement = document.createElement("p");
info.setAttribute("id", "bestellungen");
let text: string = <string>localStorage.getItem("Eissortebestellung" + i);
info.innerHTML = "<b>" + i + " Bestellung: <br><br>" + "</b>" + text + "<br><br>";
gesamtText = gesamtText + info.textContent;
let texts: string = info.textContent + "";

let löschen: HTMLElement = document.createElement("Button");
löschen.addEventListener("click", löschenklick);
löschen.innerHTML = "Löschen";
divInhalt.appendChild(info);
info.appendChild(löschen);
function löschenklick(_event: Event): void {
   
    
    zähler--;
    localStorage.setItem("zwischenpreis", JSON.parse(<string>localStorage.getItem("gesamtpreis" + i)));
    
    console.log(texts);
 
    gesamtText = gesamtText.replace(texts, "");
    bestellungenForm.setAttribute("value", gesamtText);
    console.log(gesamtText);
    gesamtPreis = gesamtPreis - JSON.parse(<string>localStorage.getItem("zwischenpreis"));
    console.log(gesamtPreis);
    gesamtPreisHtml.innerHTML = "Gesamtsumme: " + gesamtPreis.toFixed(2) + "€";
    ((<HTMLDivElement>_event.currentTarget).parentElement!).remove();
    }
}
bestellungenForm.setAttribute("value", gesamtText);
gesamtPreisHtml.innerHTML = "Gesamtsumme: " + gesamtPreis.toFixed(2) + "€";


document.getElementById("main")?.appendChild(divInhalt);
}