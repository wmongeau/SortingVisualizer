import React from 'react';
import './SortingVisualizer.css';
import {getMergeSortAnimations, getBubbleSortAnimations, getQuickSortAnimations, getHeapSortAnimations, getSelectionSortAnimations, getInsertionSortAnimations} from '../sortingAlgorithms/sortingAlgorithms';
import { Button } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue'
import SplitButton from './SplitButton';
import ContinuousSlider from './ContinuousSlider';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: blue[300]
        }
    }
})

export default class SortingVisualizer extends React.Component {
    constructor(props){
        super([props]);
        this.state = {
            array:[],
            width: window.innerWidth,
            height: window.innerHeight,
            speed:4
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
        const heightBars = Math.floor(0.85*this.state.height);
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
                const color = i % 3 === 0 ? 'red' : '#64b5f6';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.state.speed);
            }
            else{
                setTimeout(() => {
                    const [barOneIndex, newHeight] = animations[i]
                    const barOneStyle =  arrayBars[barOneIndex].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * this.state.speed);
            }
        }
    }

    quickSort(){
        const animations = getQuickSortAnimations(this.state.array);
        for(let i = 0; i<animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 4 !== 2 && i % 4 !== 3;
            if(isColorChange){
                const [barOneIndex,barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                const color = i % 4 === 0 ? 'red' : '#64b5f6';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.state.speed);
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
                }, i * this.state.speed);
            }
        }
    }

    heapSort(){
        const animations = getHeapSortAnimations(this.state.array);
        console.log(animations, "Animations");
        for(let i = 0; i<animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 5 !== 4;
            if(isColorChange){
                const [barOneIndex,barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                const color = (i % 5 === 0 || i % 5 === 2) ? 'red' : '#64b5f6';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.state.speed);
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
                }, i * this.state.speed);
            }
        }
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
                const color = i % 3 === 0 ? 'red' : '#64b5f6';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.state.speed);
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
                }, i * this.state.speed);
            }
        } 
    }

    selectionSort(){
        const animations = getSelectionSortAnimations(this.state.array);
        for(let i = 0; i<animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if(isColorChange){
                const [barOneIndex,barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                const color = i % 3 === 0 ? 'red' : '#64b5f6';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.state.speed);
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
                }, i * this.state.speed);
            }
        } 
    }

    insertionSort(){
        const animations = getInsertionSortAnimations(this.state.array);
        for(let i = 0; i<animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if(isColorChange){
                const [barOneIndex,barTwoIndex] = animations[i];
                if(barOneIndex !== -1 && barTwoIndex !== -1){
                    const barOneStyle = arrayBars[barOneIndex].style;
                    const barTwoStyle = arrayBars[barTwoIndex].style;
                    const color = i % 3 === 0 ? 'red' : '#64b5f6';
                    setTimeout(() => {
                        barOneStyle.backgroundColor = color;
                        barTwoStyle.backgroundColor = color;
                    }, i * this.state.speed);
                }
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
                }, i * this.state.speed);
            }
        } 
    }

    changeAnimationSpeed(value){
        console.log(this.state)
        this.setState({
            speed:value
        });
        console.log(value);
    }

    render(){
        const {array} = this.state;
        return(
            <MuiThemeProvider theme={theme}>
                <div className="container">
                    <div className="array-container">
                        {array.map((val, i) => {
                            return(
                                <div className="array-bar" key = {i} style ={{height: `${val}px`}}> </div>
                            );                    
                        })}
                    </div>
                    <div className="buttons">
                        <div className="button">
                            <Button variant="contained" onClick={() => this.resetArray()}>Generate a new Array!</Button>
                        </div>
                        <div className="button">
                            <SplitButton quickSort={() => this.quickSort()} mergeSort={() => this.mergeSort()} heapSort={() => this.heapSort()} bubbleSort={() =>   this.bubbleSort()} selectionSort={() => this.selectionSort()} insertionSort={() => this.insertionSort()}></SplitButton>
                        </div>
                        <div className="element">
                            <ContinuousSlider changeSpeed={this.changeAnimationSpeed.bind(this)} defaultValue={this.state.speed}/>
                        </div>
                    </div> 
                </div>         
            </MuiThemeProvider>
        );
    }
}

