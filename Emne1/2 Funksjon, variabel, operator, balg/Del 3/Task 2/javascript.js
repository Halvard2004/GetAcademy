ShowHTML()

function ShowHTML() {
    document.getElementById("app").innerHTML = /*HTML*/ `
    ${CreateHtml("checkbox", "vehicle1", "Bike")}
    ${CreateHtml("checkbox", "vehicle2", "Car")}
    ${CreateHtml("checkbox", "vehicle3", "Boat")}
    `
}



function CreateHtml(types, names, transportation) {
    return /*HTML*/ `
        <input type="${types}" id="${names}" name="${names}" value="${transportation}">
        <label for="${names}"> I have a ${transportation}</label><br/>
`
}
