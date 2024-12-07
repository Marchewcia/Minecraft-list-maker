function loadOrNew(){
    input = true; //temp
    if(input){//true:new
        count = 2;
        initializeFirstMenu();
    }
}

function initializeFirstMenu(){
    firstMenu = document.createElement("select");
    blockname = ["dirt", "stone", "cobblestone", "oak_log", "oak_planks"];
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
    oldRow = document.getElementById("row1");
    newRow = oldRow.cloneNode(true);
    currentRow = "row" + count;

    newRow.setAttribute("id", currentRow);

    newRow.getElementsByClassName("num")[0].innerHTML = count;
    
    newRow.getElementsByTagName("div")[2].setAttribute("id", "idBlocks" + count);
    newRow.getElementsByTagName("button")[0].setAttribute("onclick", "setTotalAmount(" + count + ")");
    newRow.getElementsByTagName("button")[0].innerHTML = "0 Total Items";

    newRow.getElementsByTagName("button")[1].setAttribute("onclick", "setStackAmount(" + count + ")");
    newRow.getElementsByTagName("button")[1].innerHTML = "0 Stacks 0 Items";
    
    newRow.getElementsByClassName("buttonDelete")[0].setAttribute("onclick", "deleteColumn(row" + count + ")");

    main.appendChild(newRow);
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

function deleteColumn(a){
    if(a == row1 && count == 2){
        alert("You cannot delete last element from the list");
    }
    else{
        a.remove();
        othertabs = true;
        tabindex = 1;
        tabiterator = 1;
        while(othertabs){
            rowcurrent = document.getElementById("row" + tabindex);
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
                numberChange = rowcurrent.getElementsByClassName("num");
                numberChange = numberChange[0];
                numberChange.innerHTML = tabiterator;
                delColumn = rowcurrent.getElementsByClassName("del");
                delColumn = delColumn[0];
                delColumn = delColumn.getElementsByClassName("buttonDelete");
                delColumn = delColumn[0];
                delColumn.setAttribute("onclick", "deleteColumn(row" + tabiterator + ")");
                tabindex++;
                tabiterator++;
            }
        }
    }
}