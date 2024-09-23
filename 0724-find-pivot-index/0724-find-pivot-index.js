/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (a) {
    let ok = false;
    const prefixSum = [];
    prefixSum.push(0);
    for (let i = 1; i <= a.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + a[i - 1];
    }
    for (let i = 1; i <= a.length; i++) {
        const left = prefixSum[i-1];
        const right = prefixSum[a.length] - prefixSum[i];
        if(left === right){
            ok = true;
            return i - 1;
        }
    }
    if(!ok) return -1;
};