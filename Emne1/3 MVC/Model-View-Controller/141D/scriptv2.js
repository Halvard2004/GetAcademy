/* Model  */
let Name;
let Mail;
let Names = [];
let Mails = [];
let nameAndMails = [];
let editing = false;

/* View */
updateView();
function updateView(){
    document.getElementById("app").innerHTML = /*HTML*/ `
    Navn: <input oninput="Name = this.value" value="${editing ? Name : ""}"> </br>
    Email: <input oninput="Mail = this.value" value="${editing ? Mail : ""}"> </br>
    <button onclick="createSubmitHtml()">registrer</button>
    </br></br></br>
    ${nameAndMails ? writeNameAndMailList() : ""}
    `;
}


/* Controller */
function createSubmitHtml(){
    editing = false;
    Names.push(Name)
    Mails.push(Mail)
    Name = null;
    Mail = null;
    updateView();
}

function writeNameAndMailList(){
    let text = "";
    for(let name in Names){
        text += /*HTML*/ `
        <h2>${Names[name]}</h2>
        <h2>${Mail[name]}</h2>
        <button onclick="editHTML(${name})">Edit</button>
        <br/>
        `;
    }
    return text
}

function editHTML(ArrayPart){
 editing = true;

 nameAndMails.splice(ArrayPart, 1)
 updateView();
}