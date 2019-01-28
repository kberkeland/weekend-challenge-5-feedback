import React, { Component } from 'react';
import './Header.css';

class MainHeader extends Component {
    render() {
        return (
            <div>
                <header className="main-header">
                    <h1 className="title">Feedback!</h1>
                    <h4><i>Don't forget it!</i></h4>
                </header>
            </div>
        )
    }
}

export default MainHeader;