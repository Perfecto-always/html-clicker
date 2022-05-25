const clicker = document.getElementById("clicker");
const clicks = document.getElementById("clicks");
const timer = document.getElementById("timer");
const dialog = document.querySelector("dialog")
const result = document.getElementById("results")
const reload = document.getElementById("reset")

let click = 0;
let timeRemaining = 10 // 10 sec

reload.onclick = reset;
clicker.onclick = cpc;

function cpc() {
    if(click === 0) {
        _timer(timeRemaining)
        }
        click++;
        clicks.innerText = click;
}

function _timer(time) {
    if(time === 0) {
        clicker.onclick = null
        clicker.classList.add("not-allowed")
        showResults()
        return
    }
    setTimeout(()=>{
        timer.innerText = "0:0" + String(time - 1)
        _timer(time -1)
    },1000)
}

function showResults() {
    dialog.open = true
    result.innerText = "Your click per second or CPC is " + 
        String(click / timeRemaining)
}

function reset() {
    click = 0;
    clicks.innerText= click
    clicker.onclick = cpc
    clicker.classList.remove("not-allowed")
    timer.innerText = "0:10"
    dialog.open = false
}