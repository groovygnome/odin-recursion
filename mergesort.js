function mergeSort(arr) {
    if (arr.length == 1) {
        return arr;
    }
    else {
        let mid = Math.floor(arr.length / 2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid);
        left = mergeSort(left);
        right = mergeSort(right);
        sorted = [];
        let i = 0;
        let j = 0;
        while (i < left.length || j < right.length) {
            if ((left[i] < right[j] && left[i] != undefined) || (right[j] == undefined)) {
                sorted.push(left[i]);
                i++;
            } else if (right[j] != undefined || (left[i] == undefined)) {
                sorted.push(right[j]);
                j++;
            }
        }
        return sorted;
    }


}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
