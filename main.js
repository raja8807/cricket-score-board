let runDisplay = document.getElementById("runOut")
let wicDisplay = document.getElementById("wicketOut")
let overDisplay = document.getElementById("overOut")
let ballDisplay = document.getElementById("ballOut")


var run = 0;
var wicket = 0;
var over = 0;
var ball = 0;

let zeroBtn = document.getElementById("zeroBtn");
let oneBtn = document.getElementById("oneBtn");
let twoBtn = document.getElementById("twoBtn");
let threeBtn = document.getElementById("threeBtn");
let fourBtn = document.getElementById("fourBtn");
let fiveBtn = document.getElementById("fiveBtn");
let sixBtn = document.getElementById("sixBtn");

let runInput = document.getElementById("runInp")
let subRun = document.getElementById("subRun")

let wideBtn = document.getElementById("wideBtn")

let wicBtn = document.getElementById("wicBtn")

function updateOver(){
    if(ball == 6){
        over = over + 1;
        ball = 0;
    }
}

function renderBoard(){
    runDisplay.innerText = run;
    wicDisplay.innerText = wicket;
    overDisplay.innerText = over;
    ballDisplay.innerText = ball;
}

zeroBtn.addEventListener("click", () => {
    ball++
    updateOver()
    renderBoard()
    hideMsg()
})

oneBtn.addEventListener("click", () => {
    ball++
    run = run + 1;
    updateOver()
    renderBoard()
    hideMsg()
})

twoBtn.addEventListener("click", () => {
    ball++
    run = run + 2;
    updateOver()
    renderBoard()
    hideMsg()
})

threeBtn.addEventListener("click", () => {
    ball++
    run = run + 3;
    updateOver()
    renderBoard()
    hideMsg()
})

fourBtn.addEventListener("click", () => {
    ball++
    run = run + 4;
    updateOver()
    renderBoard()
    hideMsg()
})

fiveBtn.addEventListener("click", () => {
    ball++
    run = run + 5;
    updateOver()
    renderBoard()
    hideMsg()
})

sixBtn.addEventListener("click", () => {
    ball++
    run = run + 6;
    updateOver()
    renderBoard()
    hideMsg()
})

subRun.addEventListener("click" , ()=>{
    if(runInput.value!=""){
        run = run+parseInt(runInput.value)
    runInput.value = "";
    ball++
    updateOver()
    renderBoard()
    }else{
        alert("enter a run")
    }
    hideMsg()
})

let wideMsg = document.getElementById("wideMsg")

function hideMsg(){
    wideMsg.style.visibility = "hidden"
}

wideBtn.addEventListener("click",()=>{
    ball = ball-1;
    run++;
    wideMsg.style.visibility = "visible"
})

wicBtn.addEventListener("click" , ()=>{
    wicket++;
    if(wicket==10){
        alert("innings over")
    }
    ball++;
    updateOver()
    renderBoard()
})
