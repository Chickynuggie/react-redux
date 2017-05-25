import React, { Component } from 'react';

class EditForm extends Component {

    render() {
        return (
            <form>
                <textarea rows="4" cols="50" ref={(input) => {this.input = input}} defaultValue={this.props.todo.text} /><br />
                <input type="button" value="done" onClick={() => { this.props.save(this.props.todo.id, this.input.value) }} />
                <input type="button" value="cancel" onClick={() => { this.props.close() }} />
            </form>
        )
    }
}

export default EditForm;