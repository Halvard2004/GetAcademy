/* Model  */
Cards = [{color: "green", name: "Verktøy", functionName: CreateVerktoyHtml(), ShowTekst: false, id: "Verktoy"}, {color: "blue", name: "HTML", functionName: CreateHTMLHtml(), ShowTekst: false, id: "HTML"}, {color: "red", name: "CSS", functionName: CreateCSSHtml(), ShowTekst: false, id: "CSS"}, {color: "yellow", name: "JavaScript", functionName: CreateJavaScriptHtml(), ShowTekst: false, id: "JavaScript"}, {color: "dark", name: "Hode, kropp, og ben", functionName: CreateKroppHtml(), ShowTekst: false, id: "Kropp"}]
buttons = [{functionName: "IngenLayout()", tekst: "Ingen Layout"},{functionName: "VertikalLayout()", tekst: "Vertikal Layout"},{functionName: "HorisontalLayout()", tekst: "Horisontal Layout" }, {functionName: "GridLayout()", tekst: "Grid Layout" }]

/* View */
function updateView(){
    document.getElementById("app").innerHTML = /*HTML*/`
    ${CreateButtonRow()}    

    <h1>Eksempel 1</h1>

   
<div id="AllCards" class=""> 
    ${CreateCardsHtml()}
</div>`;
}

function CreateButtonRow(){
    let html = "";
    for(let button of buttons){
        html += /*HTML*/`
        <button onclick="${button.functionName}">${button.tekst}</button>
        `;
    }
    return html
}

function CreateCardsHtml(){
    let html = "";
    let index = 0;
    for(let card of Cards){
        
        html += /*HTML*/ `
        <div class="card">
        <div class="header ${card.color}" onclick="ShowTekst(${index})">
            <h2>${card.name}</h2>  
            </div>
        <div id="${card.id}">
            
        </div>
        ${card.ShowTekst ? card.functionName :  ""}
    </div>
        `;
    index++;
    }
    return html
}

function ShowTekst(index){
    for(let card of Cards){
        card.ShowTekst = false;
    }
    Cards[index].ShowTekst = true;
    updateView()
}

function CreateVerktoyHtml(){
return /*HTML*/ `      
    <p>De to viktigste verktøyene vi skal bruke er disse:</p>
    <ul>
        <li>Koderedigeringsprogrammet 
            <a href="https://code.visualstudio.com/">Visual Studio Code</a>
        </li>
        <p>Vi skal bruke noen <i>extensions:</i></p>
        <br>
        <ul>
            <li>JavaScript-booster</li>
            <li>es6-string-html</li>
            <li>live-server</li>
            <li>live-share</li>
        </ul>
        <li>Nettleseren 
            <a href="https://www.google.com/intl/no/chrome/">Google Chrome</a>
        </li>
    </ul>`;
}

function CreateHTMLHtml(){
    return /*HTML*/ `
            <p> Vi bruker HTML til å definere et dokument. </p>
            <ul>
                <li>Tagger for grunnleggende oppsett av en HTML-fil</li>
                <li>Tagger for grunnleggende formatering av tekst</li>
                <li><tt>&lt;div&gt;</tt></li>
                <li><tt>&lt;input type="text"&gt;</tt></li>
                <li><tt>&lt;button&gt;</tt></li>
                <li><a href="https://www.w3schools.com/html/default.asp" target="_new">W3Schools HTML Tutorial</a>
                </li>
                <li><a href="https://www.w3schools.com/tags/default.asp" target="_new">W3Schools HTML Reference</a>
                </li>
            </ul>`;  
}


function CreateCSSHtml(){
return /*HTML*/ `    
    Vi bruker CSS til å <i>style</i> et dokument, altså farger, fonter, utseende og lignende.
    <ul>
        <li><tt>background-color</tt></li>
        <li><tt>color</tt></li>
        <li><tt>padding</tt></li>
        <li><tt>margin</tt></li>
        <li><tt>border</tt></li>
        <li><tt>text-align</tt></li>
        <li><tt>font-size</tt></li>
        <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_new">Flexbox</a></li>
        <li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_new">Grid</a></li>
        <li><a href="https://www.w3schools.com/css/default.asp" target="_new">W3Schools CSS Tutorial</a>
        </li>
        <li><a href="https://www.w3schools.com/cssref/default.asp" target="_new">W3Schools CSS Reference</a>
        </li>
    </ul>`; 
}

function CreateJavaScriptHtml(){
return /*HTML*/ `    
    Det viktigste vi skal lære er programmeringsspråket JavaScript. Vi skal lære grunnleggende programmering
    ved
    å manipulere HTML- og CSS-kode på en nettside ved hjelp av JavaScript.
    <ul>
        <li>Det finnes en W3Schools JavaScript Tutorial, men her anbefaler vi heller å følge kurset vårt på
            Moodle.</li>
        <li><a href="https://www.w3schools.com/jsref/default.asp" target="_new">W3Schools JavaScript
                Reference</a></li>

    </ul>`;
}

function CreateKroppHtml(){
return /*HTML*/`   
    <div id="head" class="bodyPart">
        <button onclick="Headm()">◀</button>
            <img src="Bilde/head1.png" id="Heads">
            <button onclick="Headp()">▶</button>
        </div>
        <div id="body" class="bodyPart">
            <button onclick="Bodym()">◀</button>
            <img src="Bilde/body1.png" id="Bodys">
            <button onclick="Bodyp()">▶</button>
        </div>
        <div id="legs" class="bodyPart">
            <button onclick="Legsm()">◀</button>
            <img src="Bilde/legs1.png" id="Leg">
            <button onclick="Legsp()">▶</button>
        </div>`;
}


/* Controller */

// const head = ["Bilde/head1.png", "Bilde/head2.png", "Bilde/head3.png", "Bilde/head4.png"];
// const body = ["Bilde/body1.png", "Bilde/body2.png", "Bilde/body3.png", "Bilde/body4.png"];
// const legs = ["Bilde/legs1.png", "Bilde/legs2.png", "Bilde/legs3.png" ,"Bilde/legs4.png"];

// let headIndex = 0;
// let bodyIndex = 0;
// let legsIndex = 0;


// function Headm(){
//     // document.getElementById("Heads").value = "Bilde/head2.png";
//     let headnow = document.getElementById("Heads")
//     headIndex = headIndex - 1
//     if (headIndex < 0)
//         headIndex = 3
//     headnow.src = head[headIndex]
//     // document.getElementById("Heads").innerHTML = head.findIndex(headnow) 
// }

// function Headp(){

//     let headnow = document.getElementById("Heads")
//     headIndex = headIndex + 1
//     if (headIndex > 3)
//         headIndex = 0
//     headnow.src = head[headIndex]
// }


// function Bodym(){
//     // document.getElementById("Heads").value = "Bilde/head2.png";
//     let headnow = document.getElementById("Bodys")
//     bodyIndex = bodyIndex - 1
//     if (bodyIndex < 0)
//         bodyIndex = 3
//     headnow.src = body[bodyIndex]
//     // document.getElementById("Heads").innerHTML = head.findIndex(headnow) 
// }

// function Bodyp(){

//     let headnow = document.getElementById("Bodys")
//     bodyIndex = bodyIndex + 1
//     if (bodyIndex > 3)
//         bodyIndex = 0
//     headnow.src = body[bodyIndex]
// }


// function Legsm(){
//     // document.getElementById("Heads").value = "Bilde/head2.png";
//     let headnow = document.getElementById("Leg")
//     legsIndex = legsIndex - 1
//     if (legsIndex < 0)
//         legsIndex = 3
//     headnow.src = legs[legsIndex]
//     // document.getElementById("Heads").innerHTML = head.findIndex(headnow) 
// }

// function Legsp(){

//     let headnow = document.getElementById("Leg")
//     legsIndex = legsIndex + 1
//     if (legsIndex > 3)
//         legsIndex = 0
//     headnow.src = legs[legsIndex]
// }

// function IngenLayout(){
//     RemoveGrid()
//     RemoveStyle()
// }

// function VertikalLayout(){
//     RemoveGrid()
//     RemoveStyle()
//     document.getElementById("AllCards").style.display = 'flex';
//     document.getElementById("AllCards").style.flexDirection = 'column';
// }

// function HorisontalLayout(){
//     RemoveGrid()
//     RemoveStyle()
//     document.getElementById("AllCards").style.display = "flex";
// }

// function GridLayout(){
//     RemoveStyle()
//     document.getElementById("AllCards").classList.add("grid");
// }

// function RemoveGrid(){
//     document.getElementById("AllCards").classList = [];
// }

// function RemoveStyle(){
//     document.getElementById("AllCards").style = "";
// }