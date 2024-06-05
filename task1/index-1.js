
let userInput = document.createElement("input");
userInput.setAttribute("class","c1")
userInput.setAttribute("type","text");
userInput.setAttribute("id","input")
// document.write(createdinput)
document.body.appendChild(userInput);
let addBtn = document.createElement("button")
addBtn.setAttribute("class","c1")
addBtn.setAttribute("id","btn")
document.body.appendChild(addBtn);
addBtn.innerText = "Add";
///div tasks carry all tasks
let tasks = document.createElement("div");
document.body.appendChild(tasks);
tasks.setAttribute("id","tasks");
////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
//listener
addBtn.addEventListener("click",()=>{
//parent div of task
let taskDiv = document.createElement("div");
//span carry user text
let taskTextSpan = document.createElement("span");
taskTextSpan.innerHTML=userInput.value;
//reamove btn
let btnRemove = document.createElement("button");
btnRemove.innerText = "Remove";
btnRemove.setAttribute("class","c1")
//done button
let btnDone = document.createElement("button");
btnDone.innerText = "Done";
btnDone.setAttribute("class","c1")
//add children in task parent
taskDiv.appendChild(taskTextSpan);
taskDiv.appendChild(btnRemove);
taskDiv.appendChild(btnDone);
//add task div in tasks div(grand parent)
tasks.appendChild(taskDiv);
});
//////////////////////////////////////////////////////////////////////////////////

