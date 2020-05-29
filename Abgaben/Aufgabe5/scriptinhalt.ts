namespace Aufgabe5 {
    //Interface erstellen
    export interface Artikel {
        bild: string;
        name: string;
        beschreibung: string;
        preis: string;
        
    }

    //Kleidung
    const tshirtrot: Artikel = {bild: "tshirtteuer.png" , name: "T-Shirt Rot", beschreibung: "Hohes Material. Sehr beqeuem.", preis: "15,00€"};
    const tshirtschwarz: Artikel = {bild: "tshirtbillig.png", name: "T-Shirt Schwarzz", beschreibung: "Sehr bequem. Aus Baumwolle", preis: "8,00€"};
    const hosegelb: Artikel = {bild: "hose.png", name: "Hose Gelb", beschreibung: "Sitzt perfekt", preis: "14,00€"};
    const kapperot: Artikel = {bild: "kappe.png", name: "Mütze Rot", beschreibung: "Nie mehr den Kopf verbrennen", preis: "6,00€"};
    const brille: Artikel = {bild: "brille.png", name: "Brille", beschreibung: "Sieht lässig aus", preis: "21,00€"};
    const socken: Artikel = {bild: "socke.png", name: "Socken", beschreibung: "Atmungsaktiv", preis: "3,00€"};
    const bälle: Artikel = {bild: "tennisbälle.png", name: "Bälle", beschreibung: "Nur vom besten", preis: "6,50€"};

    
   //Equipment
    const schläger: Artikel = {bild: "schläger.png", name: "Schläger", beschreibung: "Ohne Schläger geht nix", preis: "78,00€"};
    const schuhe: Artikel = {bild: "schuh.png", name: "Schuhe", beschreibung: "Ultra Geschwindigkeit", preis: "22,00€"};
    const dämpfer: Artikel = {bild: "dämpfer.png", name: "Dämpfer", beschreibung: "Dämpft den Schlag", preis: "1,99€"};
    const bandage: Artikel = {bild: "bandage.png", name: "Bandage", beschreibung: "Schutz für Handgelenke", preis: "5,00€"};
    const tasche: Artikel = {bild: "tasche.png", name: "Tasche", beschreibung: "Sieht professionell aus", preis: "45,00€"};


    //In array speichern
    export let artikelkleidung: Artikel[] = [tshirtrot, tshirtschwarz, hosegelb, kapperot, brille, socken, bälle];
    export let artikelequipment: Artikel[] = [schläger, schuhe, dämpfer, bandage, tasche];
    }
