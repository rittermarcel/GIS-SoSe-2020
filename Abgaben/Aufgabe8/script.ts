namespace Aufgabe8 {
    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
    button.addEventListener("click", buttonclick);

    async function buttonclick(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissommersemester2020.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        await fetch(url);
        for (let entry of query) {
            console.log(entry);
            console.log("name: " + entry[0] + " Wert:" + entry[1]);
        }
    }
}