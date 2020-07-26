namespace endprojekt {
   

    let buttonholen: HTMLButtonElement = <HTMLButtonElement>document.getElementById("einsehen");
    buttonholen.addEventListener("click", buttonclickholen);

    let statusWechsel: HTMLButtonElement = <HTMLButtonElement>document.getElementById("statusWechsel");
    statusWechsel.addEventListener("click", statusWechselKlick);

    let buttonlöschen: HTMLButtonElement = <HTMLButtonElement>document.getElementById("löschen");
    buttonlöschen.addEventListener("click", buttonclicklöschen);

    let htmltext: HTMLElement = <HTMLElement>document.getElementById("text");
    
    
   
    async function buttonclickholen(): Promise<void> {
        let url: string = "https://gissommersemester2020.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url = url + "/holen";
        
        let response: Response = await fetch(url);
        let responseString: string = await response.text();
        htmltext.innerHTML = responseString;
        console.log("holen");
        
    }
    async function statusWechselKlick(): Promise<void> {
        let url: string = "https://gissommersemester2020.herokuapp.com";
        //let url: string = "http://localhost:8100";
       
        url = url + "/statuswechsel";
        
        await fetch(url);
         
     }






    async function buttonclicklöschen(): Promise<void> {
        let url: string = "https://gissommersemester2020.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url = url + "/clear";
        
        await fetch(url);

    }

}