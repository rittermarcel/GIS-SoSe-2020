namespace endprojekt {
    export function Maintextaufrufen(): void {
        let j: number = 1;
        let text: string = "";
        let preis: number = 0;
        let klickCounterWaffel: number = 0;
        let klickCounterEis: number = 0;
        let klickCounterEisKugel: number = 0;
        let klickCounterStreußel: number = 0;
        let zählerBestellungen: number = 0;
        let counterHtml: HTMLElement = <HTMLElement>document.getElementById("counter");
        let preisHtml: HTMLElement = <HTMLElement>document.getElementById("preis");
        let streußelBestellung: HTMLElement = <HTMLElement>document.getElementById("streußelSorteBestellt");
        let eisBestellung: HTMLElement = <HTMLElement>document.getElementById("eisSorteBestellt");
        let waffelBestellung: HTMLElement = <HTMLElement>document.getElementById("waffelSorteBestellt");
        let eisGenerator:HTMLDivElement = <HTMLDivElement> document.getElementById("eis-generator");

        let startLink: HTMLElement = <HTMLElement>document.getElementById("eis-erstellen-link");
      
        startLink.addEventListener("click", startKlick);
        localStorage.setItem("zählerbestellungen", 0 + "");
        klickCounterEis = 0;
        
        function startKlick(_event: Event): void {
            window.location.href = "#eis-erstellen-titel";
        }
        

        let beschreibungHtml: HTMLElement = <HTMLElement>document.getElementById("beschreibung");
        beschreibungHtml.innerHTML = maintext[0].beschreibung1;

        let titelHtml: HTMLElement = <HTMLElement>document.getElementById("titel");
        titelHtml.innerHTML = maintext[0].titel;

        let hausgemachtHtml: HTMLElement = <HTMLElement>document.getElementById("hausgemachtBeschreibung");
        hausgemachtHtml.innerHTML = maintext[0].hausgemachtBeschreibung;

        let taeglichFrischHtml: HTMLElement = <HTMLElement>document.getElementById("taeglichFrischBeschreibung");
        taeglichFrischHtml.innerHTML = maintext[0].taeglichfrischBeschreibung;

        let umweltschonendHtml: HTMLElement = <HTMLElement>document.getElementById("umweltschonendBeschreibung");
        umweltschonendHtml.innerHTML = maintext[0].umweltschonendBeschreibung;


        let rechnungHTML: HTMLElement = <HTMLElement>document.getElementById("rechnung");

        // let bestellungBild: HTMLElement = document.createElement("img");
        // bestellungBild.setAttribute("src", "Bilder/notizblock.png");
        // bestellungBild.setAttribute("id", "notizblock");
        // rechnungHTML.appendChild(bestellungBild);

        

        let eisBildHTML: HTMLElement = <HTMLElement>document.getElementById("eis-bild");


       

        let waffelTitel: HTMLElement = document.createElement("p");
        waffelTitel.setAttribute("id", "waffelTitel");
        waffelTitel.innerHTML = "Wähle deine Waffelsorte aus:";
        eisBildHTML.appendChild(waffelTitel);

        let eisTitel: HTMLElement = document.createElement("p");
        eisTitel.setAttribute("id", "eisTitel");
        eisTitel.innerHTML = "Wähle deine Eissorte aus:";
        eisBildHTML.appendChild(eisTitel);

        let streußelTitel: HTMLElement = document.createElement("p");
        streußelTitel.setAttribute("id", "streußelTitel");
        streußelTitel.innerHTML = "Wähle deine Streußelsorte aus:";
        eisBildHTML.appendChild(streußelTitel);

        let info: HTMLElement = document.createElement("p");
        info.setAttribute("id", "info");
        info.innerHTML = "Schicke dein Eis in den Warenkorb oder lösche deine Bestellung<br><br>";
        eisBildHTML.appendChild(info);

        let flexBoxWarenkorb: HTMLDivElement = document.createElement("div");
        flexBoxWarenkorb.setAttribute("class", "artikel-auswahl")
        let neuesEis: HTMLElement = document.createElement("INPUT");
        neuesEis.setAttribute("class", "artikel-button-auswahl");
        neuesEis.setAttribute("type", "button");
        neuesEis.setAttribute("name", "neuesEis");
        // neuesEis.setAttribute("value", "neuesEis");
        neuesEis.setAttribute("id", "neuesEis");
        let label: HTMLElement = document.createElement("label");
        label.setAttribute("for", "neuesEis");
        label.innerHTML = "In den Warenkorb";
        neuesEis.addEventListener("click", neuesEisKlick);
        flexBoxWarenkorb.appendChild(neuesEis);
        flexBoxWarenkorb.appendChild(label);
        info.appendChild(flexBoxWarenkorb);


        let flexloeschen: HTMLDivElement = document.createElement("div");
        flexloeschen.setAttribute("class", "artikel-auswahl")
        let löschen: HTMLElement = document.createElement("INPUT");
        löschen.setAttribute("class", "artikel-button-auswahl-loeschen");
        löschen.setAttribute("type", "button");
        let labelLöschen: HTMLElement = document.createElement("label");
        labelLöschen.innerHTML = "Bestellung löschen<br>";
        löschen.addEventListener("click", löschenKlick);
        flexloeschen.appendChild(löschen);
        flexloeschen.appendChild(labelLöschen);
        info.appendChild(flexloeschen)

        function löschenKlick(_event: Event): void {
            streußelBestellung.innerHTML = "<b>Streußelsorte:</b>";
            eisBestellung.innerHTML = "<b>Eissorte:</b>";
            waffelBestellung.innerHTML = "<b>Waffelsorte:</b>";
            localStorage.clear();
            j = 0;
            text = "";
            preis = 0;
            klickCounterWaffel = 0;
            klickCounterStreußel = 0;
            klickCounterEisKugel = 0;
          
            for (let i: number = 0; i < 7; i++) {
                document.getElementById("kugel")?.remove(); 
                document.getElementById("streußel")?.remove(); 
                document.getElementById("test")?.remove(); 
                }
         
            preisHtml.innerHTML = "<b>Preis: </b>" + preis + "€";
        
        }

        function neuesEisKlick(_event: Event): void {
            
            for (let i: number = 0; i < 7; i++) {
            document.getElementById("kugel")?.remove(); 
            document.getElementById("streußel")?.remove(); 
            document.getElementById("test")?.remove(); 
            }
            zählerBestellungen ++;
            localStorage.setItem("Eissortebestellung" + zählerBestellungen, waffelBestellung.textContent + " <br><br>" + eisBestellung.textContent + " <br><br>" + streußelBestellung.textContent + " <br><br><br><b>" + "Preis: " + preis.toFixed(2) + "€ </b>");
            
            localStorage.setItem("zählerbestellungen", zählerBestellungen + "");
            
            
            counterHtml.innerHTML = zählerBestellungen + "";
            j = 0;
            text = "";
            
            klickCounterWaffel = 0;
            klickCounterStreußel = 0;
            klickCounterEisKugel = 0;
            
            streußelBestellung.innerHTML = "<b>Streußelsorte:</b>";
            eisBestellung.innerHTML = "<b>Eissorte:</b>";
            waffelBestellung.innerHTML = "<b>Waffelsorte:</b>";
            localStorage.setItem("gesamtpreis" + zählerBestellungen, preis + "");
            preis = 0;

            preisHtml.innerHTML = "<b>Preis: </b>" + preis + "€";
            console.log(localStorage);
            
            klickCounterEis++;
        }


        for (let i: number = 0; i < eis.length; i++) {
        if (eis [i].kategorie == "waffel" ) {
        let klasse: HTMLElement = document.createElement("div");
        klasse.setAttribute("class", "artikel");
        waffelTitel.appendChild(klasse);



        let element: HTMLElement = document.createElement("INPUT");
        element.setAttribute("type", "button");
        element.setAttribute("class", "artikel-button");
        //element.setAttribute("value", eis[i].name);
        element.setAttribute("id", eis[i].name);
        element.addEventListener("click", waffelKlick);
        let label: HTMLElement = document.createElement("label");
        label.setAttribute("class", "label");
        label.setAttribute("for", eis[i].name);
        label.innerHTML = eis[i].name;
        let anzeigeBild: HTMLElement = document.createElement("img");
        anzeigeBild.setAttribute("src", eis[i].bild);
        anzeigeBild.setAttribute("id", "anzeigeBild");
        
        klasse.appendChild(anzeigeBild);
        klasse.appendChild(element);
        klasse.appendChild(label);
    }
       else if (eis[i].kategorie == "eis") {
        let klasse: HTMLElement = document.createElement("div");
        klasse.setAttribute("class", "artikel");
        eisTitel.appendChild(klasse);



        let element: HTMLElement = document.createElement("INPUT");
        element.setAttribute("type", "button");
        element.setAttribute("class", "artikel-button");
        // element.setAttribute("value", eis[i].name);
        element.addEventListener("click", eisKlick);
       
        let label: HTMLElement = document.createElement("label");
        label.setAttribute("for", eis[i].name);
        label.innerHTML = eis[i].name;
        let anzeigeBild: HTMLElement = document.createElement("img");
        anzeigeBild.setAttribute("src", eis[i].bild);
        anzeigeBild.setAttribute("id", "anzeigeBild");
       
        klasse.appendChild(anzeigeBild);
        klasse.appendChild(element);
        klasse.appendChild(label);
    }
    else if (eis[i].kategorie == "streußel") {
        let klasse: HTMLElement = document.createElement("div");
        klasse.setAttribute("class", "artikel");
        streußelTitel.appendChild(klasse);

        let element: HTMLElement = document.createElement("INPUT");
        element.setAttribute("name", "streußel");
        element.setAttribute("class", "artikel-button");
        element.setAttribute("type", "button");
       // element.setAttribute("value", eis[i].name);
        element.setAttribute("id", eis[i].name);
        element.addEventListener("click", streußelKlick);
        let label: HTMLElement = document.createElement("label");
        label.setAttribute("for", eis[i].name);
        label.innerHTML = eis[i].name;
        let anzeigeBild: HTMLElement = document.createElement("img");
        anzeigeBild.setAttribute("src", eis[i].bild);
        anzeigeBild.setAttribute("id", "anzeigeBild");
        klasse.appendChild(anzeigeBild);
        klasse.appendChild(element);
        klasse.appendChild(label);

    }
        function waffelKlick(_event: Event): void {


        if (klickCounterWaffel < 1) {
        let klasse: HTMLElement = document.createElement("div");
        klasse.setAttribute("id", "test");
        eisGenerator.appendChild(klasse);

        let bild: HTMLElement = document.createElement("img");
        bild.setAttribute("src", eis[i].bild);
        bild.setAttribute("id", eis[i].kategorie2);
        localStorage.setItem("waffelsorte", eis[i].name);
        klasse.appendChild(bild);
        preis = preis + eis[i].preis;

        waffelBestellung.innerHTML = "<b>Waffelsorte:</b><br> 1X " + eis[i].name;

        klickCounterWaffel++;
        } else if (klickCounterWaffel > 1) {
        
        //document.getElementById("test")?.remove(); 

        preis = preis - eis[i].preis;
            
        }
        preisHtml.innerHTML = "<b>Preis: </b>" + preis + "€";

        }

      
        function eisKlick(_event: Event): void {
            if (klickCounterWaffel > 0 && klickCounterStreußel < 1) {
            let bild: HTMLElement = document.createElement("img");
            bild.setAttribute("src", eis[i].bild);
            bild.setAttribute("id", "kugel");
            bild.setAttribute("div", "");
            localStorage.setItem("eissorte" + j, eis[i].name);

            
            if ( j > 4 ) {
                console.log("Maximale Anzahl an Kugeln erreicht");
                let maximaleAnzahl: HTMLElement = <HTMLElement>document.getElementById("maximale-kugelanzahl-message");
                maximaleAnzahl.innerHTML = "Maximale Anzahl <br> an Kugeln erreicht!";
                // eisBildHTML.appendChild(maximaleAnzahl);
                } else {
            
                    eisGenerator.appendChild(bild);
      
            text = text + "<br>1X " + eis[i].name;
            eisBestellung.innerHTML = "<b>Eissorte:</b> " + text;
            preis = preis + eis[i].preis;
            
            preisHtml.innerHTML = "<b>Preis: </b>" + preis + "€";
            console.log(preis + " €");
            j++;
            console.log(text);
        }
            klickCounterEis++;
            klickCounterEisKugel++;
}
 else {
    console.log("Zuerst Waffel auswählen!");
} 
}    
function streußelKlick(_event: Event): void {
    if (klickCounterEisKugel > 0) {
    let klasse: HTMLElement = document.createElement("div");
    klasse.setAttribute("id", "test");
    eisGenerator.appendChild(klasse);
    if (klickCounterStreußel < 1) {
    let bild: HTMLElement = document.createElement("img");
    bild.setAttribute("src", eis[i].bild);
    bild.setAttribute("id", "streußel");
    bild.setAttribute("div", "");
    klasse.appendChild(bild);
    
    localStorage.setItem("streußelsorte", eis[i].name);
    streußelBestellung.innerHTML = "<b>Streußelsorte:</b><br> 1X " + eis[i].name;
    preis = preis + eis[i].preis;
    klickCounterStreußel++;
    } else if (klickCounterStreußel > 1) {
        preis = preis - eis[i].preis;
       
    }
    preisHtml.innerHTML = "<b>Preis: </b>" + preis + "€";
    
    } else {
    console.log("zuerst Eiskugel auswählen");
    }
}       
}   
        // document.getElementById("main")?.appendChild(divInhalt);
    }
    }
