/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(a, b) {
    const tmp = [...a,...b].sort((a,b) => a - b);
    let m = parseInt(tmp.length/2);
    if(tmp.length%2 ==0){
        return (tmp[m] + tmp[m-1]) / 2;
    }
    else return tmp[m]
};