export function getMergeSortAnimations(array) {

        const animations = [];
        if(array.length<=1){
            return array;
        }
        const auxiliaryArray = array.slice();
        mergeSort(array,0,array.length-1,auxiliaryArray,animations);
        return animations;
}

function mergeSort(mainArray, start, end, auxiliaryArray, animations){
    if(start === end){
        return;
    }

    const middle = Math.floor((start+end)/2);
    mergeSort(auxiliaryArray,start,middle,mainArray,animations);
    mergeSort(auxiliaryArray,middle+1,end,mainArray,animations);
    merge(mainArray,start,middle,end,auxiliaryArray,animations);
}

function merge(mainArray, start, middle, end, auxiliaryArray, animations){
    let k = start;
    let i = start;
    let j = middle + 1;
    while(i<=middle && j<=end){
        //This is what we are comparing, push them once to change colors, push them twice to revert colors
        animations.push([i,j]);
        animations.push([i,j]);
        if(auxiliaryArray[i]<=auxiliaryArray[j]){
            animations.push([k,auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
        }
        else {
            animations.push([k,auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }

    while(i<=middle){
        animations.push([i,i]);
        animations.push([i,i]);
        animations.push([k,auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }

    while(j<=end){
        animations.push([j,j]);
        animations.push([j,j]);
        animations.push([k,auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
    }
}

export function getBubbleSortAnimations(array){
    const animations = [];
    if(array.length<=1){
        return array;
    }
    const auxiliaryArray = array.slice();
    bubbleSort(auxiliaryArray,animations);
    return animations;
}

function bubbleSort(array, animations){
    let swapped = true;
    do {
        
        swapped = false;
        for(let i = 0; i<array.length-1; i++){
            animations.push([i,i+1]);
            animations.push([i,i+1]);
            if(array[i]>array[i+1]){
                animations.push([i,i+1])
                array = swap(array,i,i+1)
                swapped = true;
            }
            else{
                animations.push([i,i])
            }
        }
    }
    while(swapped);
}

export function getQuickSortAnimations(array){
    const animations = [];
    if(array.length<=1){
        return array;
    }
    const auxiliaryArray = array.slice();
    quickSort(auxiliaryArray,0,array.length-1,animations);
    return animations;
}

function quickSort(array, start, end, animations){
    if(start>=end){
        return;
    }
    let index = partition(array, start, end, animations);
    quickSort(array, start, index-1, animations);
    quickSort(array, index+1, end, animations);
}

function partition(array, start, end, animations){
    const pivotValue = array[end];
    let pivotIndex = start;
    for(let i = start; i<end; i++){
        animations.push([i,end]);
        animations.push([i,end]);
        if(array[i]<pivotValue){
            animations.push([i,pivotIndex])
            array = swap(array, i, pivotIndex);
            pivotIndex++;
        }
        else{
            animations.push([i,i]);
        }
        if(i<end-1){
            animations.push([i,i]);
        }
    }
    array = swap(array, pivotIndex, end);
    animations.push([pivotIndex, end]);
    return pivotIndex;
}

export function getHeapSortAnimations(array){
    const animations = [];
    if(array.length<=1){
        return array;
    }
    const auxiliaryArray = array.slice();
    heapSort(auxiliaryArray,animations);
    return animations;
}

function heapSort(array, animations){
    array = buildMaxHeap(array, animations);
    for(let i = array.length-1; i>=0; i--){
        animations.push([0,i]);
        animations.push([0,i]);
        animations.push([0,i]);
        animations.push([0,i]);
        animations.push([0,i]);
        array = swap(array, 0, i);
        array = bubbleDown(array,0,i-1,animations);
    }
    return array;
}

function bubbleDown(array, index, end, animations){
    const left = getLeftChildIndex(index);
    const right = getRightChildIndex(index);
    let largest = index;
    if(left<=end){
        animations.push([left,index]);
        animations.push([left,index]);
    }
    else{
        animations.push([index,index]);
        animations.push([index,index]);
    }
    if(left <= end && array[left] > array[index]){
        largest = left;
    }

    if(right<=end){
        animations.push([right,index]);
        animations.push([right,index]);
    }
    else{
        animations.push([index,index]);
        animations.push([index,index]);
    }
    if(right <= end && array[right] > array[largest]){
        largest = right;
    }

    if(largest !== index){
        animations.push([largest,index]);
        array = swap(array, largest, index);
        array = bubbleDown(array, largest, end, animations);
    }
    else{
        animations.push([index,index]);
    }
    return array;
}

function buildMaxHeap(array, animations){
    for(let i=Math.floor(array.length/2)-1; i>=0 ; i--){
        array = bubbleDown(array,i,array.length-1, animations);
    }
    return array;
}

function getLeftChildIndex(parent){
    return 2*parent + 1;
}

function getRightChildIndex(parent){
    return 2*parent + 2;
}

export function getSelectionSortAnimations(array){
    const animations = [];
    if(array.length<=1){
        return array;
    }
    const auxiliaryArray = array.slice();
    selectionSort(auxiliaryArray,animations);
    return animations;
}

function selectionSort(array,animations){
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            animations.push([min,j]);
            animations.push([min,j]);
            if (array[min] > array[j]) {
                min = j;
            }
            if(j<array.length-1){
                animations.push([min,min]);
            }
        }
        if (min !== i) {
            array=swap(array,min,i);
            animations.push([min,i])
        }
        else{
            animations.push([min,min])
        }
    }
    animations.push([array.length-1,array.length-1]);
    return array;
}

export function getInsertionSortAnimations(array){
    const animations = [];
    if(array.length<=1){
        return array;
    }
    const auxiliaryArray = array.slice();
    insertionSort(auxiliaryArray,animations);
    return animations;
}

function insertionSort(array,animations){
    for(let i = 1; i<array.length; i++){
        let j = i;
        while(j>0){
            if(array[j-1]>array[j]){
                animations.push([j,j-1]);
                animations.push([j,j-1]);
                animations.push([j,j-1]);
                array=swap(array,j,j-1);
            }
            else{
                animations.push([-1,-1]);
                animations.push([-1,-1]);
                animations.push([j,j]);
            }
            j--;
        }
    }
    return array;
}

function swap(array,i,j){
    const iVal= array[i];
    array[i] = array[j];
    array[j] = iVal;
    return array;
}