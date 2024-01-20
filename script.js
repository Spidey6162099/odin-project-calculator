const buttons=document.querySelectorAll(".container>#button_container>button");
const display=document.querySelector(".container>#display");
console.log(buttons);
console.log(display)
buttons.forEach((button)=>{

if(display.textContent==="0"){
    display.textContent=button.textContent;
}
else{
    display.textContent+=button.textContent;
}
});