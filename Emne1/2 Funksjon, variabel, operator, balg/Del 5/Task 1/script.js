/* Model  */
let amount = 0;
let clickPower = 1;
let clickMultiplier = 1.00;
let sealPoints = clickPower * clickMultiplier;
let priceupgrade1 = 10
let priceupgrade2 = 50
let priceupgrade3 = 200
let priceupgrade4 = 500
let priceupgrade5 = 1000
let Upgrades = [true, true, true, true]
let oneTimeUpgradesStore = "";


/* View */
showApp()
function showApp(){
    updatesealPoints()
    document.getElementById("app").innerHTML = /*HTML*/ `
    <h1>${amount.toFixed(2)}</h1>
    <img src="img/babyseal.png" onclick=sealClick()>
    <button onclick=upgradeClickadd1()>Upgrade +1</button>
    <button onclick=upgradeClickadd2()>Upgrade +2</button>
    <button onclick=upgradeClickadd3()>Upgrade +3</button>
    <button onclick=upgradeClickadd4()>Upgrade +4</button>
    <button onclick=upgradeClickadd5()>Upgrade +5</button>

    ${oneTimeUpgradesStore}
    `;
}


/* Controller */
function sealClick(){
    amount += sealPoints;
    showApp();
}




function upgradeClickadd1(){
    if (amount >= priceupgrade1){
    clickPower += 0.1;
    amount -= priceupgrade1;
    priceupgrade1 = priceupgrade1 * 1.1;
    } 
    showApp();
    oneTimeUpgrades();
}

function upgradeClickadd2(){
    if (amount >= priceupgrade2){
    clickPower += 0.2;
    amount -= priceupgrade2;
    priceupgrade2 = priceupgrade2 * 1.1;
    } 
    showApp();
}

function upgradeClickadd3(){
    if (amount >= priceupgrade3){
    clickPower += 0.5;
    amount -= priceupgrade3;
    priceupgrade3 = priceupgrade3 * 1.1;
    } 
    showApp();
}

function upgradeClickadd4(){
    if (amount >= priceupgrade4){
    clickPower += 1;
    amount -= priceupgrade4;
    priceupgrade4 = priceupgrade4 * 1.1;
    } 
    showApp();
}

function upgradeClickadd5(){
    if (amount >= priceupgrade5){
    clickPower += 5;
    amount -= priceupgrade5;
    priceupgrade5 = priceupgrade5 * 1.1;
    } 
    showApp();
}


function oneTimeUpgrades(){
    if (Upgrades[0]) { Upgrade1();}
    else if (Upgrades[1]) { Upgrade2();}
    else if (Upgrades[2]) { Upgrade3();}
    else if (Upgrades[3]) { Upgrade4();}
}


function Upgrade1() {
    if (clickPower > 1.5) {
        if (Upgrades[0]) {
            oneTimeUpgradesStore += "<button onclick=BuyUpgrade1()>Price: 100 and gives a 15 ClickPower</button>";
            Upgrades[0] = false;
        }
    }
}
function Upgrade2() {
    if (clickPower > 5.0) {
        if (Upgrades[1]) {
            oneTimeUpgradesStore += "<button onclick=BuyUpgrade2()>Price: 1000 and gives a 150 ClickPower</button>";
            Upgrades[1] = false;
        }
    }
}
function Upgrade3() {
    if (clickPower > 15) {
        if (Upgrades[2]) {
            oneTimeUpgradesStore += "<button onclick=BuyUpgrade3()>Price: 4500 and gives a 500 ClickPower</button>";
            Upgrades[2] = false;
        }
    }
}
function Upgrade4() {
    if (clickPower > 50) {
        if (Upgrades[3]) {
            oneTimeUpgradesStore += "<button onclick=BuyUpgrade4()>Price: 20000 and gives a 3000 ClickPower</button>";
            Upgrades[3] = false;
        }
    }
}

function BuyUpgrade1(){
    if (amount >= 100){
        clickPower += 15;
        amount -= 100;

    }
}

function BuyUpgrade2(){
    if (amount >= 1000){
        clickPower += 150;
        amount -= 1000;

    }
}

function BuyUpgrade3(){
    if (amount >= 4500){
        clickPower += 500;
        amount -= 4500;

    }
}

function BuyUpgrade4(){
    if (amount >= 20000){
        clickPower += 3000;
        amount -= 20000;

    }
}

function updatesealPoints(){
    sealPoints = clickPower * clickMultiplier;
}