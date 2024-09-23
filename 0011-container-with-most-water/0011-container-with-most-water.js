/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(a) {
    let ans = 0;
    let l = 0;
    let r = a.length - 1;
    while(l< r){
        let s = (r-l) * Math.min(a[l],a[r]);
        ans = Math.max(ans, s);
        if(a[l] > a[r]){
            r--;
        } else {
            l++;
        }
    }
    return ans;
};