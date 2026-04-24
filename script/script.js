var userEingabe = document.getElementById("inputInput");
var outputResult = document.getElementById("outputResult");
var outputCount = document.getElementById("outputCount");
var done = false;
var max = parseInt(prompt("Bis zu welcher Zahl möchtest du spielen?"));
var number = Math.floor(Math.random() * max);
var count = 0;
var start = new Date().getTime();
var end = new Date().getTime();
var time = end - start;

function checkNumber() {
    var eingabe = parseInt(userEingabe.value);

    if(eingabe < number && done === false) {
        outputResult.innerHTML = "Dein Tipp war zu niedrig.";
    }
    else if(eingabe > number && done === false) {
        outputResult.innerHTML = "Dein Tipp war zu hoch.";
    }
    else if(eingabe === number && done === false) {
        end = new Date().getTime();
        time = end - start;
        outputResult.innerHTML = "BINGO!" + " Zeit: " + time/1000 + " Sekunden.";
        done = true;
        btnClick.disabled = true;
    }
    if(done === false) {
        count++;
        outputCount.innerHTML = "Du hast " + count + " Versuche gebraucht.";
    }
}

function newGame() {
    var max = parseInt(prompt("Bis zu welcher Zahl möchtest du spielen?"));
    number = Math.floor(Math.random() * max);
    count = 0;
    done = false;
    outputResult.innerHTML = "";
    outputCount.innerHTML = "";
    userEingabe.value = "";
    btnClick.disabled = false;
    start = new Date().getTime();
}