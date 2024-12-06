function loadOrNew(){
    input = true; //temp
    if(input){//true:new
        count = 2;
        initializeFirstMenu();
    }
}

function initializeFirstMenu(){
    tempFirstMenu = document.getElementById("firstRow");
    firstMenu = tempFirstMenu.cloneNode(false);
    blockname = ["dirt", "stone", "cobblestone", "oak_log", "oak_planks"];
    for(i = 0; i < blockname.length; i++){
        itemId = "item" + blockname[i].charAt(0).toUpperCase() + blockname[i].slice(1);
        firstMenu.appendChild(document.createElement("option"));
        firstMenu.getElementsByTagName("option")[i].setAttribute("id", itemId);
        firstMenu.getElementsByTagName("option")[i].setAttribute("value", blockname[i]);
        firstMenu.getElementsByTagName("option")[i].innerHTML = blockname[i];
        if(i == 0){
            firstMenu.getElementsByTagName("option")[i].setAttribute("selected", "");
        }
    //     optiontemp = option;
    //     optiontemp.setAttribute("value", blockname[i])
    //     optiontemp.innerHTML = blockname[i];
    //     blockSelector.appendChild(optiontemp);
    // 
    }
    document.getElementById("firstRow").remove();
    document.getElementsByClassName("mname")[1].appendChild(firstMenu);
}

function addNewColumn(){
    oldRow = document.getElementById("row1");
    newRow = oldRow.cloneNode(true);
    // console.log(newRow)


    // item = dataTransferItemList();
    // console.log(count);
    currentRow = "row" + count;
    // console.log(currentRow);

    // fragment = document.createDocumentFragment();
    // newRow = fragment.appendChild(document.createElement("div"));
    // newRow.getElementsByTagName("div")[0].removeAttribute("id")
    newRow.setAttribute("id", currentRow)
    // newRow.getElementsByName("div")[1].setAttribute("class", "row");

    // // newRow.row = appendChild(document.createElement("div"));
    // newRow.row.getElementsByName("div")[1].setAttribute("class", "num");
    newRow.getElementsByClassName("num")[0].innerHTML = count
    
    // newRow.row = appendChild(document.createElement("div"));
    // newRow.row.getElementsByName("div")[2].setAttribute("class", "mname");
    // newRow.getElementsByClassName("mname")[0].innerHTML = item;

    // // newRow.row = appendChild(document.createElement("div"));
    // newRow.row.getElementsByName("div")[3].setAttribute("class", "amount");
    // newRow.row.getElementsByName("div")[3].innerHTML = "Total amount(Stacks, Blocks)";

    // newRow.row = appendChild(document.createElement("div"));
    // newRow.row.getElementsByName("div")[4].setAttribute("class", "del");
    // newRow.row.getElementsByName("div")[4].appendChild(document.createElement("button"));
    // newRow.row.getElementsByName("div")[4].child().first().setAttribute("class", "buttonDelete");
    newRow.getElementsByClassName("buttonDelete")[0].removeAttribute("onclick");
    newRow.getElementsByClassName("buttonDelete")[0].setAttribute("onclick", "deleteColumn(row" + count + ")");
    // newRow.row.getElementsByName("div")[4].child().first().innerHTML = "Delete element";

    main.appendChild(newRow);
    count++;
}

function deleteColumn(a){
    console.log(a == row1);
    console.log(count == 2);
    if(a == row1 && count == 2){
        alert("You cannot delete last element from the list");
    }
    else{
        console.log(count);
        a.remove();
        saveData();
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

function saveData(){
    rowData = document.getElementsByClassName("itemName");

    // for(i = )
}

// function loadData(){
//     for(i = 0; i < rowData)
// }

//all block list
function dataTransferItemList(){
    const option = document.createElement("option")
    blockSelector = document.createElement("select");
    blockSelector.setAttribute("class", "itemName");
    
    blockname = ["dirt", "stone", "cobblestone", "oak_log", "oak_planks"];
    for(i = 0; i < blockname.length; i++){
        optiontemp = option;
        optiontemp.setAttribute("value", blockname[i])
        optiontemp.innerHTML = blockname[i];
        blockSelector.appendChild(optiontemp);
    }
    return blockSelector;
}