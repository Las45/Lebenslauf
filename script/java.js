var round = prompt("Wie viele Runden möchtest du spielen?");
var max = prompt("Maximale Zahl:");
var currentRound = 1;
var operator;
var calculation = document.getElementById("calculation");
startButton.disabled = false;
var ergebnis = 0;

function reset(){
    if(currentRound >= round){
        startButton.disabled = true;
        document.getElementById("output").innerHTML = "Richtig! Fertig!";
    }
    else{
        startButton.disabled = false;
    }
    main()
    document.getElementById("input").value = "";
    var ergebnis = 0;
}

function set_plus(){
    operator = "+"
    main();
    console.log(operator);
}
function set_minus(){
    operator = "-"
    console.log(operator);
    main();
}
function set_random(){
    var operator_rand = Math.floor(Math.random() * 2)
    if(operator_rand == 1){
        operator = "+"
    }
    else if(operator_rand == 0){
        operator = "-"
    }
    console.log(operator);  
    main();
}


function main(){
    while (true){
        var zahl1 = Math.ceil(Math.random()*max);
        var zahl2 = Math.ceil(Math.random()*max);
        if(operator == "-"){
            if((zahl1 - zahl2) >= 0){
                ergebnis = zahl1 - zahl2;
                break;
            }
        }
        else if(operator == "+"){
            if((zahl1 + zahl2) <= max){
                ergebnis = zahl1+zahl2;
                break;
            }
        }
    }
    calculation.innerHTML = zahl1 + operator + zahl2;
}
function guess(){
    var guess = parseInt(document.getElementById("input").value);
    if(guess === ergebnis){
        document.getElementById("output").innerHTML = "Richtig";
        startButton.disabled = true;
        currentRound++;
        setTimeout(reset, 2000);
    }
    else{
        document.getElementById("output").innerHTML = "Falsch";
    }
}
