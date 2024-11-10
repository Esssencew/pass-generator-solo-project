const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOneEl = document.querySelector("#passwordOne")
let passTwoEl = document.querySelector("#passwordTwo")

let m = 0
let speed = 50

function randomIndex() {
    for (let i = 0; i < characters.length; i++) {
        return characters[Math.floor(Math.random() * characters.length)]
    }
}

function generatePass() {
    const range = 15
    passOneEl.textContent = ``
    passTwoEl.textContent = ``
    for (let i = 0; i < range; i++) {
        passOneEl.textContent += randomIndex()
        passTwoEl.textContent += randomIndex()
    }
}

