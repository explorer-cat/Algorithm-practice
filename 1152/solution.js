function solution() {
    let reg =  /\s/g;
    const input = 'The Curious Case of Benjamin Button'
    let count = 0;
    let word = input.trim().split(' ');

    for(let i = 0; i < word.length; i++) {
        if(word[i] !== ' '){
            count++;
        }
    }

    console.log("count",count)

}

solution()