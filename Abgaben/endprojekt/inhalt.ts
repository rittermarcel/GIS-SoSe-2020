namespace endprojekt {
    
    export interface Maintext {
        titel: string;
        beschreibung1: string;
        hausgemachtBeschreibung: string;
        taeglichfrischBeschreibung: string;
        umweltschonendBeschreibung: string;
    }
    export interface Eis {
        name: string;
        preis: number;
        kategorie: string;
        kategorie2: string;
        bild: string;
    }

    export let maintext: Maintext[];
    export let eis: Eis[];
   

    loadArtikel("data.json");

    async function loadArtikel(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let jsonArray: JSON = await response.json();
        maintext = await JSON.parse(JSON.stringify(jsonArray));
        eis = await JSON.parse(JSON.stringify(jsonArray));
        Maintextaufrufen();
    }
   
    }
