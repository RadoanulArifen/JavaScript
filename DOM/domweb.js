let count = 0;

const displaycounter = document.getElementById("number");
const pluse = document.getElementById("plus");
const minus = document.getElementById("minus");
const reset = document.getElementById("reset");

function increase(){
    count++;
    displaycounter.textContent = count;
}

function dicrease(){
    count--;
    displaycounter.textContent = count;
}

function cleare(){
    count=0;
    displaycounter.textContent = count;
}


pluse.addEventListener("click",increase);
minus.addEventListener("click",dicrease);
reset.addEventListener("click",cleare);