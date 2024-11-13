const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const numbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const special = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
const symbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const passOneEl = document.querySelector("#passwordOne")
const passTwoEl = document.querySelector("#passwordTwo")
const inputEl = document.querySelector("#input-el")
const numEl = document.querySelector("#num-el")
const specEl = document.querySelector("#spec-el")

function randomIndex(kek) {
    for (let i = 0; i < characters.length; i++) {
        return characters[Math.floor(Math.random() * kek.length)]
    }
}

function generatePass() {
    passOneEl.textContent = ``
    passTwoEl.textContent = ``

    for (let i = 0; i < inputEl.value; i++) {
        if (numEl.checked && specEl.checked) {
            passOneEl.textContent += randomIndex(characters)
            passTwoEl.textContent += randomIndex(characters)
        } else if (specEl.checked) {
            passOneEl.textContent += randomIndex(special)
            passTwoEl.textContent += randomIndex(special)
        } else if (numEl.checked) {
            passOneEl.textContent += randomIndex(numbers)
            passTwoEl.textContent += randomIndex(numbers)
        } else {
            passOneEl.textContent += randomIndex(symbols)
            passTwoEl.textContent += randomIndex(symbols)
        }
    }
}

passOneEl.addEventListener("click", function(){
    navigator.clipboard.writeText(passOneEl.textContent)
    passOneEl.textContent = "Copied to clipboard!"
})

passTwoEl.addEventListener("click", function(){
    navigator.clipboard.writeText(passTwoEl.textContent)
    passTwoEl.textContent = "Copied to clipboard!"
})