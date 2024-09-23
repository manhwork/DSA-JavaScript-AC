/**
 * @param {number[]} nums
 * @return {number}
 */

let max = (a,b) => {
    if(a>b) return a;
    return b;
}
var findMaxConsecutiveOnes = function(a) {
    a.push(3);
    let cnt = 0;
    let ans = 0 ;
    for(let i=0;i<a.length;i++){
        if(a[i] === 1){
            cnt++;
        }
        else {
            ans = max(ans,cnt);
            cnt = 0;
        }
    }
    return ans;
};