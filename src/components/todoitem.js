import React, { Component } from 'react';

class ToDo extends Component {

    render() {
        return (
            <li key={this.props.id} id={this.props.id} className={'task-completion-' + this.props.completed}>
                {this.props.todo} <br />
                <a href="#" onClick={() => { this.props.remove(this.props.id); this.props.update(); }}><i className="fa fa-trash" aria-hidden="true"></i></a>
                <a href="#" onClick={() => { this.props.toggle(this.props.id); this.props.update(); }}><i className="fa fa-check-square" aria-hidden="true"></i></a>
                <a><i className="fa fa-pencil-square-o" aria-hidden="true"></i></a>
            </li>
        )
    }
}

export default ToDo;
