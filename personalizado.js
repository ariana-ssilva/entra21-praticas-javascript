// 1 - Crie uma variável para cada tipo existente com let ou var
// string
// Number
// boolean
// array
// object json
// function

// variáveis globais
var nome = "Ariana";
var Number = 1;
var true_false = true;
var estados = ["Santa Catarina", "Paraná", "Rio Grande do Sul"];

{
    nome = "Ariana"
    Number = 1
    true_false = false
    estados = ["Santa Catarina", "Paraná", "Rio Grande do Sul"]
}

function oi() { // function
    console.warn("Oi mundo")
}

oi();

// 2 - Exiba em log o valor de cada variável e o tipo da variável com typeof(variável)

function exibirTipoVar() {
    console.warn("Exibindo o tipo das variáveis com typeOf")
    console.log(typeof nome);

    console.log(typeof Number);

    console.log(typeof true_false);

    console.log(typeof estados);

    console.log(typeof oi);
}

exibirTipoVar();

// // 3 - Para cada variável faça um IF que tome uma decisão e também no ELSE

function condicionaisString() {
    console.warn("IF com STRING")
    if (nome == true_false) {
        console.log("Reveja seus conceitos")
    } else {
        console.log("Ué")
    }
}

condicionaisString();

function condicionaisArray() {
    console.warn(" if com array e numeric");
    if (estados.length > Number) {
        console.warn(" A lista de estados possui mais que dois indices", estados)
    } else {
        console.warn("Que mixuruco", estados)
    }
}

condicionaisArray();

// 4 - Para uma variável string e Number, faça um switch que tome uma decisão
function switchString() {
    console.warn("Switch com String")
    switch (nome) {
        case 'Ariana':
            console.log('É a Ariana');
            break;
        case 'Bruna':
            console.log('Essa não é a Ariana');
            break;
        case 'Cecilia':
            console.log('Também não é a Ariana');
            break;
        default:
            console.log(`Não é a Ariana, eu já falei`);
    }
}

switchString();

function switchNumeric() {
    console.warn("Switch com numeric")
    switch (Number) {
        case 1:
            console.log('Janeiro');
            break;

        case 2:
            console.log('Fevereiro');
            break;


        case 3:
            console.log('Março');
            break;


        case 4:
            console.log('Abril');
            break;


        case 5:
            console.log('Maio');
            break;


        case 6:
            console.log('Junho');
            break;


        case 7:
            console.log('Julho');
            break;


        case 8:
            console.log('Agosto');
            break;


        case 9:
            console.log('Setembro');
            break;


        case 10:
            console.log('Outubro');
            break;


        case 11:
            console.log('Novembro');
            break;


        case 12:
            console.log('Dezembro');
            break;

        default:
            console.log(`Não é a Ariana, eu já falei`);
    }
}

switchNumeric();



// 5 - Para uma variável do tipo array, faça as repetições possíveis
// for com índice
// foreach

function forComIndice() {
    console.warn("for com Indice")
    for (var chave = 0; chave < estados.length; chave++) {
        console.log("Array logado com for simples: " + estados[chave])
    }
}

forComIndice();

estados.forEach(percorre);

function percorre(item, index) {
    console.warn("Array logado com forEach:")
    console.log(index + "- " + item)
}

// 1.1 Com javascript puro (É importante saber o básico)
// Localize um elemento no html por id
let porId = document.getElementById("titulo-card").textContent
console.warn("Exibindo elemento por id: ");
console.warn(porId);

// Localize um ou mais elementos por class
let porClass = document.getElementsByClassName("azul");
console.warn("Exibindo elemento por id: " + porClass);
console.warn(porClass);

// Localize um ou mais elementos por nome do seletor <tag>
let paragrafo = document.getElementsByTagName("p");
console.warn("Exibindo elemento por tagName:")
console.warn(paragrafo)

// Crie um novo paragrafo no body
let pInicial = document.createElement("p");
const texto = document.createTextNode("Paragrafo Inicial");
pInicial.appendChild(texto);
console.log(pInicial);
const body = document.body;
body.appendChild(pInicial);

// Crie um novo paragrafo em algum elemento por ID,CLASS,ou seletor
let paragrafoID = document.createElement('p');
const txt = document.createTextNode("Paragrafo com ID");
paragrafoID.appendChild(txt);
console.log(paragrafoID);
let paragrafoNovo = document.getElementById('new');
paragrafoNovo.append(paragrafoID);


// 2 - Com jQuery(É importante otimizar o trabalho)
// Localize um elemento por ID
console.log($("#primario"));

// Exiba em log o conteúdo desse elemento
console.log($("#primario").val());

// Exiba em log o conteúdo HTML desse elemento 
console.log($("#primario").text());

// Altere o conteúdo dese elemento por outro
console.group("Alterar conteúdos com jQuery")
$("li").text("li escrito com jQuery")
console.groupEnd()

//2 Localize uma lista de elementos por class
// Converta esses elementos em uma lista e exiba de forma individual o seu conteúdo
let elementoClass = [...$(".titleP")]

console.group('Elementos com classe')
console.log("Lista de Elementos");
console.log(elementoClass);
for (count = 0; count < elementoClass.length; count++) {
    console.log("Item -", count, "-", elementoClass[count].textContent);
}
console.groupEnd()

//Altere o conteúdo desses elementos por outro
$(".titleP").text("Isso foi alterado")

// 3 Localize uma lista de elementos por nome de seletor
// Converta esses elementos em uma lista e exiba de forma individual o seu conteúdo
let hfour = [...$("h4")]

// Altere o conteúdo desses elementos por outro
$("h4").text("Alterei o H4")


// 4 - Com javascript puro (É importante saber o básico)
// No html utilize o atributo de seletor onclick para executar funções existente no javascript
function criarLinha() {
    $("body").append(
        $("<p>", {
            text: "Nova linha escrita com jQuery",
            title: "Ao passar o mouse esse texto aparece",
            class: "alert alert-danger"
        })
    );
}

// No javascript crie funções para as operações matemáticas onde o resultado deve ser exibido em log


// 5 - Com jQuery(É importante otimizar o trabalho)
// No html não teve ter menção ao javascript, mas deve permitir o acesso facilitado ao mesmo por id,class ou nome do seletor
// Crie eventos de click para botoes onde a função deve exibir em log apenas que o click funcionou
$("#clickJq").click(() => {
    console.log('clicou irmão!');
})
// Crie evento de submit que exiba em log os dados capturados nos inputs
$("form").on("submit", (event) => {
    event.preventDefault()
    getData()
})

function getData() {
    let movie = $("#name").val()
    let dataLancamento = $("#date").val()

    console.log("O filme com data de lancçamento ", movie, "com data de lançamento em ", dataLancamento, "foi salvo.");
}














