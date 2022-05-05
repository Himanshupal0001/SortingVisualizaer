import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './Randomarray.css'

export default function RandomArrayJanrator() {

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
    }

    function quickSortHelper(arr) {
        const start = 0;
        const end = arr.length;

        if (start < end) return arr;

        const PI = partition(arr);
        quickSortHelper(arr, start, PI - 1)
        quickSortHelper(arr, PI + 1, end)
    }

    function partition(arr) {
        const start = 0;
        const end = arr.length;
        const pivot = arr[end];
        const PI = start;

        for (let i = 0; i < end; i++) {
            if (arr[i] <= pivot) {
                swap(arr[i], arr[PI]);
                PI++;
            }
        }
        swap(arr[PI], arr[end]);
        return PI;
    }

    function swap(arr, i, j) {
        let temp;
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp
    }

    //-------------------------------




    function mergeSort() {
        const sorted = mergeSortHelper(array);
        setArray(sorted)
    }

    function mergeSortHelper(array) {
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


    //const mergeSort = array => {


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

