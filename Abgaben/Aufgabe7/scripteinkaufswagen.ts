namespace Aufgabe7 {

    let divinhalt: HTMLElement = document.createElement("div");
    divinhalt.setAttribute("class", "inhalt");
    
    const gesamtSumme: HTMLElement = document.getElementById("Gesamtsumme") as HTMLDivElement;
    gesamtSumme.innerHTML = "Gesamtsumme: " + localStorage.getItem("Gesamtsumme") + "";
    document.getElementById("allesentfernen")?.addEventListener("click", allesentfernen);

    export let zähler: number = parseInt(<string> localStorage.getItem("counterbeginn"));

    let kleidungdiv: HTMLElement = document.createElement("div");
    kleidungdiv.setAttribute("id", "Kleidung");
    divinhalt.appendChild(kleidungdiv);

    for (let i: number = 0; i < zähler; i++) {
        let divElement: HTMLElement = document.createElement("div");
        divElement.setAttribute("class", "artikel");
        kleidungdiv.appendChild(divElement);
        let bildElement: HTMLElement = document.createElement("img");
        bildElement.setAttribute("src", <string> localStorage.getItem("bildString" + i));
        divElement.appendChild(bildElement);
        let titelElement: HTMLElement = document.createElement("h3");
        divElement.appendChild(titelElement);
        titelElement.innerHTML = <string> localStorage.getItem("nameString" + i);
        let beschreibungelement: HTMLElement = document.createElement("p");
        divElement.appendChild(beschreibungelement);
        beschreibungelement.innerHTML = <string> localStorage.getItem("beschreibungString" + i);
        let preiselement: HTMLElement = document.createElement("i");
        divElement.appendChild(preiselement);
        preiselement.innerHTML = <string> localStorage.getItem("preisString" + i);
        let brelement: HTMLElement = document.createElement("br");
        divElement.appendChild(brelement);
        let brelement2: HTMLElement = document.createElement("br");
        divElement.appendChild(brelement2);
        let buttonElement: HTMLElement = document.createElement("button");
        buttonElement.innerHTML = "Entfernen";
        divElement.appendChild(buttonElement);
        buttonElement.addEventListener("click", entfernen);

        function entfernen(_event: Event): void {
            let gesamtsumme: number = parseInt(localStorage.getItem("Gesamtsumme") + "");
            let gelöschteSumme: number = parseInt(<string> localStorage.getItem("preisString" + i));
            let neu: number = gesamtsumme - gelöschteSumme;
            localStorage.setItem("Gesamtsumme", neu + "€");
            gesamtSumme.innerHTML = "Gesamtsumme: " + neu + " €";

            ((<HTMLDivElement>_event.currentTarget).parentElement!).remove();
            
        }
    }

   
    function allesentfernen(_event: Event): void {  
        localStorage.clear();
        divinhalt.removeChild(kleidungdiv);
        localStorage.setItem("Gesamtsumme", 0 + "€");
        gesamtSumme.innerHTML = "Gesamtsumme: " + localStorage.getItem("Gesamtsumme") + "";
        localStorage.setItem("counterbeginn", 0 + "");

    }

    document.getElementById("warenkorbmain")?.appendChild(divinhalt);
    console.log(localStorage);
}