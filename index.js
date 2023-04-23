// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function encrypted (){
    var text = document.getElementById("inputtext").value.toLowerCase();
    var textCrypted = text.replace(/e/igm, "enter");
    var textCrypted = textCrypted.replace(/o/igm, "ober");
    var textCrypted = textCrypted.replace(/i/igm, "imes");
    var textCrypted = textCrypted.replace(/a/igm, "ai");    
    var textCrypted = textCrypted.replace(/u/igm, "ufat");

    document.getElementById("notfound").style.display = "none";
    document.getElementById("notfoundtext").style.display = "none";
    document.getElementById("textcopy").innerHTML = textCrypted;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";
    
}

function decrypted (){
    var text = document.getElementById("inputtext").value.toLowerCase();
    var textCrypted = text.replace(/enter/igm, "e");
    var textCrypted = textCrypted.replace(/ober/igm, "o");
    var textCrypted = textCrypted.replace(/imes/igm, "i");
    var textCrypted = textCrypted.replace(/ai/igm, "a");    
    var textCrypted = textCrypted.replace(/ufat/igm, "u");

    document.getElementById("notfound").style.display = "none";
    document.getElementById("notfoundtext").style.display = "none";
    document.getElementById("textcopy").innerHTML = textCrypted;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";
    
}

function copy (){
    var container = document.querySelector("#textcopy");
    container.select();
    document.execCommand("copy");
    alert("Mensaje copiado")
}