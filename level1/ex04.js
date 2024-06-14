const arr = [];
function base10Tostring(n) {
    if(n % 2 === 1){
        arr.push(n % 2); // 1 넣어주기
        if(!((n - 1) / 2 === 0)) base10TostringHelper((n - 1) / 2);
    }else{
        arr.push(n % 2); // 0 넣어주기
        if(!(n / 2 === 0)) base10TostringHelper(n / 2);
    }

    function base10TostringHelper(n) {
        base10Tostring(n);
    }
    const _arr = arr.reverse();
    let text = "";
    for(let i = 0; i < _arr.length; i++){
        text += _arr[i];
    }
    return text;
}

console.log(base10Tostring(100));