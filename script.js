let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset__btn");
let newGameBtn = document.querySelector("#new__btn");
let winnerMsg = document.querySelector(".msg__container ");
let msg = document.querySelector("#msg");
let container = document.querySelector(".container");
let turn0 = true;//player x,player o;
let winPattern = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("The box is clicked");
        if (turn0) {
            box.innerText = "0";
            turn0 = false;
        } else {
            box.innerText = "x";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations,Winner is ${winner}`;
    winnerMsg.classList.remove("hide");
    disabledBoxes();
}

const checkWinner = () => {
    for (let pattern of winPattern) {
        // console.log(pattern[0], pattern[1],pattern[2])
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText)
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log(`the tic tac toe Winner  ${pos1Val}`);
                showWinner(pos1Val);
            }
        }

    }
};
const enabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const restGame = () => {
    turn0 = true;
    enabledBoxes();
    winnerMsg.classList.add("hide");
}

newGameBtn.addEventListener("click", restGame);
resetBtn.addEventListener("click", restGame);
