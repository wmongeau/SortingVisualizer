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
                swap(array,i,i+1)
                swapped = true;
            }
            else{
                animations.push([i,i])
            }
        }
    }
    while(swapped);
}

function swap(array,i,j){
    const iVal= array[i];
    array[i] = array[j];
    array[j] = iVal;
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
            swap(array, i, pivotIndex);
            pivotIndex++;
        }
        else{
            animations.push([i,i]);
        }
    }
    swap(array, pivotIndex, end);
    animations.push([pivotIndex, end]);
    return pivotIndex;
}