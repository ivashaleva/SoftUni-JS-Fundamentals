function solve(arr, rotationsCount) {

    for (let rotation = 1; rotation <= rotationsCount; rotation++) {
        let firstEl = arr.shift();
        arr.push(firstEl);
    }
    console.log(arr.join(' '));

}
solve ([51, 47, 32, 61, 21], 2);