window.location.reload();
let count = 2;

function loadOrNew(){
    input = true; //temp
    if(input){//true:new
        initializeFirstMenu();
    }
}

function initializeFirstMenu(){
    let firstMenu = document.createElement("select");
    let blockname = ["dirt", "stone", "cobblestone", "oak_log", "oak_planks"];

    for(i = 0; i < blockname.length; i++){
        firstMenu.appendChild(document.createElement("option"));
        firstMenu.getElementsByTagName("option")[i].setAttribute("value", blockname[i]);
        firstMenu.getElementsByTagName("option")[i].innerHTML = blockname[i];

        if(i == 0){
            firstMenu.getElementsByTagName("option")[i].setAttribute("selected", "");
        }
    }
    
    document.getElementsByClassName("mname")[1].appendChild(firstMenu);
}

function addNewColumn(){
    let oldRow = document.getElementById("row1");
    let newRow = oldRow.cloneNode(true);
    let currentRow = "row" + count;

    const cells = newRow.getElementsByTagName("td");
    console.log(cells, cells.length);

    newRow.setAttribute("id", currentRow);

    newRow.getElementsByClassName("num")[0].innerHTML = count;
    
    newRow.getElementsByTagName("td")[2].setAttribute("id", "idBlocks" + count);
    newRow.getElementsByTagName("button")[0].setAttribute("onclick", "setTotalAmount(" + count + ")");
    newRow.getElementsByTagName("button")[0].innerHTML = "0 Total Items";

    newRow.getElementsByTagName("button")[1].setAttribute("onclick", "setStackAmount(" + count + ")");
    newRow.getElementsByTagName("button")[1].innerHTML = "0 Stacks 0 Items";
    
    newRow.getElementsByClassName("buttonDelete")[0].setAttribute("onclick", "deleteColumn(row" + count + ")");

    document.getElementsByTagName("tbody")[0].appendChild(newRow);
    count++;
}

function setTotalAmount(columnNumber){
    let input = prompt("Set total amount of item or a block");
    if(input != null){
        input = parseInt(input);

        if(Number.isInteger(input)){
            let parent = document.getElementById("idBlocks" + columnNumber);
            let stacks = 0;
    
            for(let total = parseInt(input); total >= 64; total -= 64){
                stacks++;
            }

            let items = input - (stacks * 64);

            parent.getElementsByTagName("button")[0].innerHTML = input + " Total Items";
            parent.getElementsByTagName("button")[1].innerHTML = stacks + " Stacks " + items + " Items";
        }
        else{
            alert("Invalid input, input was not a number");
        }
    }
}

function setStackAmount(columnNumber){
    let inputStacks = prompt("Set amount of Stacks of item or a block");
    let inputItems = null;
    if(inputStacks != null){
        inputItems = prompt("Set rest (that didn't add to a full stack) of item or a block");
    }
    if(inputItems != null){
        inputStacks = parseInt(inputStacks);
        inputItems = parseInt(inputItems);

        if(Number.isInteger(inputStacks) && Number.isInteger(inputItems)){
            let parent  = document.getElementById("idBlocks" + columnNumber);
            let inputTotal = (parseInt(inputStacks) * 64) + parseInt(inputItems);
    
            parent.getElementsByTagName("button")[0].innerHTML = inputTotal + " Total Items";
            parent.getElementsByTagName("button")[1].innerHTML = inputStacks + " Stacks " + inputItems + " Items";    
        }
        else{
            alert("Invalid input, input was not a number");
        }
    }
}

function deleteColumn(columnNumber){
    if(columnNumber == row1 && count == 2){
        alert("You cannot delete last element from the list");
    }
    else{
        columnNumber.remove();
        let othertabs = true;
        let tabindex = 1;
        let tabiterator = 1;
        while(othertabs){
            let rowcurrent = document.getElementById("row" + tabindex);
            //check if there are any other tabs
            if(tabindex > count){
                othertabs = false;
                count = tabiterator;
                return;
            }
            //skip non existent rows
            else if(rowcurrent == null){
                tabindex++;
            }
            else{
                rowcurrent.id = "row" + tabiterator;
                
                numberChange = rowcurrent.getElementsByClassName("num")[0].innerHTML = tabiterator;

                rowcurrent.getElementsByClassName("amount")[0].setAttribute("id", "idBlocks" + tabiterator);
                rowcurrent.getElementsByTagName("button")[0].setAttribute("onclick", "setTotalAmount(" + tabiterator + ")");
                rowcurrent.getElementsByTagName("button")[1].setAttribute("onclick", "setStackAmount(" + tabiterator + ")");

                rowcurrent.getElementsByClassName("buttonDelete")[0].setAttribute("onclick", "deleteColumn(row" + tabiterator + ")");
                
                tabindex++;
                tabiterator++;
            }
        }
    }
}