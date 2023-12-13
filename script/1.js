let userMove='';
let computerMove='';
let result='';


const game={
    win:0,
    lose:0,
    tie:0
};


function generateComputerMove(){

    const random=Math.random();
    if(random<1/3){
        computerMove='Rock';
    }
    else if(random<2/3){
        computerMove='Paper';
    }
    else{
        computerMove='Scissors';
    }
}
function generateResult(userMove,computerMove){
    if(userMove=='Rock'){
        if(computerMove=='Rock'){
            result= 'Tre';
            game.tie+=1;
        }
        else if(computerMove=='Paper'){
            result= 'Lose';
            game.lose+=1;
        }
        else{
            result= 'Win';
            game.win+=1;
        }
    }
    else if(userMove=='Paper'){
        if(computerMove=='Rock'){
            result= 'Win';
            game.win+=1;
        }
        else if(computerMove=='Paper'){
            result= 'Tre';
            game.tie+=1;
        }
        else{
            result= 'Lose';
            game.lose+=1;
        }
    }
    else{
        if(computerMove=='Rock'){
            result= 'Lose';
            game.lose+=1;
        }
        else if(computerMove=='Paper'){
            result= 'Win';
            game.win+=1;
        }
        else{
            result= 'Tre';
            game.tie+=1;
        }
    }
}
function rendomsummery(){
    hist();
    document.getElementById('wins').innerHTML=game.win;
    document.getElementById('losses').innerHTML=game.lose;
    document.getElementById('ties').innerHTML=game.tie;
    document.getElementById('result').innerHTML=(game.win+game.lose+game.tie);
}
function hist(){
    let s=document.getElementById('histroytable').innerHTML;
    s+=`
    <tr>
    <td>${userMove}</td>
    <td>${computerMove}</td>
    <td>${result}</td>
    </tr>`;
    document.getElementById('histroytable').innerHTML=s;
}
function resetcli(){
    userMove='';
    computerMove='';
    result='';
    game.win=0;
    game.lose=0;
    game.tie=0;
    document.getElementById('wins').innerHTML=game.win;
    document.getElementById('losses').innerHTML=game.lose;
    document.getElementById('ties').innerHTML=game.tie;
    document.getElementById('result').innerHTML=(game.win+game.lose+game.tie);
    let s='';
    s+=`<tr>
    <th>User Move</th>
    <th>Computer Move</th>
    <th>Result</th>
</tr>`;
    document.getElementById('histroytable').innerHTML=s;
    
}