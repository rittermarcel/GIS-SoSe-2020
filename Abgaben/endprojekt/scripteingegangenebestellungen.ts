namespace endprojekt {
   

    let buttonholen: HTMLButtonElement = <HTMLButtonElement>document.getElementById("einsehen");
    buttonholen.addEventListener("click", buttonclickholen);

    let htmltext: HTMLElement = <HTMLElement>document.getElementById("text");

    async function buttonclickholen(): Promise<void> {
      
       
        //let url: string = "https://gissommersemester2020.herokuapp.com";
        
        let url: string = "http://localhost:8100";
        url = url + "/holen";
        
        let response: Response = await fetch(url);
        let responseString: string = await response.text();
        htmltext.innerHTML = responseString;
        console.log("holen");
        
    }
}