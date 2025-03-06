/* Model  */
let Name;
let Mail;
let nameAndMail = "";
let editing = false;

/* View */
updateView();
function updateView(){
    document.getElementById("app").innerHTML = /*HTML*/ `
    Navn: <input oninput="Name = this.value" value="${editing ? Name : ""}"> </br>
    Email: <input oninput="Mail = this.value" value="${editing ? Mail : ""}"> </br>
    <button onclick="createSubmitHtml()">registrer</button>
    </br></br></br>
    ${nameAndMail ? nameAndMail : ""}
    `;
}


/* Controller */
function createSubmitHtml(){
    editing = false;
    nameAndMail = /*HTML*/`
    ${Name}
    ${Mail}
    <button onclick="editHTML()">Edit</button>
    `;
    updateView();
}

function editHTML(){
 editing = true;
 nameAndMail = "";
 updateView();
}





// /* Model  */
// let Name;
// let Mail;
// let nameAndMails = [];
// let editing = false;

// /* View */
// updateView();
// function updateView(){
//     document.getElementById("app").innerHTML = /*HTML*/ `
//     Navn: <input oninput="Name = this.value" value="${editing ? Name : ""}"> </br>
//     Email: <input oninput="Mail = this.value" value="${editing ? Mail : ""}"> </br>
//     <button onclick="createSubmitHtml()">registrer</button>
//     </br></br></br>
//     ${nameAndMails ? writeNameAndMailList() : ""}
//     `;
// }


// /* Controller */
// function createSubmitHtml(){
//     editing = false;
//     nameAndMails.push = /*HTML*/`
//     ${Name}
//     ${Mail}
//     <button onclick="editHTML()">Edit</button>
//     `;
//     updateView();
// }

// function writeNameAndMailList(){
//     let text;
//     for(let nameAndMail of nameAndMails){
//         text += /*HTML*/ `
//         ${nameAndMail}
//         `;
//     }
//     return text
// }

// function editHTML(){
//  editing = true;
//  updateView();
// }