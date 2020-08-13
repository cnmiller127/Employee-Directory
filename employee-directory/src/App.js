import React, { Component } from "react";
import "./style.css";
import directory from "./employees.json"
import EmployeeCard from "./components/EmployeeCard";
import Search from "./components/Search"
import Jumbotron from "./components/Jumbotron";

class App extends Component {
  state = {directory: directory, filtered: directory};

  componentWillMount() {
    var i = 1;
    const directory = this.state.directory.map(employee => {
      employee.key = i;
      i++;
      return employee
    })
    this.setState({directory: directory})
    console.log(this.state)
    
    }
  
render(){

  return (
    <div className = "container-fluid" onChange = {this.handleChange} onSubmit = {this.handleSubmit} >
      <Jumbotron />
      <Search /> 
      {
      this.state.filtered.map(employee => (
        <EmployeeCard>
          {employee}
        </EmployeeCard>
      )
      )}
    </div>
 
    );
  }


  handleChange = event => {
    let value = event.target.value;
    console.log(event.target);
    const results = this.state.directory.filter(employee => employee.name.toLowerCase().includes(value.toLowerCase()));
    this.setState({filtered: results}, () => {
      this.render();
      console.log(this.state);
    });
  
    // this.handleSubmit(value)
    
}
handleSubmit = event => {
  event.preventDefault();
 
}
}




export default App;