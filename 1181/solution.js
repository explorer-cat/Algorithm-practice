function solution() {
    const input = ['but','i','wont','hesitate','no','more','no','more','it','cannot','wait','im','yours']

    //set으로 중복 단어 제거
    Array.from(new Set(input))
    //사전순으로 한번 정렬
    .sort()
    //길이순으로 정렬
    .sort((a,b) => a.length - b.length)
    //하나씩 출력.
    .forEach(i => console.log(i))

}

solution()