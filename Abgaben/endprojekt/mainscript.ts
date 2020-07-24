namespace endprojekt {
    export function Maintextaufrufen(): void {
        let j: number = 1;
        let text: string = "";
        let preis: number = 0;
        
       
        let klickcounterwaffel: number = 0;
        let klickcountereis: number = 0;
        let klickcounterstreußel: number = 0;
        let zählerbestellungen: number = 0;
        let counterhtml: HTMLElement = <HTMLElement>document.getElementById("counter");
        let preishtml: HTMLElement = <HTMLElement>document.getElementById("preis");
        let streußelbestellung: HTMLElement = <HTMLElement>document.getElementById("streußelsortebestellt");
        let eisbestellung: HTMLElement = <HTMLElement>document.getElementById("eissortebestellt");
        let waffellbestellung: HTMLElement = <HTMLElement>document.getElementById("waffelsortebestellt");
        let startlink: HTMLElement = <HTMLElement>document.getElementById("startlink");
      
        startlink.addEventListener("click", startklick);
        localStorage.setItem("zählerbestellungen", 0 + "");
        
        function startklick(_event: Event): void {
            window.location.href = "#eiserstellentitel";
        }
        

        let beschreibunghtml: HTMLElement = <HTMLElement>document.getElementById("beschreibung");
        beschreibunghtml.innerHTML = maintext[0].beschreibung1;

        let titelhtml: HTMLElement = <HTMLElement>document.getElementById("titel");
        titelhtml.innerHTML = maintext[0].titel;

        let hausgemachthtml: HTMLElement = <HTMLElement>document.getElementById("hausgemachtbeschreibung");
        hausgemachthtml.innerHTML = maintext[0].hausgemachtbeschreibung;

        let taeglichfrischhtml: HTMLElement = <HTMLElement>document.getElementById("taeglichfrischbeschreibung");
        taeglichfrischhtml.innerHTML = maintext[0].taeglichfrischbeschreibung;

        let umweltschonendhtml: HTMLElement = <HTMLElement>document.getElementById("umweltschonendbeschreibung");
        umweltschonendhtml.innerHTML = maintext[0].umweltschonendbeschreibung;


        let divinhalt: HTMLElement = document.createElement("div");
        divinhalt.setAttribute("class", "inhalt");

        let bestellungbild: HTMLElement = document.createElement("img");
        bestellungbild.setAttribute("src", "Bilder/notizblock.png");
        bestellungbild.setAttribute("id", "notizblock");
        divinhalt.appendChild(bestellungbild);

        

        let divElement: HTMLElement = document.createElement("div");
        divElement.setAttribute("class", "eisgenerieren");
        divinhalt.appendChild(divElement);

        let eisbild: HTMLElement = document.getElementById("eisbild") as HTMLDivElement;
        divinhalt.appendChild(eisbild);

       

        let waffeltitel: HTMLElement = document.createElement("p");
        waffeltitel.setAttribute("id", "waffeltitel");
        waffeltitel.innerHTML = "Wähle deine Waffelsorte aus:";
        divElement.appendChild(waffeltitel);

        let eistitel: HTMLElement = document.createElement("p");
        eistitel.setAttribute("id", "eistitel");
        eistitel.innerHTML = "Wähle deine Eissorte aus:";
        divElement.appendChild(eistitel);

        let streußeltitel: HTMLElement = document.createElement("p");
        streußeltitel.setAttribute("id", "streußeltitel");
        streußeltitel.innerHTML = "Wähle deine Streußelsorte aus:";
        divElement.appendChild(streußeltitel);

        let info: HTMLElement = document.createElement("p");
        info.setAttribute("id", "info");
        info.innerHTML = "Schicke dein Eis in den Warenkorb oder lösche deine Bestellung<br><br><br>";
        divElement.appendChild(info);

        let neueseis: HTMLElement = document.createElement("Button");
        neueseis.setAttribute("name", "neueseis");
        neueseis.setAttribute("value", "neueseis");
        neueseis.setAttribute("id", "neueseis");
        let label: HTMLElement = document.createElement("label");
        label.setAttribute("for", "neueseis");
        label.innerHTML = "In den Warenkorb" + "<br><br>";
        neueseis.addEventListener("click", neueseisklick);
        info.appendChild(neueseis);
        info.appendChild(label);

        
        let löschen: HTMLElement = document.createElement("Button");
        let labellöschen: HTMLElement = document.createElement("label");
        labellöschen.innerHTML = "Bestellung löschen<br>";
        löschen.addEventListener("click", löschenklick);
        info.appendChild(löschen);
        info.appendChild(labellöschen);



       
        function löschenklick(_event: Event): void {
            streußelbestellung.innerHTML = "<b>Streußelsorte:</b>";
            eisbestellung.innerHTML = "<b>Eissorte:</b>";
            waffellbestellung.innerHTML = "<b>Waffelsorte:</b>";
            //localStorage.clear();
            j = 0;
            text = "";
            preis = 0;
            klickcounterwaffel = 0;
            klickcounterstreußel = 0;
          
            for (let i: number = 0; i < 7; i++) {
                document.getElementById("schokokugel")?.remove(); 
                document.getElementById("streußel")?.remove(); 
                document.getElementById("test")?.remove(); 
                }
         
            preishtml.innerHTML = "<b>Preis: </b>" + preis + "€";
        
        }

        function neueseisklick(_event: Event): void {
            
            for (let i: number = 0; i < 7; i++) {
            document.getElementById("schokokugel")?.remove(); 
            document.getElementById("streußel")?.remove(); 
            document.getElementById("test")?.remove(); 
            }
            zählerbestellungen ++;
            localStorage.setItem("Eissortebestellung" + zählerbestellungen, waffellbestellung.textContent + " <br>" + eisbestellung.textContent + " <br>" + streußelbestellung.textContent + " <br>" + "Preis: " + preis.toFixed(2) + "€ ");
            
            localStorage.setItem("zählerbestellungen", zählerbestellungen + "");
            
            
            counterhtml.innerHTML = zählerbestellungen + "";
            j = 0;
            text = "";
            
            klickcounterwaffel = 0;
            klickcounterstreußel = 0;
            streußelbestellung.innerHTML = "<b>Streußelsorte:</b>";
            eisbestellung.innerHTML = "<b>Eissorte:</b>";
            waffellbestellung.innerHTML = "<b>Waffelsorte:</b>";
            localStorage.setItem("gesamtpreis" + zählerbestellungen, preis + "");
            preis = 0;

            preishtml.innerHTML = "<b>Preis: </b>" + preis + "€";
            console.log(localStorage);
            
            klickcountereis++;
        }


        for (let i: number = 0; i < eis.length; i++) {
        if (eis [i].kategorie == "waffel" ) {
        let klasse: HTMLElement = document.createElement("div");
        klasse.setAttribute("class", "waffelartikel");
        waffeltitel.appendChild(klasse);



        let element: HTMLElement = document.createElement("INPUT");
        element.setAttribute("name", "waffel");
        element.setAttribute("type", "button");
        //element.setAttribute("value", eis[i].name);
        element.setAttribute("id", eis[i].name);
        element.addEventListener("click", waffelklick);
        let label: HTMLElement = document.createElement("label");
        label.setAttribute("for", eis[i].name);
        label.innerHTML = eis[i].name + "<br>" + "<br>";
        let anzeigebild: HTMLElement = document.createElement("img");
        anzeigebild.setAttribute("src", eis[i].bild);
        anzeigebild.setAttribute("id", "anzeigebild");
        klasse.appendChild(anzeigebild);
        klasse.appendChild(element);
        klasse.appendChild(label);
    }
       else if (eis[i].kategorie == "eis") {
        let klasse: HTMLElement = document.createElement("div");
        klasse.setAttribute("class", "eisartikel");
        eistitel.appendChild(klasse);



        let element: HTMLElement = document.createElement("Button");
        element.setAttribute("value", eis[i].name);
        element.addEventListener("click", eisklick);
       
        let label: HTMLElement = document.createElement("label");
        label.setAttribute("for", eis[i].name);
        label.innerHTML = eis[i].name + "<br>" + "<br>";
        let anzeigebild: HTMLElement = document.createElement("img");
        anzeigebild.setAttribute("src", eis[i].bild);
        anzeigebild.setAttribute("id", "anzeigebild");
        klasse.appendChild(anzeigebild);
        klasse.appendChild(element);
        klasse.appendChild(label);
    }
    else if (eis[i].kategorie == "streußel") {
        let klasse: HTMLElement = document.createElement("div");
        klasse.setAttribute("class", "streußelartikel");
        streußeltitel.appendChild(klasse);

        let element: HTMLElement = document.createElement("INPUT");
        element.setAttribute("name", "streußel");
        element.setAttribute("type", "button");
       // element.setAttribute("value", eis[i].name);
        element.setAttribute("id", eis[i].name);
        element.addEventListener("click", streußelklick);
        let label: HTMLElement = document.createElement("label");
        label.setAttribute("for", eis[i].name);
        label.innerHTML = eis[i].name + "<br>" + "<br>";
        let anzeigebild: HTMLElement = document.createElement("img");
        anzeigebild.setAttribute("src", eis[i].bild);
        anzeigebild.setAttribute("id", "anzeigebild");
        klasse.appendChild(anzeigebild);
        klasse.appendChild(element);
        klasse.appendChild(label);

    }
       



        function waffelklick(_event: Event): void {

        if (klickcounterwaffel < 1) {
        let klasse: HTMLElement = document.createElement("div");
        klasse.setAttribute("id", "test");
        eisbild.appendChild(klasse);

        let bild: HTMLElement = document.createElement("img");
        
        
       

        
        bild.setAttribute("src", eis[i].bild);
        bild.setAttribute("id", eis[i].kategorie2);
        localStorage.setItem("waffelsorte", eis[i].name);
        klasse.appendChild(bild);
      
       


        preis = preis + eis[i].preis;
        
        
       
        waffellbestellung.innerHTML = "<b>Waffelsorte:</b> 1X" + eis[i].name;
        
        
        klickcounterwaffel++;
        } else if (klickcounterwaffel > 1) {
        
        //document.getElementById("test")?.remove(); 
       
           
        preis = preis - eis[i].preis;
            
        }
        preishtml.innerHTML = "<b>Preis: </b>" + preis + "€";

        }


        function streußelklick(_event: Event): void {
        if (klickcountereis > 0) {
        let klasse: HTMLElement = document.createElement("div");
        klasse.setAttribute("id", "test");
        eisbild.appendChild(klasse);
        if (klickcounterstreußel < 1) {
        let bild: HTMLElement = document.createElement("img");
        bild.setAttribute("src", eis[i].bild);
        bild.setAttribute("id", "streußel");
        bild.setAttribute("div", "");
        klasse.appendChild(bild);
        
        localStorage.setItem("streußelsorte", eis[i].name);
        streußelbestellung.innerHTML = "<b>Streußelsorte:</b> 1X" + eis[i].name;
        preis = preis + eis[i].preis;
        klickcounterstreußel++;
        } else if (klickcounterstreußel > 1) {
            preis = preis - eis[i].preis;
           
        }
        preishtml.innerHTML = "<b>Preis: </b>" + preis + "€";
        
   

        } else {
        console.log("zuerst Eiskugel auswählen");
        }
    }
        function eisklick(_event: Event): void {
            if (klickcounterwaffel > 0 && klickcounterstreußel < 1) {
            let bild: HTMLElement = document.createElement("img");
            bild.setAttribute("src", eis[i].bild);
            bild.setAttribute("id", "schokokugel");
            bild.setAttribute("div", "");
            localStorage.setItem("eissorte" + j, eis[i].name);
            
            if ( j > 6 ) {
                console.log("Maximale Anzahl an Kugeln erreicht");
                let maximaleanzahl: HTMLElement = <HTMLElement>document.getElementById("maximaleanzahl");
                maximaleanzahl.innerHTML = "Maximale Anzahl <br> an Kugeln erreicht!";
                divElement.appendChild(maximaleanzahl);
                } else {
            
            eisbild.appendChild(bild);
                        
                    
           
                    
            text = text + "1X" + eis[i].name + ", ";
            eisbestellung.innerHTML = "<b>Eissorte:</b> " + text;
            preis = preis + eis[i].preis;
            
            preishtml.innerHTML = "<b>Preis: </b>" + preis + "€";
            console.log(preis + " €");


            

            j++;
            console.log(text);
        }
            klickcountereis++;
            
}
 else {
    console.log("Zuerst Waffel auswählen!");
} 
}     
        
}
       


        document.getElementById("main")?.appendChild(divinhalt);
    }

    

    }
