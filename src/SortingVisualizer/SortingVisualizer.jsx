import React from 'react';
import './SortingVisualizer.css';
import {getMergeSortAnimations, getBubbleSortAnimations, getQuickSortAnimations} from '../sortingAlgorithms/sortingAlgorithms';

const ANIMATION_SPEED_MS = 1;

export default class SortingVisualizer extends React.Component {
    constructor(props){
        super([props]);
        this.state = {
            array:[],
            width: window.innerWidth,
            height: window.innerHeight
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount(){
        this.updateWindowDimensions();
        this.resetArray();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ 
            width: window.innerWidth, 
            height: window.innerHeight
         });
         this.resetArray();
      }

    resetArray(){
        const array = [];
        const noBars = Math.floor((0.6*this.state.width)/6);
        const heightBars = Math.floor(0.8*this.state.height);
        for(let i = 0; i<noBars; i++){
            array.push(Math.floor(Math.random()*(heightBars-5+1)+5));
        }
        this.setState({
            array
        });
    }

    mergeSort(){
        const animations = getMergeSortAnimations(this.state.array);
        for(let i = 0; i<animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i%3 !== 2;
            if(isColorChange){
                const [barOneIndex,barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                const color = i % 3 === 0 ? 'red' : '#76B3FA';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            }
            else{
                setTimeout(() => {
                    const [barOneIndex, newHeight] = animations[i]
                    const barOneStyle =  arrayBars[barOneIndex].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    quickSort(){
        const animations = getQuickSortAnimations(this.state.array);
        for(let i = 0; i<animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if(isColorChange){
                const [barOneIndex,barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                const color = i % 3 === 0 ? 'red' : '#76B3FA';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            }
            else{
                setTimeout(() => {
                    const [barOneIndex, barTwoIndex] = animations[i]
                    const barOneStyle =  arrayBars[barOneIndex].style;
                    const barTwoStyle = arrayBars[barTwoIndex].style;
                    const barOneHeight = barOneStyle.height;
                    const barTwoHeight = barTwoStyle.height;
                    barOneStyle.height = barTwoHeight;
                    barTwoStyle.height = barOneHeight;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    heapSort(){
        
    }

    bubbleSort(){
        const animations = getBubbleSortAnimations(this.state.array);
        for(let i = 0; i<animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if(isColorChange){
                const [barOneIndex,barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                const color = i % 3 === 0 ? 'red' : '#76B3FA';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            }
            else{
                setTimeout(() => {
                    const [barOneIndex, barTwoIndex] = animations[i]
                    const barOneStyle =  arrayBars[barOneIndex].style;
                    const barTwoStyle = arrayBars[barTwoIndex].style;
                    const barOneHeight = barOneStyle.height;
                    const barTwoHeight = barTwoStyle.height;
                    barOneStyle.height = barTwoHeight;
                    barTwoStyle.height = barOneHeight;
                }, i * ANIMATION_SPEED_MS);
            }
        } 
    }

    render(){
        const {array} = this.state;
        return(
            <div>
                <div className="array-container">
                    {array.map((val, i) => {
                        return(
                            <div className="array-bar" key = {i} style ={{height: `${val}px`}}> </div>
                        );                    
                    })}
                </div>
                <div className="buttons">
                    <button onClick={() => this.resetArray()}>Generate a new Array!</button>
                    <button onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button onClick={() => this.quickSort()}>Quick Sort</button>
                    <button onClick={() => this.heapSort()}>Heap Sort</button>
                    <button onClick={() => this.bubbleSort()}>Bubble Sort</button>     
                </div> 
            </div>         
        );
    }
}

