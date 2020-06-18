namespace Aufgabe8 {
    let formData: FormData;
    let abschicken: HTMLElement = <HTMLButtonElement>document.getElementById("abschicken");
    abschicken.addEventListener("click", abschickenklick);

    async function addToURL(): Promise<string> {
        formData = new FormData(document.forms[0]);
        let url: string = "https://gissommersemester2020.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        return url;
    }

    async function abschickenklick(): Promise<void> {
        getResponse(await addToURL());
    }

    async function getResponse(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url, { method: "get" });
        let resp2: string = await response.text();
        console.log(resp2);
}
}