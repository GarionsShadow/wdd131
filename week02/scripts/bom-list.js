const h1 = document.getElementById("h1")
const list = document.getElementById("list");
const button = document.getElementById("Add");
const input = document.getElementById("chapter");
const li = document.createElement('li');
const deleteButton = document.createElement("button");


button.addEventListener("click", function() {
    console.log("clicked")
    if(input.value.trim() !== "") {

        
        li.textContent = input.value; 
        deleteButton.textContent = "❌";
        li.append(deleteButton);
        list.append(li);
        input.value = "";
    } else {
        document.getElementById(h1).textContent = "You input nothing";
    }
    input.focus();
});

deleteButton.addEventListener("click", function(){
    console.log("delete clicked")
    list.removeChild(li);
    input.focus();
    
});