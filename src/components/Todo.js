/* eslint-disable no-unused-vars */
import React from 'react';
import '../App.css';

class Todo extends React.Component {

    state = {
        inputText: '',
        todoItem: (localStorage.getItem("toDo"))
    }

    componentWillMount() {
        if (this.state.todoItem == null) {
            localStorage.setItem("toDo", 'Du har ingenting att göra! Slappa eller skriv ner vad du faktiskt har att göra!');
        }
    }

    handleInput = (event) => {
        this.setState({
            inputText: event.target.value
        })
    }

    handleSubmit = () => {
        const newTodoItem = this.state.inputText
        localStorage.setItem("toDo", (newTodoItem));
        this.setState({
            todoItem: newTodoItem
        })
    }

    displayStoredTodos = () => {
        let storedTodo = this.state.todoItem
        return (
            <div className="centeredText">
                <p>
                    {storedTodo}
                </p>
            </div>
        )
    }

    render() {
        return (
            <div className="col-md-3">
                <textarea id="inputField" value={this.state.inputText} onChange={this.handleInput.bind(this)} type="text" />
                <button onClick={this.handleSubmit.bind(this)}>Submit</button>
                {this.displayStoredTodos()}
            </div>
        )
    }
}

export default Todo;