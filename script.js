

let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');
const counterCard = document.querySelector(".container-jar");
const incrBtn = document.querySelector(".btn-action1");
const savBtn = document.querySelector(".btn-action2");
const resetBtn = document.querySelector(".btn-action3");
let count = 0;


incrBtn.addEventListener('click', incrementBtn)

function incrementBtn() {
    count++;
    countEl.innerText = count;
    counterCard.style.backgroundColor = "#262617" ;
}

savBtn.addEventListener('click', saveBtn)

function saveBtn() {
    
    let countStr = count + " - " ;
    saveEl.textContent += countStr; 
    count = 0;
    countEl.textContent = 0;
    counterCard.style.backgroundColor = "#26171f";

}

resetBtn.addEventListener('click', resetEntry)

function resetEntry() {
    count = 0;
    saveEl.textContent = "Previous entries : ";
    countEl.textContent = 0;
    counterCard.style.backgroundColor = "#1f2833";
}
