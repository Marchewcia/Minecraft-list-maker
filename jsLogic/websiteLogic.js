function loadOrNew(){
    input = true; //temp
    if(input){
        count = 1;
    }
}

function addNewColumn(){
    //rewrite with document.createElement();
    main.innerHTML += '<div class="row" id="row' + count + '"><div class="num">' + count + '</div><div class="mname">Block/Item name</div><div class="amount">Total amount(Stacks, Blocks)</div><div class="del"><button class="buttonDelete" onclick="deleteColumn(row' + count + ')">Delete element</button></div></div></div>';
    count++;
}

function deleteColumn(a){
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

function saveData(){
    rowData = document.getElementsByClassName("itemName");

    // for(i = )
}

// function loadData(){
//     for(i = 0; i < rowData)
// }