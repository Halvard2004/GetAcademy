/* Model  */
let temperatur = 3;
const ftemperatur = FToCtemperatur(temperatur)

/* View */
UpdateView();
function UpdateView(){
    document.getElementById("app").innerHTML = /*HTML*/ `
    ${ftemperatur}
    `;
}


/* Controller */
function FToCtemperatur(temperatur){
    return /*HTML*/ `${(temperatur - 32) * 5/9}`
}