import React, { Component } from 'react';


//keypad
class ButtonPage extends Component {
    buttonPressed = (e) =>{
        this.props.buttonPressed(e.target.name);
    };

render(){
    return (
    <div className="keypad">
        <button variant="outlined" name="CE" onClick={this.buttonPressed} style={{  minWidth: '75px', minHeight: '50px'}}>CE</button>
        <button variant="outlined" name="/" onClick={this.buttonPressed} style={{ minWidth: '75px', minHeight: '50px'}}>/</button>
        <button variant="outlined" name="*" onClick={this.buttonPressed} style={{ minWidth: '75px', minHeight: '50px'}}>*</button>
        <button variant="outlined" name="C" onClick={this.buttonPressed} style={{ minWidth: '75px', minHeight: '50px'}}>Clear</button><br/>

        <button variant="outlined" name="1" onClick={this.buttonPressed} style={{ minWidth: '75px', minHeight: '50px'}}>1</button>
        <button variant="outlined" name="2" onClick={this.buttonPressed} style={{ minWidth: '75px', minHeight: '50px'}}>2</button>
        <button variant="outlined" name="3" onClick={this.buttonPressed} style={{ minWidth: '75px', minHeight: '50px'}}>3</button>
        <button variant="outlined" name="%" onClick={this.buttonPressed} style={{ minWidth: '75px', minHeight: '50px'}}>%</button><br/>

        <button variant="outlined" name="4" onClick={this.buttonPressed} style={{maxWidth: '50px', maxHeight: '50px', minWidth: '75px', minHeight: '50px'}}>4</button>
        <button variant="outlined" name="5" onClick={this.buttonPressed} style={{maxWidth: '50px', maxHeight: '50px', minWidth: '75px', minHeight: '50px'}}>5</button>
        <button variant="outlined" name="6" onClick={this.buttonPressed} style={{maxWidth: '50px', maxHeight: '50px', minWidth: '75px', minHeight: '50px'}}>6</button>
        <button variant="outlined" name="+" onClick={this.buttonPressed} style={{maxWidth: '50px', maxHeight: '50px', minWidth: '75px', minHeight: '50px'}}>+</button><br/>

        <button variant="outlined" name="7" onClick={this.buttonPressed} style={{maxWidth: '50px', maxHeight: '50px', minWidth: '75px', minHeight: '50px'}}>7</button>
        <button variant="outlined" name="8" onClick={this.buttonPressed} style={{maxWidth: '50px', maxHeight: '50px', minWidth: '75px', minHeight: '50px'}}>8</button>
        <button variant="outlined" name="9" onClick={this.buttonPressed} style={{maxWidth: '50px', maxHeight: '50px', minWidth: '75px', minHeight: '50px'}}>9</button>
        <button variant="outlined" name="-" onClick={this.buttonPressed} style={{maxWidth: '50px', maxHeight: '50px', minWidth: '75px', minHeight: '50px'}}>-</button><br/>

        <button variant="outlined" name="." onClick={this.buttonPressed} style={{maxWidth: '50px', maxHeight: '50px', minWidth: '75px', minHeight: '50px'}}>.</button>
        <button variant="outlined" name="0" onClick={this.buttonPressed} style={{maxWidth: '50px', maxHeight: '50px', minWidth: '75px', minHeight: '50px'}}>0</button>
        <button variant="outlined" name="=" onClick={this.buttonPressed} style={{maxWidth: '100px', maxHeight: '50px', minWidth: '150px', minHeight: '50px'}}>=</button>
    </div>
    );
}
}

export default ButtonPage;