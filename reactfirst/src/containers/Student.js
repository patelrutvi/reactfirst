import React, { Component } from 'react';

class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"abcd"
        }
    }
    
    render() {
        return (
            <div>
                <>
                <p>name:{this.state.name}</p>
                </>
            </div>
        );
    }
}

export default Student;