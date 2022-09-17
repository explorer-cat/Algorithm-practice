let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

    let count = 0;
    let word = input.trim().split(' ');

    for(let i = 0; i < word.length; i++) {
        if(word[i] !== ''){
            count++;
        }
    }
    console.log(count)
