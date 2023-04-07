namespace Aufgabe9 {
    let buttonhtml: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonhtml");
    buttonhtml.addEventListener("click", buttonclickhtml);

    let buttonjson: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonjson");
    buttonjson.addEventListener("click", buttonclickjson);


    async function buttonclickhtml(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
       // let url: string = "http://localhost:8100";
        let url: string = "https://gissommersemester2020.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/html" + "?" + query.toString();
        let response: Response = await fetch(url);
        let responseString: string = await response.text();
        let serverResponse: HTMLElement = <HTMLElement> document.getElementById("serverantwort");        
        serverResponse.innerHTML = responseString;

    }


    async function buttonclickjson(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        
        //let url: string = "http://localhost:8100";
        let url: string = "https://gissommersemester2020.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/json" + "?" + query.toString();
        //BUGS gefixt
        let response: Response = await fetch(url);
        let responseString: string = await response.json();
        console.log(responseString);
      
    }

}