let inputBox = document.getElementById("input_box");
let listContainer = document.getElementById("list_container");
const sound = new Audio('success_bell-6776.mp3');

function AddTask(){
    if(inputBox.value === ''){
        alert("YOU MUST ADD TASK BEFORE CLICKING ON ADD BUTTON !!")
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.append(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        sound.play();
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showList(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showList();