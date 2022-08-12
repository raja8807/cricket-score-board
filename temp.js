let runBtns = document.querySelectorAll(".runBtn");
let runDisplay = document.getElementById("runOut");
let wicDisplay = document.getElementById("wicketOut");
let ballDisplay = document.getElementById("ballOut");
let overDisplay = document.getElementById("overOut");

let runInput = document.getElementById("runInp")
let subRun = document.getElementById("subRun")

let runs = 0;
let balls = 0;
let overs = 0;
let wickets = 0;
let history = ""

function renderBoard() {
    if (balls == 6) {
        overs = overs + 1;
        balls = 0;
        history = history + " -- "
    }

    if (wickets >= 10) {
        alert("innings over")
    }

    runDisplay.innerText = runs;
    wicDisplay.innerText = wickets;
    overDisplay.innerText = overs;
    ballDisplay.innerText = balls;

    updateHistory();
    hideMsg()
}

function updateHistory(){
    let historyDisplay = document.getElementById("historyOut")
    historyDisplay.innerText = history;
}

function update() {
    runs = runs + this.run;
    balls = balls + this.ball;
    history = history+this.run+" ";
    renderBoard()
}

// let btnRun = 0
runBtns.forEach((runBtn,i) => {
    runBtn.run = i;
    runBtn.ball = 1;
    // btnRun++
    runBtn.addEventListener("click", update)
})

subRun.addEventListener("click", () => {
    if (runInput.value != "") {
        runs = runs + parseInt(runInput.value)
        history = history + " "+runInput.value;
        runInput.value = "";
        balls++
        renderBoard()
    } else {
        alert("enter a run")
    }
})

let wicBtn = document.getElementById("wicBtn")
wicBtn.addEventListener("click", () => {
    wickets++;
    balls++;
    history = history+"W "
    renderBoard();
})

let wideBtn = document.getElementById("wideBtn");
let wideMsg = document.getElementById("wideMsg");

function hideMsg() {
    wideMsg.style.visibility = "hidden"
    wideBtn.disabled = false;
}

wideBtn.addEventListener("click", () => {
    balls = balls - 1;
    runs++;
    wideMsg.style.visibility = "visible"
    wideBtn.disabled = true;
    history = history + "NB/"
})

let clearBtn = document.getElementById("clear")

clearBtn.addEventListener("click", () => {
    runs = 0;
    wickets = 0;
    overs = 0;
    balls = 0;
    history=""
    renderBoard();
})