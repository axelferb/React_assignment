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
            localStorage.setItem("toDo", 'You have nothing you have to do!');
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
                <p className="postitText">
                    {storedTodo}
                </p>
            </div>
        )
    }

    render() {
        return (
            <div className="col-md-3 postit">
                <div className="form-group">
                    <textarea className="borderRadiusTop form-control" value={this.state.inputText} onChange={this.handleInput.bind(this)} type="text" />
                    <button className="borderRadiusBottom btn btn-sm btn-block" onClick={this.handleSubmit.bind(this)}>Submit</button>
                </div>
                <hr />
                {this.displayStoredTodos()}
            </div>
        )
    }
}

export default Todo;