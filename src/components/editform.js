import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditForm extends Component {

    render() {
        
        return (
            <div className="overlay">
                <div className="modal-editform">
                    <h1>Now editing: {this.props.todo.text}</h1>
                    <form>
                        <h3>title:</h3>
                        <textarea rows="1" cols="50" ref={(title) => { this.title = title }} defaultValue={this.props.todo.text} /><br />
                        <h3>description:</h3>
                        <textarea rows="5" cols="50" ref={(description) => { this.description = description }} defaultValue={this.props.todo.description} /><br />
                        <Link to="/"><input type="button" value="done" onClick={() => { this.props.save(this.props.todo.id, this.title.value, this.description.value) }} /></Link>
                        <Link to="/"><input type="button" value="cancel" onClick={() => { this.props.close() }} /></Link>
                    </form>
                </div>
            </div>
        )
    }
}

export default EditForm;