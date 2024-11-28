function swap(arr: number[], idx1: number, idx2: number): void {
    const tmp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = tmp;
}

export default function bubble_sort(arr: number[]): void {
    console.log(arr);
    for (let i = 0, end = arr.length; i < end; i++) {
        for (let j = 0; j < end - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
        console.log(`i: ${i}`, arr);
    }
}
