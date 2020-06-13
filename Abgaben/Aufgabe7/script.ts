namespace Aufgabe7 {
    
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

    //Ja ich weis immer noch 2 for Schleifen. Aber ich bekomm es einfach nicht hin, dass der entsprechende Titel jeweils über den Bildern ist.
    for (let i: number = 0; i < artikelkleidung.length; i++) {
        let divElement: HTMLElement = document.createElement("div");
        divElement.setAttribute("class", "artikel");
        kleidungdiv.appendChild(divElement);
        let bildElement: HTMLElement = document.createElement("img");
        bildElement.setAttribute("src", JSON.parse(myJSONkleidung)[i].bild);
        divElement.appendChild(bildElement);
        let titelElement: HTMLElement = document.createElement("h3");
        divElement.appendChild(titelElement);
        titelElement.innerHTML = JSON.parse(myJSONkleidung)[i].name;
        let beschreibungelement: HTMLElement = document.createElement("p");
        divElement.appendChild(beschreibungelement);
        beschreibungelement.innerHTML = JSON.parse(myJSONkleidung)[i].beschreibung;
        let preiselement: HTMLElement = document.createElement("i");
        divElement.appendChild(preiselement);
        preiselement.innerHTML = JSON.parse(myJSONkleidung)[i].preis + "€";
        let brelement: HTMLElement = document.createElement("br");
        divElement.appendChild(brelement);
        let brelement2: HTMLElement = document.createElement("br");
        divElement.appendChild(brelement2);
        let buttonElement: HTMLElement = document.createElement("button");
        buttonElement.innerHTML = "Kaufen";
        buttonElement.addEventListener("click", allgemeinbutton);
        divElement.appendChild(buttonElement);
        buttonElement.addEventListener("click", kleidungpreis);
        function kleidungpreis(_event: Event): void {


          preis = preis + artikelkleidung[i].preis;
          console.log("Gesamtsumme: " + preis + " €");
          localStorage.setItem("Gesamtsumme", preis + "€");

          localStorage.setItem("bildString" + j, JSON.parse(myJSONkleidung)[i].bild);
          localStorage.setItem("nameString" + j, JSON.parse(myJSONkleidung)[i].name);
          localStorage.setItem("beschreibungString" + j, JSON.parse(myJSONkleidung)[i].beschreibung);
          localStorage.setItem("preisString" + j, JSON.parse(myJSONkleidung)[i].preis + "€");
          j++;
          localStorage.setItem("counterbeginn", j + "");
             }
    }
    let equipmentTitel: HTMLElement = document.createElement("h2");
    equipmentTitel.setAttribute("id", "Equipmentlink");
    equipmentTitel.innerHTML = "Equipment";
    divinhalt.appendChild(equipmentTitel);
    let equipmentdiv: HTMLElement = document.createElement("div");
    equipmentdiv.setAttribute("id", "Equipment");
    divinhalt.appendChild(equipmentdiv);
    for (let i: number = 0; i < artikelequipment.length; i++) {
        let divElement: HTMLElement = document.createElement("div");
        divElement.setAttribute("class", "artikel");
        equipmentdiv.appendChild(divElement);
        let bildElement: HTMLElement = document.createElement("img");
        bildElement.setAttribute("src", JSON.parse(myJSONequipment)[i].bild);
        divElement.appendChild(bildElement);
        let titelElement: HTMLElement = document.createElement("h3");
        divElement.appendChild(titelElement);
        titelElement.innerHTML = JSON.parse(myJSONequipment)[i].name;
        let beschreibungelement: HTMLElement = document.createElement("p");
        divElement.appendChild(beschreibungelement);
        beschreibungelement.innerHTML = JSON.parse(myJSONequipment)[i].beschreibung;
        let preiselement: HTMLElement = document.createElement("i");
        divElement.appendChild(preiselement);
        preiselement.innerHTML = JSON.parse(myJSONequipment)[i].preis + "€";
        let brelement: HTMLElement = document.createElement("br");
        divElement.appendChild(brelement);
        let brelement2: HTMLElement = document.createElement("br");
        divElement.appendChild(brelement2);
        let buttonElement: HTMLElement = document.createElement("button");
        buttonElement.innerHTML = "Kaufen";
        buttonElement.addEventListener("click", allgemeinbutton);
        buttonElement.addEventListener("click", equipmentpreis);
        divElement.appendChild(buttonElement);
        function equipmentpreis(_event: Event): void {
        if (parseInt(localStorage.getItem("Gesamtsumme") + "") == 0) {
        preis = 0 + artikelequipment[i].preis;
        console.log("Gesamtsumme " + preis + " €");
        localStorage.setItem("Gesamtsumme", preis + "€");
        } else {
        localStorage.setItem("Gesamtsumme", preis + artikelequipment[i].preis + "€");
        }

        localStorage.setItem("bildString" + j, JSON.parse(myJSONequipment)[i].bild);
        localStorage.setItem("nameString" + j, JSON.parse(myJSONequipment)[i].name);
        localStorage.setItem("beschreibungString" + j, JSON.parse(myJSONequipment)[i].beschreibung);
        localStorage.setItem("preisString" + j, JSON.parse(myJSONequipment)[i].preis + "€");
        j++;
        localStorage.setItem("counterbeginn", j + "");
    
    }
    }
    let counterbeginn: number = 0;
    if (parseInt(<string> localStorage.getItem("counterbeginn")) > 0) {
    counterbeginn = parseInt(<string> localStorage.getItem("counterbeginn"));
    } else {
        counterbeginn = 0;
    }

    
   // localStorage.setItem("counterbeginn", counterbeginn + "");
    
   
  
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