import React, { Component } from 'react';
import './Header.css';

class AdminHeader extends Component {
    render() {
        return (
            <div>
                <header className="admin-header">
                    <h1 className="title">Review Feedback Results</h1>
                </header>
            </div>
        )
    }
}

export default AdminHeader;