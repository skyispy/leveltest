const set = 97 + " " + 86 + " " + 75 + " " + 66 + " " + 55 + " " + 97 + " " + 85 + " " + 97 + " " + 97 + " " + 95;
const arr = set.split(" ").sort().reverse();
let arr2 = [];
let rank = [];
for(let i = 0; i < arr.length; i++){
    if(arr[i] === arr[i+1]){
        arr2.push(arr[i]);
    }else if(arr[i] > arr[i+1]){
        arr2.push(arr[i]);
        break
    }
}
rank.push(arr2.length)

arr2 = [];
for(let i = rank[0]; i < arr.length; i++){
    if(arr[i] === arr[i+1]){
        arr2.push(arr[i]);
    }else if(arr[i] > arr[i+1]){
        arr2.push(arr[i]);
        break
    }
}
rank.push(arr2.length)

arr2 = [];
for(let i = rank[0] + rank[1]; i < arr.length; i++){
    if(arr[i] === arr[i+1]){
        arr2.push(arr[i]);
    }else if(arr[i] > arr[i+1]){
        arr2.push(arr[i]);
        break
    }
}
rank.push(arr2.length)

console.log(rank[0] + rank[1] + rank[2]);

