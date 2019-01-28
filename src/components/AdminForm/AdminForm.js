import React, { Component } from 'react';
import './AdminForm.css';
import AdminFormItem from './AdminFormItem.js';
import AdminHeader from './../Header/AdminHeader.js';
import axios from 'axios';

// material-ul import statements
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class AdminForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            feedbackArray: [],
        }
    }

    // load the feedback data
    componentDidMount() {
        this.getFeedbackData();
    } // end componentDidMount

    // function will add the feedback to the database and reset the redux store
    getFeedbackData = () => {

        // axios GET request to send feedback to the database
        axios({
            method: 'GET',
            url: `/feedback`
        }).then((response) => {
            // add the feedback to local state array feedbackArray
            this.setState({
                feedbackArray: response.data
            })
        }).catch((error) => {
            // console log and error message that the GET failed
            console.log(`Error in axios GET: ${error}`);
            alert(`Error in getting feedback from the database.`);
        });
    } // end getFeedbackData

    render() {
        return (
            <div>
                <AdminHeader />
                <br />
                <Table className="table-css">
                    <TableHead>
                        <TableRow>
                            <TableCell>Feeling</TableCell>
                            <TableCell>Comprehension</TableCell>
                            <TableCell>Support</TableCell>
                            <TableCell>Comments</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Flag for review</TableCell>
                            <TableCell>Delete?</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.feedbackArray.map(feedback => (
                            <AdminFormItem key={feedback.id} feedback={feedback} getFeedbackData={this.getFeedbackData} />
                        ))}
                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default AdminForm;