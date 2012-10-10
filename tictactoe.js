//declare global vars
var painted;
var content;
var winningCombinations;
var turn = 0;
var theCanvas;
var c;
var cxt;
var squaresFilled = 0;
var w;
var y;

//instantiate the arrays
window.onload = function(){
    painted = new Array();
    content = new Array();
    winningCombinations = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8],[0,4,8], [2,4,6]];
    
    for(var i=0; i<=8; i++){
        painted[i] = false;
        content[i] = '';
    }
}

//Game Methods
function canvasClicked(canvasNumber){
    theCanvas = "canvas"+canvasNumber;
    c = document.getElementById(theCanvas);
    cxt = c.getContext("2d");
    
    //draw X if box is empty
    if(painted[canvasNumber-1] == false){
        if(turn%2==0){
            cxt.beginPath();
            cxt.moveTo(15,15);
            cxt.lineTo(30,30);
            cxt.moveTo(30,15);
            cxt.lineTo(15,30);
            cxt.stroke();
            cxt.closePath();
            content[canvasNumber-1] = 'X';
        }
        else{
            cxt.beginPath();
            cxt.arc(25,25,8,0,Math.PI*2,true);
            cxt.stroke();
            cxt.closePath();
            content[canvasNumber-1] = 'O';
        }
        
        turn++;
        painted[canvasNumber-1] = true;
        
        squaresFilled++;
        checkForWinners(content[canvasNumber-1]);
        
        if(squaresFilled == 9){
            alert("Game Over");
            location.reload(true);
        }
    }
    else{
        alert("That spot's taken!");
    }
}

function checkForWinners(symbol){
    for(var a = 0; a < winningCombinations.length; a++){
        if(content[winningCombinations[a][0]] == symbol && content[winningCombinations[a][1]] == symbol && content[winningCombinations[a][2]] == symbol){
            alert(symbol+ "won!");
            playAgain();
        }
    }
}

function playAgain(){
    y = confirm("Wanna Play Again?");
    if (y == true){
        alert("Okay!");
        location.reload(true);
    }
    else{
        alert("Bye!");
    }
}