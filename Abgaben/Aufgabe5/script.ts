namespace Aufgabe5 {
    
    let divinhalt: HTMLElement = document.createElement("div");
    divinhalt.setAttribute("class", "inhalt");
    
    
    let kleidungtitel: HTMLElement = document.createElement("h2");
    kleidungtitel.setAttribute("id", "Kleidunglink");
    kleidungtitel.innerHTML = "Kleidung";
    divinhalt.appendChild(kleidungtitel);

    let kleidungdiv: HTMLElement = document.createElement("div");
    kleidungdiv.setAttribute("class", "Kleidung");
    divinhalt.appendChild(kleidungdiv);


    for (let i: number = 0; i < artikelkleidung.length; i++) {

        let divElement: HTMLElement = document.createElement("div");
        divElement.setAttribute("class", "artikel");
        kleidungdiv.appendChild(divElement);

        let bildElement: HTMLElement = document.createElement("img");
        bildElement.setAttribute("src", artikelkleidung[i].bild);
        divElement.appendChild(bildElement);

        let titelElement: HTMLElement = document.createElement("h3");
        divElement.appendChild(titelElement);
        titelElement.innerHTML = artikelkleidung[i].name;

        let beschreibungelement: HTMLElement = document.createElement("p");
        divElement.appendChild(beschreibungelement);
        beschreibungelement.innerHTML = artikelkleidung[i].beschreibung;

        let preiselement: HTMLElement = document.createElement("i");
        divElement.appendChild(preiselement);
        preiselement.innerHTML = artikelkleidung[i].preis;

        let brelement: HTMLElement = document.createElement("br");
        divElement.appendChild(brelement);

        let brelement2: HTMLElement = document.createElement("br");
        divElement.appendChild(brelement2);

        let buttonElement: HTMLElement = document.createElement("button");
        buttonElement.innerHTML = "Kaufen";
        divElement.appendChild(buttonElement);
    }

    let equipmentTitel: HTMLElement = document.createElement("h2");
    equipmentTitel.setAttribute("id", "Equipmentlink");
    equipmentTitel.innerHTML = "Equipment";
    divinhalt.appendChild(equipmentTitel);
    let equipmentdiv: HTMLElement = document.createElement("div");
    equipmentdiv.setAttribute("class", "Equipment");
    divinhalt.appendChild(equipmentdiv);


    
    for (let i: number = 0; i < artikelequipment.length; i++) {

        let divElement: HTMLElement = document.createElement("div");
        divElement.setAttribute("class", "artikel");
        equipmentdiv.appendChild(divElement);

        let bildElement: HTMLElement = document.createElement("img");
        bildElement.setAttribute("src", artikelequipment[i].bild);
        divElement.appendChild(bildElement);

        let titelElement: HTMLElement = document.createElement("h3");
        divElement.appendChild(titelElement);
        titelElement.innerHTML = artikelequipment[i].name;

        let beschreibungelement: HTMLElement = document.createElement("p");
        divElement.appendChild(beschreibungelement);
        beschreibungelement.innerHTML = artikelequipment[i].beschreibung;

        let preiselement: HTMLElement = document.createElement("i");
        divElement.appendChild(preiselement);
        preiselement.innerHTML = artikelequipment[i].preis;

        
        let brelement: HTMLElement = document.createElement("br");
        divElement.appendChild(brelement);

        let brelement2: HTMLElement = document.createElement("br");
        divElement.appendChild(brelement2);

        let buttonElement: HTMLElement = document.createElement("button");
        buttonElement.innerHTML = "Kaufen";
        divElement.appendChild(buttonElement);
    }

    document.getElementById("main")?.appendChild(divinhalt);
}