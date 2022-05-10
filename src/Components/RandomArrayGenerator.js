import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import quickSortHelper from '../algorithms/quickSortHelper';
import mergeSortHelper from '../algorithms/mergeSortHelper';

export default function RandomArrayGenrator() {

    const [array, setArray] = useState([]);

    useEffect(() => {
        resetArray();
    }, [])

    const resetArray = () => {
        const array = [];
        for (let i = 0; i < 310; i++) {
            //array.push(Math.abs(Math.floor(Math.random() * (1000 - 10) - 10)));
            array.push(randomIntFromInterval(5, 750));
        }
        setArray(array);
    }

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    //-------------quick sort--------------
    function quickSort() {
        const sort = quickSortHelper(array)
        setArray(sort)
        console.log('welcome');
    }



    //-------------------------------

    // ---- old merge sort function 

    function mergeSort() {
        const sorted = mergeSortHelper(array);
        setArray(sorted)
    }


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    function heapSort() { }
    function bubbleSort() { }


    return (
        <>
            <div className='container'>
                {array.map((value, indx) => (
                    <div className='array-bar' key={indx} style={{ height: `${value}px`, color: '#fff', fontSize: '2px' }}>{value}</div>
                ))}

            </div>
            <button onClick={() => resetArray()}>Array Genrator</button>
            <button onClick={() => quickSort()}>Quick Sort</button>
            <button onClick={() => mergeSort()}>Merge Sort</button>
            <button onClick={() => resetArray()}>Heap  Sort</button>
            <button onClick={() => resetArray()}>Bubble Sort</button>
        </>

    )
}

