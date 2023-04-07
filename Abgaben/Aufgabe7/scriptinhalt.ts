namespace Aufgabe7 {
    //Interface erstellen
    export interface Artikel {
        bild: string;
        name: string;
        beschreibung: string;
        preis: number;
        kategorie: string;
    }

    //In array speichern
    export let artikel: Artikel[];
   
    loadArtikel("data.json");

    async function loadArtikel(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let jsonArray: JSON = await response.json();
        artikel = await JSON.parse(JSON.stringify(jsonArray));
        artikelErstellen();
    }
    }

   