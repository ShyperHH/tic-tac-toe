const piece = ["X", "0"];
let player1=[];
let player2=[];
let numberOfMoves=0;
let table = document.querySelectorAll("#field td");
function Toggler(value){
    document.getElementById('input_player1').hidden=value;
    document.getElementById('input_player2').hidden=value;
    document.querySelectorAll('label')[0].hidden=value;
    document.querySelectorAll('label')[1].hidden=value;
    document.getElementById('startGame').hidden=value;
}
function startRecordingNames(){
    document.getElementById('startRecordingNames').hidden=true;
    document.getElementById("fieldRecords").style.display="none";
    document.getElementById("showRecords").style.display="none";

    Toggler(false);
}
function StartGame(){
    if(document.getElementById("input_player1").value==="" || document.getElementById("input_player2").value===""){
        alert("Поля пустые");
        return;
    }
    if(document.getElementById("input_player1").value === document.getElementById("input_player2").value){
        alert("Имена одинаковые");
        return;
    }
    document.getElementById("redirectButton").style.display="block";
    const random = Math.floor(Math.random() * 2);
    player1= [document.getElementById("input_player1").value, piece[random]];
    player2= [document.getElementById("input_player2").value, random===0?piece[1]:piece[0]];
    Toggler(true);
    document.getElementById("field").style.display="table";
    if(player1[1]==="X"){
        document.getElementById("currentPlayer").innerText="Ходит "+player1[0]+" с фишкой "+player1[1];
    }else{
        document.getElementById("currentPlayer").innerText="Ходит "+player2[0]+" с фишкой "+player2[1];
    }
}
for(let i=0;i<9;i++){
    table[i].addEventListener('click', function (){
        if(this.textContent!=="")return;
        this.textContent=document.getElementById("currentPlayer").textContent.slice(-1);
        if(this.textContent===player1[1]){
            document.getElementById("currentPlayer").innerText="Ходит "+player2[0]+" с фишкой "+player2[1];
            document.querySelector("#currentPlayer").style.color="green";
        }else{
            document.getElementById("currentPlayer").innerText="Ходит "+player1[0]+" с фишкой "+player1[1];
            document.querySelector("#currentPlayer").style.color="red";
        }
        numberOfMoves++;
        if(player1[1]===checkWinners()){
            alert("Игра окончена. Победил "+player1[0]);
            resetField(player1);
            return;
        }
        if(player2[1]===checkWinners()) {
            alert("Игра окончена. Победил "+player2[0]);
            resetField(player2);
            return;
        }
        if(numberOfMoves===9){
            alert("Ничья");
            resetField();
        }
    })
}

function resetField(winner=""){
    numberOfMoves=0;
    for(let i=0;i<9;i++){
        table[i].textContent="";
    }
    let currentDate= new Date().toString();
    if(winner===""){
        localStorage.setItem(player1[0]+" - "+player2[0]+" Ничья.", currentDate);
    }else{
        localStorage.setItem(player1[0]+" - "+player2[0]+' Победил '+ winner[0], currentDate);
    }
}

function showRecords() {
    (document.getElementById("fieldRecords").style.display === 'table' ? document.getElementById("fieldRecords").style.display = "none" : document.getElementById("fieldRecords").style.display = "table")
    for (let i=0;i<localStorage.length;i++){
        document.querySelector("#fieldRecords tbody").innerHTML+="<tr><td>"+localStorage.key(i)+"</td><td>"+localStorage.getItem(localStorage.key(i))+"</td></tr>";
    }
}

function checkWinners(){
    return (checkVertical() || checkHorizontal() || checkDiagonal())
}

function checkHorizontal(){
    if(table[0].textContent!=="" && table[0].textContent===table[1].textContent && table[1].textContent===table[2].textContent ){
        return table[0].textContent;
    }
    if(table[3].textContent!=="" && table[3].textContent===table[4].textContent && table[4].textContent===table[5].textContent ){
        return table[3].textContent;
    }
    if(table[6].textContent!=="" && table[6].textContent===table[7].textContent && table[7].textContent===table[8].textContent ){
        return table[6].textContent;
    }
    return false;
}

function checkVertical(){
    if(table[0].textContent!=="" && table[0].textContent===table[3].textContent && table[3].textContent===table[6].textContent ){
        return table[0].textContent;
    }
    if(table[1].textContent!=="" && table[1].textContent===table[4].textContent && table[4].textContent===table[7].textContent ){
        return table[1].textContent;
    }
    if(table[2].textContent!=="" && table[2].textContent===table[5].textContent && table[5].textContent===table[8].textContent ){
        return table[2].textContent;
    }
    return false;
}

function checkDiagonal(){
    if(table[0].textContent!=="" && table[0].textContent===table[4].textContent && table[4].textContent===table[8].textContent ){
        return table[0].textContent;
    }
    if(table[2].textContent!=="" && table[2].textContent===table[4].textContent && table[4].textContent===table[6].textContent ){
        return table[2].textContent;
    }
    return false;
}

function redirectHome(){
    location.reload();
}