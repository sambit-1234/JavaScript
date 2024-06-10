
document.querySelector(".text-box").classList.add("hidden");

textBox = document.querySelector(".text-box");
buttons = document.querySelectorAll(".model-class");
console.log(buttons);

const showTextBox = function (){
    document.querySelector(".text-box").classList.remove("hidden");
    document.querySelector(".button-container").classList.add("blur");

}

const hideTextBox = function() {
    textBox.classList.add("hidden");
    document.querySelector(".button-container").classList.remove("blur");
}

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click", showTextBox);
}

document.querySelector(".close-btn").addEventListener("click", hideTextBox);

//when we press the escape button the text bos should be closed
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape"){
        if (!textBox.contains("hidden")){
            hideTextBox();     
        } 
    }
});

