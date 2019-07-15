import React, { Component } from 'react';
export default class NavigationComponent extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
            <NavLink exact to="/">
                Home
            </NavLink>
            <NavLink exact to="/about-me">
                About
            </NavLink>
                <button>Contact</button>
                <button>Blog</button>
                {true ? <button>Add Blog</button> : null }
            </div>
        )
    }
}