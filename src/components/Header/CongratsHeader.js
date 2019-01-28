import React, { Component } from 'react';
import './Header.css';

class CongratsHeader extends Component {
    render() {
        return (
            <div>
                <header className="congrats-header">
                    <h1 className="title">Feedback Complete!</h1>
                    <h4><i>Thanks for filling out your feedback!</i></h4>
                </header>
            </div>
        )
    }
}

export default CongratsHeader;