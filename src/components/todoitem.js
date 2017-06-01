import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ToDo extends Component {

    render() {
        return (
            <li key={this.props.todo.id} id={this.props.todo.id} className={'task-completion-' + this.props.todo.done}>
                {this.props.todo.text} <br />
                <a href="#" onClick={() => { this.props.remove(this.props.todo.id); }}><i className="fa fa-trash" aria-hidden="true"></i></a>
                <a href="#" onClick={() => { this.props.toggle(this.props.todo.id); }}><i className="fa fa-check-square" aria-hidden="true"></i></a>
                <Link to={'/edit/' + this.props.todo.id}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Link>
            </li>
        )
    }
}

export default ToDo;
