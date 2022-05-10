import React from 'react'

export default function mergeSortHelper(array) {
    if (array.length === 1) return array;
    const middle = Math.floor(array.length / 2);
    const firstHalf = mergeSortHelper(array.slice(0, middle));
    const secondHalf = mergeSortHelper(array.slice(middle));
    const sortedArray = [];

    let i = 0, j = 0;

    while (i < firstHalf.length && j < secondHalf.length) {
        if (firstHalf[i] < secondHalf[j]) {
            sortedArray.push(firstHalf[i++])
        }
        else {
            sortedArray.push(secondHalf[j++]);
        }
    }

    while (i < firstHalf.length) sortedArray.push(firstHalf[i++]);
    while (j < secondHalf.length) sortedArray.push(secondHalf[j++]);
    return sortedArray;

}


/*
        function mergeSort() {
            const animations = RandomArrayMerger(array);
    
            for (let i = 0; i < animations.length; i++) {
                const arraybar = document.getElementsByClassName('array-bar');
                const isColorChange = i % 3 !== 2;
                if (isColorChange) {
                    const [barOneId, barTwoId] = animations[i];
                    console.log(barOneId, barTwoId);
                    const barOneStyle = arraybar[barOneId].style;
                    const barTwoStyle = arraybar[barTwoId].style;
                    const color = i % 3 === 0 ? 'red' : 'green';
                    setTimeout(() => {
                        barOneStyle.backgroudColor = color;
                        barTwoStyle.backgroudColor = color;
                    }, i * 1000);
                }
                else {
                    setTimeout(() => {
                        const [barOneId, newHeight] = animations[i];
                        const barOneStyle = arraybar[barOneId].style;
                        barOneStyle.height = `${newHeight}px`
                    }, i * 1000);
                }
            }
        }
        */
