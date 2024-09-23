/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function(a) {
    let map = new Map();
    for(let x of a){
        if(map.has(x)){
            map.set(x, map.get(x) + 1);
        }
        else {
            map.set(x, 1);
        }
    }
    for(let [key, value] of map){
        if(value > a.length/2){
            return key;
        }
    }
};