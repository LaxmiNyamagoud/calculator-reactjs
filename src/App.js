import React, { Component } from 'react';
import ButtonPage from './ButtonPage';
import Result from './Result';
import  './App.css';

//app component 
class App extends Component {
  state={
    result:''
  }


buttonPressed= buttonValue =>{
  if(buttonValue === "=")
  {
    this.calCulate();
  }else if(buttonValue === "C")
  {
    this.reset();
  }else if(buttonValue === "CE")
  {
    this.clearEntry();
  }else
  this.setState({
    result:this.state.result + buttonValue
  });
};
//eval() evaluates the expression
calCulate = () =>
{
this.setState({
  result:eval(this.state.result)

});
}
//clear button is pressed
reset = () => {
  this.setState({
    result:""
  });
}
//clear entry(CE)
clearEntry = () => {
  this.setState({
    result:this.state.result.slice(0,-1)
  });
}

render() {
  return (
  <div className="App">
      <div className="Calculator">
          <Result result={this.state.result}/>
          <ButtonPage buttonPressed={this.buttonPressed}/>
      </div>
  </div>
  )
}
}
export default App;