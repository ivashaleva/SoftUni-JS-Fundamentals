function reverce(n, nums) {
    let result =[];

    for (let i = 0; i < n; i++) {
        result[i] = nums[i];
    }
    
    let reversed = [];
    for (let i = n - 1; i >= 0; i--) {
        reversed[reversed.length] = result[i];
    }
    console.log(reversed.join(' '));
}
reverce(3, [10, 20, 30, 40, 50]);