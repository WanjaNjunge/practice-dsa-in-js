// Given an array of integers, sort the array

function bubbleSort(array) {
    let swapped
    // Loop through each element in the array and compare it with its adjacent elements until no more changes
    do {
        swapped = false
        for(i = 0; i < array.length - 1; i++) {
        if(array[i] > array[i+1]) {
            /*
            alternative
            [array[i], array[i+1]] = [array[i+1], array[i]]
            */
            let temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
            swapped = true
        }
        
        }
    } while(swapped)
}

const arr = [8, 20, -2, 4, -6]
bubbleSort(arr)
console.log(arr) // [-6, -2, 4, 8, 20]