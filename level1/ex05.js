function swap(strArr, idx1, idx2) {
    const pre = strArr[idx1]; // 바꿔주기 위해 변수로 저장
    strArr[idx1] = strArr[idx2];
    strArr[idx2] = pre;
    console.log(strArr);
    if(strArr[1] === "1") return;
    if(strArr[0] === "2") swap(strArr, 0, 1);
    if(strArr[0] === "3") swap(strArr, 1, 2);
    if(strArr[0] === "1")permute(strArr, strArr[0], strArr[2]);
}
function permute(strArr, begin, end) {
    strArr[2] = strArr[1]; // 가운데에서 끝
    strArr[0] = end; // 끝에서 시작
    strArr[1] = begin // 시작에서 가운데
    console.log(strArr);
    swap(strArr, 1, 2);
}
function permuteArray(strArr) {
    console.log(strArr);
    swap(strArr, 1, 2);
}

permuteArray(["1", "2", "3"]);