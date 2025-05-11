let btn = document.querySelector(".btn");
let text = document.querySelector(".text");

let flag = "darkred";

btn.addEventListener("click", ()=>{
    if(flag === "darkred"){
        text.style.color =  "rgb(63, 107, 189)";
        btn.innerHTML = "Remove Friend";
        btn.style.backgroundColor = "darkred";
        text.textContent = "Friends";
        flag = "blue";
    }else{
        text.style.color = "darkred";
        btn.innerHTML = "Add Friend";
        btn.style.backgroundColor = "rgb(63, 107, 189)";
        text.textContent = "Stranger";
        flag = "darkred";
    }
});