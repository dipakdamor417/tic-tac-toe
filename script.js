let audioTurn = new Audio("change.mp3");
let gameover = new Audio("end.mp3");
let turn = "X";
let isgameover = false;

// Function to change the turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X";
}
// Function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('tile');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            isgameover = true;
            gameover.play();
            if (gameover.play()){
                alert(`${boxtext[e[0]].innerText} Wins `);
                window.location.reload();
            } 
        }
    })
}

// Game Logic

let boxes = document.getElementsByClassName("boxes");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.tile');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover){
                document.getElementsByClassName("player1")[0].innerText  = "Turn for " + turn;
            } 
           
        }
    })
});


