function loadOrNew(){
    input = true; //temp
    if(input){
        count = 0;
    }
}

function addNewColumn(){
    count++;
    //rewrite with document.createElement();
    main.innerHTML += '<div class="row" id="row' + count + '"><div class="num">' + count + '</div><div class="mname">Block/Item name</div><div class="amount">Total amount(Stacks, Blocks)</div><div class="del"><button class="buttonDelete" onclick="deleteColumn(row' + count + ')">Delete element</button></div></div></div>';
}

function deleteColumn(a){
    a.remove();
    othertabs = true;
    tabindex = 1;
    tabiterator = 1;
    while(othertabs){
        rowcurrent = document.getElementById("row" + tabindex);
        //reset count if no rows present
        if(rowcurrent == null && document.getElementById("row" + (tabindex + 1)) == null){
            count = 0;
            othertabs = false;
            return;
        }
        //check if there are any other tabs
        else if(tabindex > count){
            othertabs = false;
            count = tabiterator;
            return;
        }
        //skip non existent rows
        else if(rowcurrent == null){
            tabindex++;
        }
        else{

            //dunno that stupid setAtribute ain't working
            //to fix
            rowcurrent.id = "row" + tabiterator;
            rowcurrent.getElementsByClassName("num").innerHTML = tabiterator;
            delColumn = rowcurrent.getElementsByClassName("del");
            delColumn = delColumn.getElementsByClassName("buttonDelete");
            delColumn.setAttribute("onclick", "deleteColumn(row" + tabiterator + ")");
            // rowcurrent.getElementsByClassName("del").setAttribute("onclick", "deleteColumn(row" + tabiterator + ")");
            // newDel = document.createElement('<button class="buttonDelete" onclick="deleteColumn(row' + tabiterator + ')">Delete element</button>');
            // rowcurrent.replaceChild(newDel, oldDel);
            tabindex++;
            tabiterator++;
        }
    }
}