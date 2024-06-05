
document.body.style.background = "#d4cec5"
//create div1 and its elements
let div1 = document.createElement("div")
div1.style.marginTop = "40px"
div1.style.marginLeft = "200px"
let input_1 = document.createElement("input")
input_1.style.borderRadius = "5px"
input_1.setAttribute("placeholder", "Add your task here");
let btn1_add = document.createElement("button")
let btn1_add_text = document.createTextNode("Add");
btn1_add.appendChild(btn1_add_text)
btn1_add.style.borderRadius = "5px"
div1.appendChild(input_1)
div1.appendChild(btn1_add)
document.body.appendChild(div1)



btn1_add.onclick = function () {

    arr = input_1.value
    let div2 = document.createElement("div")
    div2.style.marginLeft = "200px"
    div2.style.marginTop = "15px"
    div2.style.width = "220px"
    div2.style.padding = "2px"
    div2.style.borderColor = "black"
    div2.style.borderWidth = "0.5px"
    div2.style.borderStyle = "solid"
    div2.style.borderRadius = "5px"



    let label_2 = document.createElement("label")
    label_2.textContent = input_1.value
    let btn2_done = document.createElement("button")
    btn2_done.classlist = "bt"
    let btn2_done_text = document.createTextNode("Done");
    btn2_done.appendChild(btn2_done_text)
    btn2_done.style.marginLeft = "70px"


    let btn2_delete = document.createElement("button")
    let btn2_delete_text = document.createTextNode("Delete");
    btn2_delete.appendChild(btn2_delete_text)

    div2.appendChild(label_2)
    div2.appendChild(btn2_done)
    div2.appendChild(btn2_delete)

    document.body.appendChild(div2)


    btn2_done.addEventListener("click", function (e) {
        if (e.target) {
            div2.style.background = "#67be64"

        }

    });

    btn2_delete.addEventListener("click", function (e) {
        if (e.target) {
            div2.style.display = "none"

        }

    });


}








