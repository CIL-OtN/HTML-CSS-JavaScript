
const input = document.getElementById("input");
const trashIcon = document.getElementById("trash");
const toDoItems = document.getElementsByClassName("to-do-items")[0];

// EventTarget.addEventListener(Typ, Reaktionsfunktion)
input.addEventListener("keydown", 
    function(event) {       // schreibe hier eine eigen Funktion mit Namen
        if(event.key == "Enter")
            addItem();
    }
)

function addItem() {
    var divParent = document.createElement("div");
    var divChild = document.createElement("div");

    var checkIcon = document.createElement("i");
    var trashIcon = document.createElement("i");

    divParent.className = "item";
    divParent.innerHTML = '<div>'+ input.value +'</div>';

    // checkIcon -------------------------------------
    checkIcon.className = "fas fa-check-square";
    checkIcon.style.color = "lightgray";
    
    checkIcon.addEventListener('click',
        function(event) {
            checkIcon.style.color = "limegreen";
        }
    )

    divChild.appendChild(checkIcon);
    // END -------------------------------------------
    
    // trashIcon -------------------------------------
    trashIcon.className = "fas fa-trash-alt";
    trashIcon.style.color = "red";

    trashIcon.addEventListener('click',
        function(event) {
            divParent.remove();
            
        }
    )

    divChild.appendChild(trashIcon);
    // END -------------------------------------------

    divParent.appendChild(divChild);

    toDoItems.appendChild(divParent);

    input.value = "";
}