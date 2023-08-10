const inputBox = document.getElementById("input-box");
const list = document.getElementById("list");

function addTask() {
    if (inputBox.value === "")
    { 
        alert("please add the task first!!!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);
    }
    inputBox.value = ""
    saveData()
}

function saveData(){
    localStorage.setItem("data", list.innerHTML);
}

function showTask(){
    list.innerHTML = localStorage.getItem("data")
}
showTask();