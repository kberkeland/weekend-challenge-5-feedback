import React, { Component } from 'react';

// material-ul import statements
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class CongratsForm extends Component {

    sendToHome = () => {
        this.props.history.push('/');
    } // end sendToHome

    render() {
        return (
            <Paper elevation={1}>
                <Typography variant="h3" component="h3">
                    Congratulations!
                </Typography>
                <Typography component="p">
                    You have completed the feedback form!
                </Typography>
                <Button variant="contained" color="primary" onClick={this.sendToHome}>
                    Leave new feedback
                </Button>
            </Paper>
        )
    }
}

export default CongratsForm;