let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let list = document.querySelectorAll("li");
let inp = document.querySelector("input");
let th = document.querySelector("th");
let tr = document.querySelector("tr");
let table = document.querySelector("table");

btn.addEventListener("click",function(){
    let item = document.createElement("tr");
    item.classList.add=("hello");
    let task= inp.value;
    item.innerText= task;
    table.appendChild(item);
    console.log(task);
    inp.value="";

    let delBtn = document.createElement("button");
        delBtn.innerText = "Delete";
        delBtn.classList.add="delete";
        item.appendChild(delBtn); 
});

table.addEventListener("click",function(){
    
        if(event.target.nodeName =="BUTTON"){
            let listItem = event.target.parentElement;
            listItem.remove();
        }
    });