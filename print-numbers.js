function printNumbers(start, end) {
    let count = start;
    while (count <= end) {
        console.log(count);
        count ++;
    } 
}

function printNumbers2(start, end) {
    for (let count = start; count <= end; count++) {
        console.log(count);
    }
}

printNumbers(1,10);
console.log("--------")
printNumbers2(11, 20);

