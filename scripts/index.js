const changeBgColor = (element)=> {
    const  element = document.querySelector(selector)
    element.style.backgroundColor =color;
}

document.addEventListener("DOMContentLoaded",()=>{
    const RED_BTN =  document.querySelector("#red");
    const BODY = document.querySelector("body")
    RED_BTN.addEventListener("click", (e)=>{
        e.preventDefault();
        BODY.style.backgroundColor="#f00";
        changeBgColor("body", "#f00")
    })
})








































