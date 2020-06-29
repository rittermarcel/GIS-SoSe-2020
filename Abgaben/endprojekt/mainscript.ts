namespace endprojekt {
    export function Maintextaufrufen(): void {
        let beschreibunghtml: HTMLElement = <HTMLElement>document.getElementById("beschreibung");
        beschreibunghtml.innerHTML = maintext[0].beschreibung1;

        let titelhtml: HTMLElement = <HTMLElement>document.getElementById("titel");
        titelhtml.innerHTML = maintext[0].titel;

        let hausgemachthtml: HTMLElement = <HTMLElement>document.getElementById("hausgemachtbeschreibung");
        hausgemachthtml.innerHTML = maintext[0].hausgemachtbeschreibung;

        let taeglichfrischhtml: HTMLElement = <HTMLElement>document.getElementById("taeglichfrischbeschreibung");
        taeglichfrischhtml.innerHTML = maintext[0].taeglichfrischbeschreibung;

        let umweltschonendhtml: HTMLElement = <HTMLElement>document.getElementById("umweltschonendbeschreibung");
        umweltschonendhtml.innerHTML = maintext[0].umweltschonendbeschreibung;
    }
    


    }
