import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:{
        name: 'Teagan',
        city: 'Chaska',
        zipCode: '55318'},
      userInputs: {
        name: '', 
        city: '', 
        zipCode: ''}
      }
    // //Bind context of 'this'
    // this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.cityChange = this.cityChange.bind(this)
    
  }
/*
  const numberList = [2, 3, 4];
  const newNumber = 5;

  numberList.push(newNumber);

  const newNumberList = 
  [numberList[0],numberList[1],numberList[2],newNumber];

  ... (spread) (removing the brackets)
  const newNumberList = [...numberList,newNumber];

  const bowler {
    name: 'Dane',
    lastBowlingScore: 135
  }
  const newBowler {
    name: bowler.name
    lastBowlingScore: 129
  }

  const newBowler = {
    ...bowler,
    lastBowlingScore: 129
  }
*/
  // handleChange(event){
  //   console.log(event.target.value);
  //   // this.state.user = event.target.value
  //   this.setState({
  //     user: { 
  //       ...this.state.user,
  //       name: event.target.value
  //     }
  //   })
  // }
  handleSubmit(event) {
    event.preventDefault();
    // console.log(this.state.user);
    //clear the inputs 
    this.setState({
      user: {...this.state.userInputs},
      userInputs: {
        name: '',
        city: '',
        zipCode: ''
      }
    })
  }
  // cityChange(event){
  //   this.setState({
  //     user: {
  //       ...this.state.user,
  //     city: event.target.value
  //     }
  //   })
  // }
  handleChangeFor = (propertyName) => {
    //this is a function that returns a function
    return (event) => {
      this.setState({
        userInputs: {
          ...this.state.userInputs,
          [propertyName]: event.target.value
        }
      })
    }
  }
  //anytime state changes , render gets run again
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.userInputs.name} onChange={this.handleChangeFor('name')} placeholder={'name'}/>
            <input value={this.state.userInputs.city} onChange={this.handleChangeFor('city')} placeholder={'Location'}/>
            <input value={this.state.userInputs.zipCode} onChange={this.handleChangeFor('zipCode')} placeholder={'Zip Code'}/>
            <p>you typed: {this.state.user.name} </p>
            <p>lives in: {this.state.user.city} </p>
            <p>Zip Code: {this.state.user.zipCode} </p>
            <input type="submit" value="submit" />
          </form>
      </div>
    );
  }
}

export default App;
