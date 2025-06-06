let boxes= document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newbtn = document.querySelector(".new");
let message = document.querySelector(".msg");
let winner = document.querySelector(".win");

let turn_o = true;

const winConditions = [
    [0, 1, 2],  
    [3, 4, 5],  
    [6, 7, 8],  
    [0, 3, 6],  
    [1, 4, 7],   
    [2, 5, 8],  
    [0, 4, 8],  
    [2, 4, 6]
];

const resetGame = () => {
    turn_o = true;
    count = 0;
    enableBoxes();
    message.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn_o) {
            box.innerText = "O";
            turn_o = false;
            
        }
        else{
            box.innerText = "X";
            turn_o = true;
        }
        box.disabled= true;
        count++;

        let isWinner = checkWin();
        if(count ===9 && ! isWinner) {
            gameDraw();
        }
    });
});
 const gameDraw = () => {
    message.classList.remove("hide");
    winner.innerText = "Game Draw";
    disableBoxes();
 };

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;

    }
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
    
    box.innerText = "";
    }
};

const showWinner =(winners) => {
    winner.innerText = `congrats ,winner is ${winners}`;
    message.classList.remove("hide");
    disableBoxes();
};

const checkWin = () => {
    for (let pattern of winConditions) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;     
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            
        if (pos1 === pos2 && pos2 === pos3) {
            showWinner(pos1);
            return true;
        }
        }
        
    }
};

newbtn.addEventListener("click", resetGame);
