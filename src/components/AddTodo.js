import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	input: ""
        }
    }

    updateInput = input => {
    	this.setState({input})
    }

    handleAddTodo = () => {
    	this.setState({input: ""});
    }

    render() {
        return (
            <div>
	            <div className="ui input">
	              <input type="text" 
	              onChange={e => this.updateInput(e.target.value)}
	              value={this.state.input}
	              placeholder="Add new item" />
	            </div>
              <button className="ui primary button" onClick={this.handleAddTodo}>
                Add
              </button>
            </div>
        );
    }
}

export default AddTodo;
