import React, { Component } from 'react';

class Category extends Component {

    const

    render() {
        return (
            <div>
                <li>
                    {this.props.name}
                    <a  onClick={() => { this.props.setActiveCategory(this.props.id); }}><i className="fa fa-chevron-circle-down" aria-hidden="true"></i></a>
                    <a><i className="fa fa-plus-circle" aria-hidden="true"></i></a>
                    <a onClick={() => { this.props.remove(this.props.id, this.props.parent); this.props.update(); }}><i className="fa fa-trash" aria-hidden="true"></i></a>
                    <a href="#" onClick={() => { this.props.edit(); }}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></a>
                </li>
            </div>
        )
    }
}

export default Category;