const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addtask(){
    if(inputBox.value === ''){
        alert("You must write something!!");
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
       let deleteButton = document.createElement("button");
       deleteButton.innerHTML = "Delete";
       deleteButton.classList.add("delete-button");
       
       li.appendChild(deleteButton);
       
       listContainer.appendChild(li);
    }
    inputBox.value = "";
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
      e.target.classList.toggle("checked");
    }

    else if (e.target.classList.contains("delete-button")) {
        e.target.parentElement.remove();
    }

}, false);
 function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
 }
 function showtask(){
    listContainer.innerHTML = localStorage.getItem("data");
 }
showtask();
