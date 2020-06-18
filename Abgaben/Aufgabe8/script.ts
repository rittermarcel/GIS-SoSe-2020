namespace Aufgabe8 {
    let formData: FormData;
    let abschicken: HTMLElement = <HTMLButtonElement>document.getElementById("abschicken");
    abschicken.addEventListener("click", abschickenklick);

    async function abschickenklick(): Promise <void> {
        formData = new FormData(document.forms[0]);
        let url: string = "https://gissommersemester2020.herokuapp.com/";
        let urlquery: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + urlquery.toString();

        let antwort: Response = await fetch(url);
        let antworttext: string = await antwort.text();
        console.log(antworttext);
    }
    }