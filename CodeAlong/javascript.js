        
    document.getElementById("verside_app").innerHTML = /*HTML*/`        
        <button id="Bergen" onclick="Ver('Bergen', 'Regner')">Bergen</button>
        <button id="Lillehammer" onclick="Ver('Lillehammer', 'Snø')">Lillehammer</button>
        <button id="Larvik" onclick="Ver('Larvik', 'Sol')">Larvik</button>
        <button id="Oslo" onclick="Ver('Oslo', 'Skyette')">Oslo</button>
            <div id="Vermelding"></div>
        ` 
    function Ver(By, Ver){
        document.getElementById("Vermelding").innerHTML = /*HTML*/`
        <h1>${By}</h1>
        <h2>${Ver}</h2>`
    }

    // function Bergen(){
    //     document.getElementById("Vermelding").innerHTML = /*HTML*/`
    //     <h1>Bergen</h1>
    //     <h2>Regn</h2>`
    // }


    // function Lillehammer(){
    //     document.getElementById("Vermelding").innerHTML = /*HTML*/`
    //      <h1>Lillehammer</h1>
    //     <h2>Snø</h2>`
    // }

    // function Larvik(){
    //     document.getElementById("Vermelding").innerHTML = /*HTML*/`
    //      <h1>Larvik</h1>
    //     <h2>Sol</h2>`
    // }

    // function Oslo(){
    //     document.getElementById("Vermelding").innerHTML = /*HTML*/`
    //      <h1>Oslo</h1>
    //     <h2>Skyette</h2>`
    // }
