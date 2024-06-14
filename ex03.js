// 소수 구하기 함수
function isprime(n) {
    let check = 0;
    for(let i = 1; i < n + 1; i++){
        if(n % i === 0) check++;
    }
    if(check === 2){
        return true;
    }else {
        return false;
    }
}


function primeFactor(n) {
    const arr = []; // 인수를 담을 배열
    const _arr = []; // 소인수를 담을 배열
    for(let i = 1; i < n + 1; i++){
        if(n % i === 0) arr.push(i);
    }
    for(let i = 0; i < arr.length; i++){
        if(isprime(arr[i])) _arr.push(arr[i]);
    }
    let text = "";
    for(let i = 0; i < _arr.length; i++){
        text += _arr[i];
        text += ", "
    }
    return text;
}

console.log(primeFactor(55));