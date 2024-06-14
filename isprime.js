function isprime(n) {
    let check = 0;
    for(let i = 1; i < n + 1; i++){
        if(n % i === 0){
            check++;
        }
    }
    if(check === 2){
        return true;
    }else {
        return false;
    }
}

console.log(isprime(31));
console.log(isprime(10));