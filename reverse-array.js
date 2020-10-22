let arr = [-3, 5, 1, 3, 2, 10];


function reverse(arr) {
    let first = 0;
    let last = arr.length - 1;

    while (first < last) {
        let temp = arr[first];
        arr[first] = arr[last];
        arr[last] = temp;
        first++;
        last--;
    }
    return arr;
}

reverse(arr);
for (const arrKey in arr) {
    console.log(arr[arrKey]);
}