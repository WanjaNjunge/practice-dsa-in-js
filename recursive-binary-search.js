function recursiveBinarySearch(key, array) {
    let mid = Math.floor(array.length / 2)
    
    // base case
    if (array.length === 1 && array[0] != key) {
        return false;
    }

    if (key === array[mid]) {
        return true;
    } else if (key < array[mid]) {
        return recursiveBinarySearch(key, array.slice(0, mid));
    } else if (key > array[mid]) {
        return recursiveBinarySearch(key, array.slice(mid))
    }
}





numbers = [2, 3, 4, 5]
const ans = recursiveBinarySearch(9, numbers);
console.log(ans)