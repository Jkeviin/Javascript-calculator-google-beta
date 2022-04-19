var resultado = document.getElementById('resultado');
var resultado2 = document.getElementById('resultado2');
var borrar = document.getElementById('BtnBorrar');
var eliminar = document.getElementById('eliminar');
var suma = document.getElementById('BtnSuma');
var resta = document.getElementById('BtnResta');
var multiplicacion = document.getElementById('BtnMulti');
var potencia = document.getElementById('BtnPoten');
var division = document.getElementById('BtnDiv');
var igual = document.getElementById('BtnIgual');
var raiz = document.getElementById('BtnRaiz');
var uno = document.getElementById('uno');
var dos = document.getElementById('dos');
var tres = document.getElementById('tres');
var cuatro = document.getElementById('cuatro');
var cinco = document.getElementById('cinco');
var seis = document.getElementById('seis');
var siete = document.getElementById('siete');
var ocho = document.getElementById('ocho');
var nueve = document.getElementById('nueve');
var puntos = document.getElementById('puntos');
var punto = 0;
var cero = document.getElementById('cero');
var r = true;
var simbolos = "";
var res = "";
var numero1 = "";
var numero2 = "";
var operacion="";

function repeticion(e){
    raiz.disabled = true;
    puntos.disabled = true;
    punto = 0;
    eliminar.disabled = false;
    switch(operacion){
        case " + ":
        case " - ":
        case " * ":
        case " / ":
        case " ^ ":
            resultado.value = resultado.value.substring(0, resultado.value.length - 3);
        break;
    }

    if(operacion != e){
        if(resultado.value==""){
            numero1 = 0;
            resultado.value = "0";
        }
    }
    operacion = e;
    resultado.value += e;

    if(res!=""){
        resultado2.value = "ANS = "+res;
        r=false;
    }
}

function comprobacion(a){
    igual.disabled = false;
    puntos.disabled = false;
    eliminar.disabled = false;
    if(res!="" && r==true){
        resultado2.value = "ANS = "+res;
        resultado.value="";
        numero1 = "";
        res="";
    }

    resultado.value += a;
    if(operacion==""){
        numero1 += a;
    }else{
        numero2 += a;
        if(numero2!=""){
            suma.disabled = true;
            resta.disabled = true;
            multiplicacion.disabled = true;
            division.disabled = true;
            potencia.disabled = true;
        }
    }
}

function btnClickEliminar(){
    if(operacion==""){
        if(numero1.length!=0){
            numero1 = numero1.substring(0, numero1.length - 1);
            resultado.value = resultado.value.substring(0, resultado.value.length - 1);
        }
    }else if(numero2.length!=0){
        numero2 = numero2.substring(0, numero2.length - 1);
        resultado.value = resultado.value.substring(0, resultado.value.length - 1);
    }
}

function btnUno() {
    comprobacion("1");
}
function btnDos() {
    comprobacion("2");
}
function btnTres() {
    comprobacion("3");
}
function btnCuatro() {
    comprobacion("4");
}
function btnCinco() {
    comprobacion("5");
}
function btnSeis() {
    comprobacion("6");
}
function btnSiete() {
    comprobacion("7");
}
function btnOcho() {
    comprobacion("8");
}
function btnNueve() {
    comprobacion("9");
}
function btnCero() {
    comprobacion("0");
}

function btnPunto(){
    if(punto == 0){
        if(operacion==""){
            punto++;
            numero1 += ".";
            resultado.value += ".";
        }else{
            resultado.value += ".";
            numero2 += ".";
            punto++;
        }
    }
}


function btnClickSuma(){
    repeticion(" + ");
}

function btnClickResta(){
    repeticion(" - ");
}

function btnClickMulti(){
    repeticion(" * ");
}

function btnClickDiv(){
    repeticion(" / ");

}
function btnClickRaiz(){
    let res = Math.sqrt(numero1);
    resetear();
    resultado.value = res;
}

function btnClickPoten(){
    repeticion(" ^ ");
}

function btnClickIgual(){
    resolver();
}

function resolver(){
    switch(operacion){
        case " + ":
            res = parseFloat(numero1) + parseFloat(numero2);
            break;
        case " - ":
            res = parseFloat(numero1) - parseFloat(numero2);
            break;
        case " * ":
            res = parseFloat(numero1) * parseFloat(numero2);
            break;
        case " / ":
            res = parseFloat(numero1) / parseFloat(numero2);
            if(numero2==0){
                res="Error, eso no se pude hacer";
            }
            break;
        case " ^ ":
            res = parseFloat(Math.pow(numero1, numero2))    ;
            break;
        }
    resultado2.value=resultado.value + " =";
    resetear();
    resultado.value = res;
    numero1 = res;
    r=true;
    eliminar.disabled = true;
    puntos.disabled = true;
}

function btnClickBorrar() {
    resultado2.value = "ANS = "+res;
    resetear();
}

function resetear(){
    punto = 0;
    resultado.value = "";
    numero1 = "";
    numero2 = "";
    operacion = "";

    suma.disabled = false;
    resta.disabled = false;
    multiplicacion.disabled = false;
    division.disabled = false;
    potencia.disabled = false;
    raiz.disabled = false;
    igual.disabled = true;
}


//EJECUSION CODIGO CON TECLADO
function tecla(e){
    console.log(e.code);
    if(e.code == 'Digit1' || e.code == 'Numpad1'){
        btnUno();
    }
    if(e.code == 'Digit2' || e.code == 'Numpad2'){
        btnDos();
    }
    if(e.code == 'Digit3' || e.code == 'Numpad3'){
        btnTres();
    }
    if(e.code == 'Digit4' || e.code == 'Numpad4'){
        btnCuatro();
    }
    if(e.code == 'Digit5' || e.code == 'Numpad5'){
        btnCinco();
    }
    if(e.code == 'Digit6' || e.code == 'Numpad6'){
        btnSeis();
    }
    if(e.code == 'Digit7' || e.code == 'Numpad7'){
        btnSiete();
    }
    if(e.code == 'Digit8' || e.code == 'Numpad8'){
        btnOcho();
    }
    if(e.code == 'Digit9' || e.code == 'Numpad9'){
        btnNueve();
    }
    if(e.code == 'Digit0' || e.code == 'Numpad0'){
        btnCero();
    }
    if(e.code == 'NumpadDecimal' || e.code == 'Period'){
        btnPunto();
    }

    if(e.code == 'NumpadEnter' || e.code == 'Enter'){
        resolver();
    }

    if(e.code == 'NumpadMultiply'){
        btnClickMulti();
    }
    if(e.code == 'NumpadDivide'){
        btnClickDiv();
    }
    if(e.code == 'NumpadSubtract'){
        btnClickResta();
    }
    if(e.code == 'NumpadAdd'){
        btnClickSuma();
    }

}