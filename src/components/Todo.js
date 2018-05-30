/* eslint-disable no-unused-vars */
import React from 'react';
import '../App.css';

class Todo extends React.Component {

    state = {
        inputText: '',
        todoItem: []
    }

    handleInput = (event) => {
        this.setState({
            inputText: event.target.value
        })
    }

    handleSubmit = () => {
        const newTodoList = [...this.state.todoItem];
        newTodoList.push(this.state.inputText)
        this.setState({
            todoItem: newTodoList
        })
        localStorage.setItem("Todos", JSON.stringify(newTodoList))
        this.loopTodoItems()
    }

    loopTodoItems = () => {
        let storedTodos = JSON.parse(localStorage.getItem("Todos"));
        let todoList = storedTodos.map(function (storedTodos) {
            return <li>{storedTodos}</li>
        })
        return <ul>{todoList}</ul>
    }

    render() {
        return (
            <div className="col-md-12">
                <h2>TODO</h2>
                <input value={this.state.inputText} onChange={this.handleInput.bind(this)} type="text" placeholder="Your todo"></input>
                <button onClick={this.handleSubmit.bind(this)}>Submit Todo</button>
                <div>
                    {}
                </div>
            </div>
        )
    }
}

export default Todo;