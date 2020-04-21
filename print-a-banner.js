function  printBanner(sentence) {

    let outterline = '';
    let count = 0;

    while (count < (sentence.length + 4)) {
        outterline += '*';
        count++;
    }

    let printString = '* ' + sentence + ' *';

    console.log(outterline);
    console.log(printString);
    console.log(outterline);

}

printBanner("Welcome to DigitalCrafts");
console.log('-------');
printBanner("Let's have an Awesome Day!!!");