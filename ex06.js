function isPalindromeRecursive(word) {
    let a = 0;
    let b = word.length;
    let c = b - 1;
    return isPalindromeRecursiveHelper(word, a, c);
}

function isPalindromeRecursiveHelper(word, beginPos, endPos) {
    if(beginPos === 0){
        let text = "";
    }
    console.log(word[beginPos])
    console.log(word[endPos])
    if(word[beginPos] !== word[endPos]){
        console.log(1);
        text = false;
        return;
    }else{
        beginPos++;
        endPos--;
        console.log(beginPos - endPos)
        if((beginPos - endPos) !== -1){
            console.log(2)
            isPalindromeRecursiveHelper(word, beginPos, endPos)
        }else{
            text = true;
        }
    }
    return text;
}

console.log(isPalindromeRecursive("appleelppa"));