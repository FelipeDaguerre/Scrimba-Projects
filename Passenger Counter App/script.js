let count = 0
let countsave = - 0

function increment(){
    count++
    document.getElementById("counter").innerText = count
}

function decrement(){
    count--
    document.getElementById("counter").innerText = count
}

function reset(){
    count = 0
    countsave = 0
    document.getElementById("counter").innerText = count
    document.getElementById("mes").innerText = " Previous save"
}

function save(){
    countsave = count
    document.getElementById("mes").innerText += ` - ${countsave}`

}

function load(){
    document.getElementById("counter").innerText = countsave
    count = countsave

}
