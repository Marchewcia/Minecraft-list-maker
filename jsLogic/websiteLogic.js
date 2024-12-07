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

    newRow.setAttribute("id", currentRow)
    newRow.getElementsByClassName("num")[0].innerHTML = count
    newRow.getElementsByClassName("buttonDelete")[0].removeAttribute("onclick");
    newRow.getElementsByClassName("buttonDelete")[0].setAttribute("onclick", "deleteColumn(row" + count + ")");
    
    main.appendChild(newRow);
    count++;
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