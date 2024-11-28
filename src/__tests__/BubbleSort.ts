import bubble_sort from "@code/BubbleSort";

test("bubble-sort", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];
    const arr2 = [1, 3, 9, 7, 4, 5, 2, 8, 6];
    debugger;
    bubble_sort(arr);
    bubble_sort(arr2);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
    expect(arr2).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
