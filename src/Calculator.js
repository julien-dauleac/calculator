import React, { Component } from 'react';
import TheTitle from './components/TheTitle';
import BeautifullScreen from './components/BeautifullScreen';
import AmazingNumberButton from './components/AmazingNumberButton';
import GreatOperationButton from './components/GreatOperationButton';
import MagnificientEqualButton from './components/MagnificientEqualButton';

class Calculator extends Component {
    constructor(props){
        super(props);

        this.state = {
            result: ""
        }
    }

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <TheTitle result={this.state.result}/>
                    <BeautifullScreen result={this.state.result}/>
                    <AmazingNumberButton onClick={this.onClick}/>
                    <GreatOperationButton onClick={this.onClick}/>
                    <MagnificientEqualButton onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default Calculator;
