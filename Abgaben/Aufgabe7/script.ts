namespace Aufgabe7 {

    
    localStorage.clear();
    localStorage.setItem("Gesamtsumme", 0 + "€");

    localStorage.setItem("counterbeginn", 0 + "");

    let j: number = parseInt(<string> localStorage.getItem("counterbeginn"));
    const counter: HTMLElement = document.getElementById("counter") as HTMLDivElement;

    if (zähler == 0) {
        counter.innerHTML = "0";
    } else {
        counter.innerHTML = "" + <string> localStorage.getItem("counterbeginn");
    }

    let divinhalt: HTMLElement = document.createElement("div");
    divinhalt.setAttribute("class", "inhalt");
    let kleidungtitel: HTMLElement = document.createElement("h2");
    kleidungtitel.setAttribute("id", "Kleidunglink");
    kleidungtitel.innerHTML = "Kleidung";
    divinhalt.appendChild(kleidungtitel);
    let kleidungdiv: HTMLElement = document.createElement("div");
    kleidungdiv.setAttribute("id", "Kleidung");
    divinhalt.appendChild(kleidungdiv);
    let preis: number = parseInt(localStorage.getItem("Gesamtsumme") + "");

    let equipmentTitel: HTMLElement = document.createElement("h2");
    equipmentTitel.setAttribute("id", "Equipmentlink");
    equipmentTitel.innerHTML = "Equipment";
    divinhalt.appendChild(equipmentTitel);
    let equipmentdiv: HTMLElement = document.createElement("div");
    equipmentdiv.setAttribute("id", "Equipment");
    divinhalt.appendChild(equipmentdiv);

    export function artikelErstellen(): void {
    for (let i: number = 0; i < artikel.length; i++) {
        if (artikel[i].kategorie == "Kleidung") {
        let divElement: HTMLElement = document.createElement("div");
        divElement.setAttribute("class", "artikel");
        kleidungdiv.appendChild(divElement);
        let bildElement: HTMLElement = document.createElement("img");
        bildElement.setAttribute("src", artikel[i].bild);
        divElement.appendChild(bildElement);
        let titelElement: HTMLElement = document.createElement("h3");
        divElement.appendChild(titelElement);
        titelElement.innerHTML = artikel[i].name;
        let beschreibungelement: HTMLElement = document.createElement("p");
        divElement.appendChild(beschreibungelement);
        beschreibungelement.innerHTML = artikel[i].beschreibung;
        let preiselement: HTMLElement = document.createElement("i");
        divElement.appendChild(preiselement);
        preiselement.innerHTML = artikel[i].preis + "€";
        let brelement: HTMLElement = document.createElement("br");
        divElement.appendChild(brelement);
        let brelement2: HTMLElement = document.createElement("br");
        divElement.appendChild(brelement2);
        let buttonElement: HTMLElement = document.createElement("button");
        buttonElement.innerHTML = "Kaufen";
        buttonElement.addEventListener("click", allgemeinbutton);
        divElement.appendChild(buttonElement);
        buttonElement.addEventListener("click", allgemeinpreis);
        
    } else if (artikel[i].kategorie == "Equipment") {
    let divElement: HTMLElement = document.createElement("div");
    divElement.setAttribute("class", "artikel");
    equipmentdiv.appendChild(divElement);
    let bildElement: HTMLElement = document.createElement("img");
    bildElement.setAttribute("src", artikel[i].bild);
    divElement.appendChild(bildElement);
    let titelElement: HTMLElement = document.createElement("h3");
    divElement.appendChild(titelElement);
    titelElement.innerHTML = artikel[i].name;
    let beschreibungelement: HTMLElement = document.createElement("p");
    divElement.appendChild(beschreibungelement);
    beschreibungelement.innerHTML = artikel[i].beschreibung;
    let preiselement: HTMLElement = document.createElement("i");
    divElement.appendChild(preiselement);
    preiselement.innerHTML = artikel[i].preis + "€";
    let brelement: HTMLElement = document.createElement("br");
    divElement.appendChild(brelement);
    let brelement2: HTMLElement = document.createElement("br");
    divElement.appendChild(brelement2);
    let buttonElement: HTMLElement = document.createElement("button");
    buttonElement.innerHTML = "Kaufen";
    buttonElement.addEventListener("click", allgemeinbutton);
    buttonElement.addEventListener("click", allgemeinpreis);
    divElement.appendChild(buttonElement);
    }
        function allgemeinpreis(_event: Event): void {
        if (parseInt(localStorage.getItem("Gesamtsumme") + "") == 0) {
        preis = 0 + artikel[i].preis;
        console.log("Gesamtsumme " + preis + " €");
        localStorage.setItem("Gesamtsumme", preis + "€");
        } else {
            preis = parseInt(<string> localStorage.getItem("Gesamtsumme"));
            localStorage.setItem("Gesamtsumme", preis + artikel[i].preis + "€");
        }
      
        localStorage.setItem("bildString" + j, artikel[i].bild);
        localStorage.setItem("nameString" + j, artikel[i].name);
        localStorage.setItem("beschreibungString" + j, artikel[i].beschreibung);
        localStorage.setItem("preisString" + j, artikel[i].preis + "€");
        j++;
        localStorage.setItem("counterbeginn", j + "");
    }
    }
}
    let counterbeginn: number = 0;
    if (parseInt(<string> localStorage.getItem("counterbeginn")) > 0) {
    counterbeginn = parseInt(<string> localStorage.getItem("counterbeginn"));
    } else {
        counterbeginn = 0;
    }
    export function allgemeinbutton(_event: Event): void {
        counterbeginn++;
        localStorage.setItem("counterbeginn", counterbeginn + "");
        counter.innerHTML = "" + <string> localStorage.getItem("counterbeginn");
     }
    
    document.getElementById("main")?.appendChild(divinhalt);
    
    const kleidungTitel: HTMLElement = document.getElementById("Kleidunglink") as HTMLDivElement;
    document.getElementById("kleidungnavi")?.addEventListener("click", kleidungklick);

//Kleidung anzeigen
    function kleidungklick(_event: Event): void {
document.getElementById("Equipment")!.setAttribute("style", "display: none");
document.getElementById("Equipmentlink")!.setAttribute("style", "display: none");
document.getElementById("Kleidung")!.setAttribute("style", "visibility: visible");
document.getElementById("Kleidunglink")!.setAttribute("style", "visibility: visible");
kleidungTitel.innerHTML = "Kleidung";
}
//Equipment anzeigen
    document.getElementById("equipmentnavi")?.addEventListener("click", equipmentnavi);
    function equipmentnavi(_event: Event): void {
    document.getElementById("Kleidung")!.setAttribute("style", "display: none");
    document.getElementById("Equipmentlink")!.setAttribute("style", "display: none");
    kleidungTitel.innerHTML = "Equipment";
    document.getElementById("Equipment")!.setAttribute("style", "visibility: visible");
    }
    //Auf den Home Button klicken, um alle Artikel anzuzeigen :)
    document.getElementById("home")?.addEventListener("click", homeklick);
    function homeklick(_event: Event): void {
    document.getElementById("Kleidung")!.setAttribute("style", "visibility: visible");
    document.getElementById("Kleidunglink")!.setAttribute("style", "visibility: visible");
    document.getElementById("Equipment")!.setAttribute("style", "visibility: visible");
    document.getElementById("Equipmentlink")!.setAttribute("style", "visibility: visible");
    kleidungTitel.innerHTML = "Kleidung";
    }
}