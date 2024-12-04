function loadOrNew(){
    input = true; //temp
    if(input){
        count = 0;
    }
}

function addNewColumn(){
    count++;

    //change id'd, generatable id for each column
    main.innerHTML += '<div class="list"';
    main.innerHTML += '<div class="num"';
    main.innerHTML += count;
    main.innerHTML += '</div>';
    main.innerHTML += '<div class="mname">';
    main.innerHTML += 'Block/Item name';
    main.innerHTML += '</div>';
    main.innerHTML += '<div class="amount">';
    main.innerHTML += 'Total amount(Stacks, Blocks)';
    main.innerHTML += '</div>';
    main.innerHTML += '<div class="del">';
    main.innerHTML += 'Delete item';
    main.innerHTML += '</div>';
    main.innerHTML += '</div>';
}