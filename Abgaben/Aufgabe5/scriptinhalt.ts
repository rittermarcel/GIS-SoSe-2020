namespace Aufgabe5 {
    //Interface erstellen
    export interface Artikel {
        bild: string;
        name: string;
        beschreibung: string;
        preis: string;
        
    }

    //Kleidung
    const tshirtrot:    Artikel =  { name: "T-Shirt Rot",         beschreibung: "Hohes Material. Sehr beqeuem.",              preis: "15,00€", bild: "tshirtteuer.png" };
    const tshirtschwarz:    Artikel =  { name: "t-Shirtschwarz",   beschreibung: "Sehr bequem. Aus Baumwolle",                preis: "8,00€", bild: "tshirtbillig.png" };
    const hosegelb:   Artikel =  { name: "Hose gelb",  beschreibung: "Sitzt perfekt",                            preis: "14,00€", bild: "hose.png" };
    const kapperot:        Artikel =  { name: "Mütze Rot",       beschreibung: "Nie mehr den Kopf verbrennen", preis: "6,00€", bild: "kappe.png" };
    const brille:   Artikel =  { name: "Brille",  beschreibung: "Sieht lässig aus",                                     preis: "21,00€", bild: "brille.png" };
    const socken:      Artikel =  { name: "Socken",     beschreibung: "Atmungsaktiv",                 preis: "3,00€", bild: "socke.png" };
    const bälle:       Artikel =  { name: "Bälle",      beschreibung: "Nur vom besten",                                          preis: "6,50€", bild: "tennisbälle.png" };

    
   //Equipment
    const schläger:      Artikel =  { name: "Schläger",      beschreibung: "Ohne Schläger geht nix",                        preis: "78,00€",    bild: "schläger.png" };
    const schuhe:         Artikel =  { name: "Schuhe",         beschreibung: "Ultra Geschwindigkeit",                                              preis: "22,00€",     bild: "schuh.png" };
    const dämpfer:        Artikel =  { name: "Dämpfer",         beschreibung: "Dämpft den Schlag",                         preis: "1,99€",     bild: "dämpfer.png" };
    const bandage:     Artikel =  { name: "Bandage",     beschreibung: "Schutz für Handgelenke",   preis: "5,00€",    bild: "bandage.png" };
    const tasche:        Artikel =  { name: "Tasche",        beschreibung: "Sieht professionell aus",                                   preis: "45,00€",     bild: "tasche.png" };


    //In array speichern
    export let artikelkleidung: Artikel[] = [tshirtrot, tshirtschwarz, hosegelb, kapperot, brille, socken, bälle];
    export let artikelequipment: Artikel[] = [schläger, schuhe, dämpfer, bandage, tasche];
    }
