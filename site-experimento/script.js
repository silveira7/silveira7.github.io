let alvos = [
    "verdadeiro",
    "verdade",
    "conversa",
    "dever",
    "cadáver",
    "amargurado",
    "amargura",
    "amargo",
    "pomar",
    "açúcar",
    "mortadela",
    "mortal",
    "morte",
    "amor",
    "fêmur",
];

let distratores = [
    "amarelo",
    "parede",
    "filosofia",
    "corrida",
    "feijão",
    "camiseta",
    "lápis",
    "ligação",
    "modelo",
    "onça",
    "população",
    "tecnológico",
    "corifeu",
    "acirrado",
    "caixa",
    "diagrama",
    "ginásio",
    "influência",
    "objeto",
    "pinheiro",
    "sinfonia",
    "mecânico",
    "número",
];


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }

    return false;
}


let frases1 = [];
let frases2 = [];
let used1 = [];
let used2 = [];
let distrator1 = "";
let distrator2 = "";

for (let i = 0; i < alvos.length; i++) {
    distrator1 = distratores[getRndInteger(0,22)];
    // console.log(distrator1);
    
    while (containsObject(distrator1, used1)) {
        distrator1 = distratores[getRndInteger(0,22)];
    }

    used1.push(distrator1);

    frase1 = `Digo ${alvos[i]} baixinho. Mas digo ${distrator1} bem alto.`;
    frases1.push(frase1);

    distrator2 = distratores[getRndInteger(0,22)];
    
    while (containsObject(distrator2, used2)) {
        distrator2 = distratores[getRndInteger(0,22)];
    }

    used2.push(distrator2);

    frase2 = `Digo baixinho ${alvos[i]}. Mas digo ${distrator2} bem alto.`;
    frases2.push(frase2);
}

used1 = [];
used2 = [];
distrator1 = "";
distrator2 = "";
let frasesDistratoras = [];

for (let i = 0; i < 23; i++) {
    distrator1 = distratores[getRndInteger(0,22)];
    distrator2 = distratores[getRndInteger(0,22)];

    while (distrator1 == distrator2) {
        distrator1 = distratores[getRndInteger(0,22)];
        distrator2 = distratores[getRndInteger(0,22)];
    }

    frasesDistratoras.push(`Digo baixinho ${distrator1}. Mas digo ${distrator2} bem alto.`);
    
    distrator1 = distratores[getRndInteger(0,22)];
    distrator2 = distratores[getRndInteger(0,22)];

    while (distrator1 == distrator2) {
        distrator1 = distratores[getRndInteger(0,22)];
        distrator2 = distratores[getRndInteger(0,22)];
    }

    frasesDistratoras.push(`Digo ${distrator1} baixinho. Mas digo ${distrator2} bem alto.`);

}

// console.log(frases1.length);
// console.log(frases2.length);
// console.log(frasesDistratoras.length);

let todasFrases = frases1.concat(frases2, frasesDistratoras);

for (let i = todasFrases.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    let k = todasFrases[i];
    todasFrases[i] = todasFrases[j];
    todasFrases[j] = k;
}

console.log(todasFrases);

var i = -1;

function nextSentence () {    
    if (i == 75) {
        i += 1;
        // document.getElementById("index").innerHTML = i;        
        document.getElementById("demo").innerHTML = "FIM";
    }
    else if (i == 76) {
        document.getElementById("demo").innerHTML = "FIM";        
    } else {
        i += 1;
        // document.getElementById("index").innerHTML = i;        
        document.getElementById("demo").innerHTML = todasFrases[i];
    }
}; 

function previousSentence () {    
    if (i == 0) {
        i -= 1;
        // document.getElementById("index").innerHTML = i;        
        document.getElementById("demo").innerHTML = "INÍCIO";
    }
    else if (i == -1) {
        document.getElementById("demo").innerHTML = "INÍCIO";
    } else {
        i -= 1;
        // document.getElementById("index").innerHTML = i;        
        document.getElementById("demo").innerHTML = todasFrases[i];
    }
}; 


window.addEventListener("keydown", event => {
    if (event.key == "l") {
        nextSentence()
    }
});
window.addEventListener("keydown", event => {
    if (event.key == "j") {
        previousSentence()
    }
});

// window.addEventListener("keyup", event => {
//     if (event.key == "v") {
//         document.body.style.background = "";
//     }
// });



// document.getElementById("demo").innerHTML = alvos;

// let teste = "teste";

// let frase = `Digo ${teste} baixinho.`;

// distratores.forEach(myFunction);
// let palavra = "";

// function myFunction(value, index, array) {
// palavra += value;
// frase = `Digo ${palavra} baixinho. Mas digo ${palavra} bem alto.`;
// console.log(frase)    
// }

// document.getElementById("demo").innerHTML = "oi";

// function displayDate() {
//     document.getElementById("demo").innerHTML = "teste";
// }
