namespace endprojekt {
    export function Maintextaufrufen(): void {
        let j: number = 1;
        let text: string = "";
        let preis: number = 0;
        
       
        let klickCounterWaffel: number = 0;
        let klickCounterEis: number = 0;
        let klickCounterStreußel: number = 0;
        let zählerBestellungen: number = 0;
        let counterHtml: HTMLElement = <HTMLElement>document.getElementById("counter");
        let preisHtml: HTMLElement = <HTMLElement>document.getElementById("preis");
        let streußelBestellung: HTMLElement = <HTMLElement>document.getElementById("streußelSorteBestellt");
        let eisBestellung: HTMLElement = <HTMLElement>document.getElementById("eisSorteBestellt");
        let waffelBestellung: HTMLElement = <HTMLElement>document.getElementById("waffelSorteBestellt");
        let startLink: HTMLElement = <HTMLElement>document.getElementById("startlink");
      
        startLink.addEventListener("click", startKlick);
        localStorage.setItem("zählerbestellungen", 0 + "");
        
        function startKlick(_event: Event): void {
            window.location.href = "#eisErstellenTitel";
        }
        

        let beschreibungHtml: HTMLElement = <HTMLElement>document.getElementById("beschreibung");
        beschreibungHtml.innerHTML = maintext[0].beschreibung1;

        let titelHtml: HTMLElement = <HTMLElement>document.getElementById("titel");
        titelHtml.innerHTML = maintext[0].titel;

        let hausgemachtHtml: HTMLElement = <HTMLElement>document.getElementById("hausgemachtBeschreibung");
        hausgemachtHtml.innerHTML = maintext[0].hausgemachtbeschreibung;

        let taeglichFrischHtml: HTMLElement = <HTMLElement>document.getElementById("taeglichFrischBeschreibung");
        taeglichFrischHtml.innerHTML = maintext[0].taeglichfrischbeschreibung;

        let umweltschonendHtml: HTMLElement = <HTMLElement>document.getElementById("umweltschonendBeschreibung");
        umweltschonendHtml.innerHTML = maintext[0].umweltschonendbeschreibung;


        let divInhalt: HTMLElement = document.createElement("div");
        divInhalt.setAttribute("class", "inhalt");

        let bestellungBild: HTMLElement = document.createElement("img");
        bestellungBild.setAttribute("src", "Bilder/notizblock.png");
        bestellungBild.setAttribute("id", "notizblock");
        divInhalt.appendChild(bestellungBild);

        

        let divElement: HTMLElement = document.createElement("div");
        divElement.setAttribute("class", "eisGenerieren");
        divInhalt.appendChild(divElement);

        let eisBild: HTMLElement = document.getElementById("eisBild") as HTMLDivElement;
        divInhalt.appendChild(eisBild);

       

        let waffelTitel: HTMLElement = document.createElement("p");
        waffelTitel.setAttribute("id", "waffelTitel");
        waffelTitel.innerHTML = "Wähle deine Waffelsorte aus:";
        divElement.appendChild(waffelTitel);

        let eisTitel: HTMLElement = document.createElement("p");
        eisTitel.setAttribute("id", "eisTitel");
        eisTitel.innerHTML = "Wähle deine Eissorte aus:";
        divElement.appendChild(eisTitel);

        let streußelTitel: HTMLElement = document.createElement("p");
        streußelTitel.setAttribute("id", "streußelTitel");
        streußelTitel.innerHTML = "Wähle deine Streußelsorte aus:";
        divElement.appendChild(streußelTitel);

        let info: HTMLElement = document.createElement("p");
        info.setAttribute("id", "info");
        info.innerHTML = "Schicke dein Eis in den Warenkorb oder lösche deine Bestellung<br><br><br>";
        divElement.appendChild(info);

        let neuesEis: HTMLElement = document.createElement("Button");
        neuesEis.setAttribute("name", "neuesEis");
        neuesEis.setAttribute("value", "neuesEis");
        neuesEis.setAttribute("id", "neuesEis");
        let label: HTMLElement = document.createElement("label");
        label.setAttribute("for", "neuesEis");
        label.innerHTML = "In den Warenkorb" + "<br><br>";
        neuesEis.addEventListener("click", neuesEisKlick);
        info.appendChild(neuesEis);
        info.appendChild(label);

        
        let löschen: HTMLElement = document.createElement("Button");
        let labelLöschen: HTMLElement = document.createElement("label");
        labelLöschen.innerHTML = "Bestellung löschen<br>";
        löschen.addEventListener("click", löschenKlick);
        info.appendChild(löschen);
        info.appendChild(labelLöschen);



       
        function löschenKlick(_event: Event): void {
            streußelBestellung.innerHTML = "<b>Streußelsorte:</b>";
            eisBestellung.innerHTML = "<b>Eissorte:</b>";
            waffelBestellung.innerHTML = "<b>Waffelsorte:</b>";
            //localStorage.clear();
            j = 0;
            text = "";
            preis = 0;
            klickCounterWaffel = 0;
            klickCounterStreußel = 0;
          
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
            localStorage.setItem("Eissortebestellung" + zählerBestellungen, waffelBestellung.textContent + " <br>" + eisBestellung.textContent + " <br>" + streußelBestellung.textContent + " <br>" + "Preis: " + preis.toFixed(2) + "€ ");
            
            localStorage.setItem("zählerbestellungen", zählerBestellungen + "");
            
            
            counterHtml.innerHTML = zählerBestellungen + "";
            j = 0;
            text = "";
            
            klickCounterWaffel = 0;
            klickCounterStreußel = 0;
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
        klasse.setAttribute("class", "waffelArtikel");
        waffelTitel.appendChild(klasse);



        let element: HTMLElement = document.createElement("INPUT");
        element.setAttribute("name", "waffel");
        element.setAttribute("type", "button");
        //element.setAttribute("value", eis[i].name);
        element.setAttribute("id", eis[i].name);
        element.addEventListener("click", waffelKlick);
        let label: HTMLElement = document.createElement("label");
        label.setAttribute("for", eis[i].name);
        label.innerHTML = eis[i].name + "<br>" + "<br>";
        let anzeigeBild: HTMLElement = document.createElement("img");
        anzeigeBild.setAttribute("src", eis[i].bild);
        anzeigeBild.setAttribute("id", "anzeigeBild");
        klasse.appendChild(anzeigeBild);
        klasse.appendChild(element);
        klasse.appendChild(label);
    }
       else if (eis[i].kategorie == "eis") {
        let klasse: HTMLElement = document.createElement("div");
        klasse.setAttribute("class", "eisArtikel");
        eisTitel.appendChild(klasse);



        let element: HTMLElement = document.createElement("Button");
        element.setAttribute("value", eis[i].name);
        element.addEventListener("click", eisKlick);
       
        let label: HTMLElement = document.createElement("label");
        label.setAttribute("for", eis[i].name);
        label.innerHTML = eis[i].name + "<br>" + "<br>";
        let anzeigeBild: HTMLElement = document.createElement("img");
        anzeigeBild.setAttribute("src", eis[i].bild);
        anzeigeBild.setAttribute("id", "anzeigeBild");
        klasse.appendChild(anzeigeBild);
        klasse.appendChild(element);
        klasse.appendChild(label);
    }
    else if (eis[i].kategorie == "streußel") {
        let klasse: HTMLElement = document.createElement("div");
        klasse.setAttribute("class", "streußelArtikel");
        streußelTitel.appendChild(klasse);

        let element: HTMLElement = document.createElement("INPUT");
        element.setAttribute("name", "streußel");
        element.setAttribute("type", "button");
       // element.setAttribute("value", eis[i].name);
        element.setAttribute("id", eis[i].name);
        element.addEventListener("click", streußelKlick);
        let label: HTMLElement = document.createElement("label");
        label.setAttribute("for", eis[i].name);
        label.innerHTML = eis[i].name + "<br>" + "<br>";
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
        eisBild.appendChild(klasse);

        let bild: HTMLElement = document.createElement("img");
        
        
       

        
        bild.setAttribute("src", eis[i].bild);
        bild.setAttribute("id", eis[i].kategorie2);
        localStorage.setItem("waffelsorte", eis[i].name);
        klasse.appendChild(bild);
      
       


        preis = preis + eis[i].preis;
        
        
       
        waffelBestellung.innerHTML = "<b>Waffelsorte:</b> 1X" + eis[i].name;
        
        
        klickCounterWaffel++;
        } else if (klickCounterWaffel > 1) {
        
        //document.getElementById("test")?.remove(); 
       
           
        preis = preis - eis[i].preis;
            
        }
        preisHtml.innerHTML = "<b>Preis: </b>" + preis + "€";

        }


        function streußelKlick(_event: Event): void {
        if (klickCounterEis > 0) {
        let klasse: HTMLElement = document.createElement("div");
        klasse.setAttribute("id", "test");
        eisBild.appendChild(klasse);
        if (klickCounterStreußel < 1) {
        let bild: HTMLElement = document.createElement("img");
        bild.setAttribute("src", eis[i].bild);
        bild.setAttribute("id", "streußel");
        bild.setAttribute("div", "");
        klasse.appendChild(bild);
        
        localStorage.setItem("streußelsorte", eis[i].name);
        streußelBestellung.innerHTML = "<b>Streußelsorte:</b> 1X" + eis[i].name;
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
        function eisKlick(_event: Event): void {
            if (klickCounterWaffel > 0 && klickCounterStreußel < 1) {
            let bild: HTMLElement = document.createElement("img");
            bild.setAttribute("src", eis[i].bild);
            bild.setAttribute("id", "kugel");
            bild.setAttribute("div", "");
            localStorage.setItem("eissorte" + j, eis[i].name);
            
            if ( j > 6 ) {
                console.log("Maximale Anzahl an Kugeln erreicht");
                let maximaleAnzahl: HTMLElement = <HTMLElement>document.getElementById("maximaleAnzahl");
                maximaleAnzahl.innerHTML = "Maximale Anzahl <br> an Kugeln erreicht!";
                divElement.appendChild(maximaleAnzahl);
                } else {
            
            eisBild.appendChild(bild);
                        
                    
           
                    
            text = text + "1X" + eis[i].name + ", ";
            eisBestellung.innerHTML = "<b>Eissorte:</b> " + text;
            preis = preis + eis[i].preis;
            
            preisHtml.innerHTML = "<b>Preis: </b>" + preis + "€";
            console.log(preis + " €");


            

            j++;
            console.log(text);
        }
            klickCounterEis++;
            
}
 else {
    console.log("Zuerst Waffel auswählen!");
} 
}     
        
}
       


        document.getElementById("main")?.appendChild(divInhalt);
    }

    

    }
