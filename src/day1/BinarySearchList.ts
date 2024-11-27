export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;
    do {
        const midPoint = Math.floor(low + (high - low) / 2);
        const midValue = haystack[midPoint];

        if (midValue === needle) {
            return true;
        } else if (midValue > needle) {
            high = midPoint;
        } else {
            low = midPoint + 1;
        }
    } while (low < high);
    return false;
}
