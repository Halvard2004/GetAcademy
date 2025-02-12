/* Model  */
let temperatur = 3;
let degreeType = "C";
const ftemperatur = temperaturChange(temperatur, degreeType)

/* View */
UpdateView();
function UpdateView(){
    document.getElementById("app").innerHTML = /*HTML*/ `
    ${ftemperatur}
    `;
}


/* Controller */

function temperaturChange(degree, type) {
    if (type == "C") {
        return /*HTML*/ `${degree * 9/5 + 32}`
    } else if (type == "F")
        return /*HTML*/ `${(temperatur - 32) * 5/9}` 
}
