function commonElements(kArray) {
    let result = [];
    let text = 0;
    const arr = [];
    const arr2 = [];
    for (let i = 0; i < kArray.length; i++) {
        if(kArray[i] > kArray[i+1]){
            for(let d = 0; d < kArray[i+1].length; d++){
                if(kArray[i].includes(kArray[i+1][d])){
                    arr.push(kArray[i+1][d]);
                }
            }
            for(let d = 0; d < kArray[i-1].length; d++){
                if(arr.includes(kArray[i - 1][d])){
                    arr2.push(kArray[i - 1][d]);
                }
            }
        }
    }
    for(let i = 0; i < arr2.length; i++){
        result.push(arr2[i]);
    }
    return result;
}

console.log(commonElements([[1, 2, 3], [1,2,3,4], [1,2]]));