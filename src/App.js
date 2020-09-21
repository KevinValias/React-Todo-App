import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoComponent from './TodoComponent';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      todos: []
    }
  }
  // toggle = () => {
  //   this.setState({isClicked: !this.state.isClicked})
  // }
  handleChange = (event) => {
    this.setState({input: event.target.value})
    }

    formSubmit = (event) => {
      event.preventDefault()
      this.setState({
        todos : [...this.state.todos, this.state.input],
        input: ''
      })
    }
  
  render() {
  console.log('***is state***', this.state.isClicked)
  return (
     <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <form>
           <input value={this.state.input} onChange={this.handleChange}/>
           <button onClick={this.formSubmit}>Submit</button>
         </form>
         <TodoComponent todos={this.state.todos} />
       </header>
     </div>
   );
 }
}
        

export default App;
