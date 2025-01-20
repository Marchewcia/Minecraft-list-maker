// function download(){}

function scrapeData(){
    let scrapedData = [];
    let parent = document.getElementsByTagName("tbody")[0];
    for(let i = 1; i < count; i++){
        scrapedData[i] = parent.getElementsByTagName("tr")[i].innerHTML;
    }
    scrapedData[0] = count;
    console.log(scrapedData);
}

// function saveToJ


//test

function insertData(){
    let parent = document.getElementsByTagName("tbody")[0];
    parent.getElementsByTagName("tr")[1].remove();
    let fileData = [];
    for(let i = 1; i < fileData[0]; i++){

    }
}


//for scrapeData
/*
make it that it takes the neccesary stuff from divs and td's
make count x3
then when new document is loading .json
make it clone node, delete first row and dupe node for each row while inserting neccesary data
then replace tbody with edited tbody

todo at home because lazy at school
*/