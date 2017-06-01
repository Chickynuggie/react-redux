import React, { Component } from 'react';

class Category extends Component {
    render() {
        return (
            <div>
                <li>
                    {this.props.name}
                    <a onClick={() => { this.props.setActiveCategory(this.props.id); }}><i className="fa fa-chevron-circle-down" aria-hidden="true"></i></a>
                    <a><i className="fa fa-plus-circle" aria-hidden="true"></i></a>
                    <a onClick={() => { this.props.remove(this.props.id, this.props.parent); }}><i className="fa fa-trash" aria-hidden="true"></i></a>
                    <a href="#" ><i className="fa fa-pencil-square-o" aria-hidden="true"></i></a>
                </li>
            </div>
        )
    }
}

export default Category;