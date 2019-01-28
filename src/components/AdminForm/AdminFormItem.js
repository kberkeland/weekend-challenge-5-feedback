import React, { Component } from 'react';
import './AdminForm.css';
import axios from 'axios';
import moment from 'moment';
import swal from 'sweetalert';

// material-ul import statements
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import FlagIcon from '@material-ui/icons/Flag';

class AdminFormItem extends Component {

    // click handler for the like button
    handleFlagClick = () => {
        // send PUT request to update the like value for an item clicked
        axios({
            method: 'PUT',
            url: `/feedback/flag/${this.props.feedback.id}`,
        }).then((response) => {
            // refresh the feedback table
            this.props.getFeedbackData();
        }).catch((error) => {
            // Console log and alert for error PUT
            console.log(`Error in axios PUT: ${error}`);
            alert(`Error flagging the feedback.`);
        });
    } // end handleFlagClick

    // click handler for the delete button
    handleDeleteClick = () => {
        console.log(this.props);
        // send DELETE request to remove the item clicked on from the database
        swal({
            title: "Are you sure?",
            text: "Pressing delete will permanantly remove feedback, please confirm delete?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((deleteItem) => {
            if (deleteItem) {
                // send DELETE request to remove the item clicked on from the database
                axios({
                    method: 'DELETE',
                    url: `/feedback/delete/${this.props.feedback.id}`,
                }).then((response) => {
                    // confirm delete for the user
                    swal("Feedback was removed from the database.", { icon: "success", });
                    // refresh the feedback table
                    this.props.getFeedbackData();
                }).catch((error) => {
                    // Console log and alert for error in DELETE
                    console.log(`Error in axios DELETE: ${error}`);
                    alert(`A problem occured when deleting the feedback.`);
                }); // end axios DELETE
            } else {
                swal("Delete image was cancelled.");
            }
        });
    } // end handleDeleteClick

    render() {
        return (
            <TableRow>
                <TableCell component="th" scope="row">
                    {this.props.feedback.feeling}
                </TableCell>
                <TableCell>{this.props.feedback.understanding}</TableCell>
                <TableCell>{this.props.feedback.support}</TableCell>
                <TableCell>{this.props.feedback.comments}</TableCell>
                <TableCell>{moment(this.props.feedback.date).format("dddd, MMMM Do YYYY")}</TableCell>
                <TableCell>
                    <Tooltip title="Flag for review">
                        <IconButton aria-label="Flag" onClick={this.handleFlagClick}>
                            <FlagIcon />
                        </IconButton>
                    </Tooltip>
                </TableCell>
                <TableCell>
                    <Tooltip title="Delete">
                        <IconButton aria-label="Delete" onClick={this.handleDeleteClick}>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </TableCell>
            </TableRow>
        )
    }
}

export default AdminFormItem;