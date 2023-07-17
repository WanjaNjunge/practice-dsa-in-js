//Through iteration
function binarySearch(array, key) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((right + left) / 2);
        if (key === array[mid]) return mid;
        else if (key < array[mid]) right = mid - 1; // search in one half
        else left = mid + 1; // the other half of the list
    }

    return -1;
}

// test function
function verify(index) {
    index!==-1?
    console.log("Target found at "+index):console.log("Target not found")
}



numbers = [2, 7, 13, 4]
const ans = binarySearch(numbers, 8);
verify(ans)