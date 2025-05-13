const kidnapped = document.getElementsByTagName("h1");
 
console.log(kidnapped[0]);
kidnapped[0].remove;



function chnageBG(){
    const lalala_item = document.getElementById("lala");
    lalala_item.style.backgroundColor = "red";
}

const bg_button = document.getElementById("bg");
bg_button.addEventListener("click",chnageBG)