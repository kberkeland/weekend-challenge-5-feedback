import React, { Component } from 'react';
import CongratsHeader from '../Header/CongratsHeader.js';

// material-ul import statements
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class CongratsForm extends Component {

    // starts the feedback loop all over again
    sendToHome = () => {
        // send the user to the home page
        this.props.history.push('/');
    } // end sendToHome

    render() {
        return (
            <div>
                <CongratsHeader />
                <br />
                <Typography variant="h3" component="h3">
                    Congratulations!
                </Typography>
                <br />
                <br />
                <Typography component="p">
                    You have completed the feedback form!
                </Typography>
                <br />
                <br />
                <Button variant="contained" color="primary" onClick={this.sendToHome}>
                    Leave new feedback
                </Button>
            </div>
        )
    }
}

export default CongratsForm;