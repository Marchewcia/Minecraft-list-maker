function loadOrNew(){
    input = true; //temp
    if(input){
        count = 0;
    }
}

function addNewColumn(){
    count++;
    main.innerHTML += '<div class="row" id="row' + count + '"><div class="num">No.</div><div class="mname">Block/Item name</div><div class="amount">Total amount(Stacks, Blocks)</div><div class="del">Delete item</div></div></div>';
}