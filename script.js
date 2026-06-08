

let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');
const counterCard = document.querySelector(".container-jar");
const incrBtn = document.querySelector(".btn-action1");
const decrBtn = document.querySelector(".btn-action2");
const savBtn = document.querySelector(".btn-action3");
const resetBtn = document.querySelector(".btn-action4");
const stepInput = document.querySelector(".step-input");
const entryCountEl = document.querySelector(".entry-count");
const totalEl =document.querySelector(".session-total");
let count = 0;
let entries =[];

function loadFromStorage(){
    const saved = localStorage.getItem('mindtally-entries');
    if (saved) {
        entries = JSON.parse(saved);
        renderEntries();
    }
}

function saveToStorage() {
    localStorage.setItem('mindtally-entries', JSON.stringify(entries));
}

function getStep() {
    const val = parseInt(stepInput.value);
    return (isNaN(val) || val < 1) ? 1 : val;
}

incrBtn.addEventListener('click', incrementBtn)
function incrementBtn() {
    count+= getStep();
    countEl.textContent = count;
    counterCard.style.backgroundColor = "#262617" ;
}

decrBtn.addEventListener('click', decrementBtn)
function decrementBtn() {
    count-=getStep();
    if (count < 0) count = 0;
    countEl.textContent = count;
    counterCard.style.backgroundColor = "#171726" ;
}


savBtn.addEventListener('click', saveBtn)
function saveBtn() {
    
    if (count === 0) return;

    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const date = now.toLocaleDateString([], { month: 'short', day: 'numeric' });

    const entry = {
        value:count,
        timestanp: `${date} · ${time}`
    };

    entries.push(entry);
    saveToStorage();
    renderEntries(); 
    
   /* let countStr = count + " - " ;
    saveEl.textContent += countStr;*/
    count = 0;
    countEl.textContent = 0;
    counterCard.style.backgroundColor = "#26171f";
}
/*This function redraws the full entries list from scratch.
Called after every save, delete, or page load.*/

function renderEntries (){
    saveEl.innerHTML = "";

    if(entries.length === 0) {
        saveEl.innerHTML = "<span class='no-entries'>No entries yet - start counting!</span>";
        if (entryCountEl) entryCountEl.textContent = "0 saves";
        if (totalEl) totalEl.textContent = "Total: 0";
        return;
    }

    if (entryCountEl) {
        entryCountEl.textContent = `${entries.length} save${entries.length > 1 ? 's' : ''}`;
    }

    const total = entries.reduce((sum,e)=> sum+e.value, 0);
    if (totalEl) totalEl.textContent = `Total: ${total}`;

    entries.forEach((entry, index) => {
        const row = document.createElement('div');
        row.classList.add('entry-row');

        const badge = document.createElement('span');
            badge.classList.add('entry-badge');
            badge.textContent = `#${index + 1}`;

        const val = document.createElement('span');
        val.classList.add('entry-value');
        val.textContent = entry.value;

        const ts = document.createElement ('span');
        ts.classList.add('entry-timestamp');
        ts.textContent = entry.timestanp;

        const delBtn = document.createElement('button');
        delBtn.classList.add('entry-delete');
        delBtn.textContent = '✕';
        delBtn.title = 'Remove this entry';
        delBtn.addEventListener('click', () => deleteEntry(index));


        row.appendChild(badge);
        row.appendChild(val);
        row.appendChild(ts);
        row.appendChild(delBtn);
        saveEl.appendChild(row);

        
    });
    
}

//  FEATURE 6 — Delete a single entry

function deleteEntry(index) {
    entries.splice(index, 1);   // remove 1 item at position index
    saveToStorage();             // update localStorage
    renderEntries();             // redraw the list
}

//  YOUR ORIGINAL RESET — updated to also clear localStorage

resetBtn.addEventListener('click', resetEntry);
function resetEntry() {
    count = 0;
    entries = [];                           // clear the array
    saveToStorage();                        // wipe localStorage too
    renderEntries();                        // redraw (will show empty state)
    countEl.textContent = 0;
    counterCard.style.backgroundColor = "#1f2833";
}

//  START — load any previously saved entries on page open

loadFromStorage();

/*resetBtn.addEventListener('click', resetEntry)
function resetEntry() {
    count = 0;
    saveEl.textContent = " ";
    countEl.textContent = 0;
    counterCard.style.backgroundColor = "#1f2833";
}*/
