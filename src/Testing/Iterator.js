const arr = [2, 4, 6, 8, 1, 4];
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let count = 0;
async function iterator() {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        await sleep(500)
    }
}

iterator();