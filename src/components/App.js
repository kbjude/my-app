 import '../App.css';
 import React, {Component} from 'react';
 import Bikes from './bikes';
 import Cars from './cars';
 import Current from './Current';
 import ContactCard from './contactcard';
 import cardsData from './cardsData';
 import Students from './students';

class App extends Component {
  constructor(){
    super()
    this.state={
      todos: cardsData,
      isLoading: true,
      count: 0,
    }
    this.onChange = this.onChange.bind(this)
    this.handleChange = this.handleChange(this)
  } 

  onChange() {
    this.setState(prevState => {
      return {
        count: prevState.count - 2
      }
    })
  }

  handleChange(id){
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
    console.log("Changed", id)
  }
  

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1500)
  }

  render(){
    const result = this.state.todos.map(card => <ContactCard
      key={card.id}
      name={card.name}
      phone={card.phone}
      email={card.email}
      />)

      const study = Students.map(student => <ContactCard 
        key={student.id}
        name={student.name}
        grade={student.grade}
        address={student.address}
        notes={student.notes}
        status={student.status}
      />)
      console.log(study)
    return (
      <div>
        <div className="topMenu">
          <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.onChange}> Change State </button>
          </div>
        <input type="checkbox" id="Yamaha" name="Rover" value="yamaha" /> Yamaha
          {/* <div>
            {result}
          </div> */}
          <div>
            {study}
          </div>
        </div>
        <Current />
        <Bikes handleChange={this.handleChange} />
        <Cars handleChange={this.onChange} />
      </div>
    );
      }
}

export default App;