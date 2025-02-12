/* Model  */
let temperatur = 3;
const ftemperatur = CToFtemperatur(temperatur)

/* View */
UpdateView();
function UpdateView(){
    document.getElementById("app").innerHTML = /*HTML*/ `
    ${ftemperatur}
    `;
}


/* Controller */
function CToFtemperatur(degree){
    return /*HTML*/ `${degree * 9/5 + 32}`
}