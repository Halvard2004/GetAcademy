/* Model  */
let Varenavn = "Tastatur";
let Varepris = 129;
let Antall = 3;
let Tekst = Utregn(Varenavn, Varepris, Antall);

/* View */
UpdateView();
function UpdateView(){
    document.getElementById("app").innerHTML = /*HTML*/ `
    ${Tekst}
    `;
}

/* Controller */
function Utregn(Navn, Pris, Antall){
    return /*HTML*/ `
    ${Antall} stk. ${Navn} a ${Pris}kr = ${Antall * Pris}kr`
}