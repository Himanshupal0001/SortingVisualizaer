export default function quickSortHelper(array) {
    const start = 0;
    const end = array.length;

    if (start < end) return array;

    const PI = partition(array);
    quickSortHelper(array, start, PI - 1);
    quickSortHelper(array, PI + 1, end);
    return 'welcome'
}

function partition(array) {
    const start = 0;
    const end = array.length;
    const pivot = array[end];
    const PI = start;

    for (let i = 0; i < end; i++) {
        if (array[i] <= pivot) {
            swap(array[i], array[PI]);
            PI++;
        }
    }
    swap(array[PI], array[end]);
    return PI;
}

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp
}