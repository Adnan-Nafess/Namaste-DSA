// Merge Sorted Array Leetcode => 88

function mergeSortedArray(nums1, m, nums2, n) {
  let p1 = m - 1;
    let p2 = n - 1;
    let p = m + n - 1;

    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }

    // If nums2 still has elements left, copy them
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }

}


let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
mergeSortedArray(nums1, m, nums2, n)

console.log(nums1);