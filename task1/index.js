
let createdinput = document.createElement("input");
createdinput.setAttribute("class","c1")
createdinput.setAttribute("type","text");
createdinput.setAttribute("id","input")
// document.write(createdinput)
document.body.appendChild(createdinput);
let createdbutton = document.createElement("button")
createdbutton.setAttribute("class","c1")
createdbutton.setAttribute("id","btn")
document.body.appendChild(createdbutton);
createdbutton.innerText = "Add";
createdbutton.addEventListener("click",()=>{
    let createddiv = document.createElement("div")
   
document.body.appendChild(createddiv);
createddiv.setAttribute("class","tasks")
let createdspan = document.createElement("span")
createddiv.appendChild.createdspan
let btnRemove = document.createElement("button")
createddiv.appendChild.btnRemove
btnRemove.innerText = "Remove";
let btnDone = document.createElement("button")
createddiv.appendChild.btnDone
btnDone.innerText = "Done";
console.log("tasks")
},true);
