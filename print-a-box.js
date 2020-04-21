// writ a function that prints a box
// pass the length and width as parameters

function printBox(width, height){
    let outterLine = "";

    let count = 0;

    while (count < width) {
        outterLine += "*";
        count++;
    }

    let innerLine = "";    
    for (let seq = 1; seq <= width; seq++) {
        if (seq === 1 || seq === width){
            innerLine += "*";
        }
        else if (seq > 1 || seq < width){
            innerLine += " ";
        }
    }

    console.log(outterLine);

    for (let count = 0; count < (width - height); count++){
        console.log(innerLine);
    }

    console.log(outterLine);

}

printBox(8, 5);





// console.log(outterLine.join(''));
// console.log(innerLine.join(''));