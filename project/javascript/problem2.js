 function findTwoSum(nums, target) {
    // Using nested loops 
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

// Helper to run tests
function runTest(id, nums, target, expected) {
    const result = findTwoSum(nums, target);
    if (JSON.stringify(result) === JSON.stringify(expected)) {
        console.log(`Test ${id} Passed: nums = [${nums}], target = ${target} => [${result}]`);
    } else {
        console.error(`Test ${id} Failed: nums = [${nums}], target = ${target} | Expected [${expected}] but got [${result}]`);
    }
}

console.log("Start Two Sum Validation Tests...\n");

runTest(1, [2, 7, 11, 15], 9, [0, 1]);
runTest(2, [3, 2, 4], 6, [1, 2]);
runTest(3, [3, 3], 6, [0, 1]);

runTest(4, [1, 5, 7, 11], 12, [0, 3]);
runTest(5, [10, 20, 30, 40, 50], 90, [3, 4]);

console.log("\nTests Completed.");
