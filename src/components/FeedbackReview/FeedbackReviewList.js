import React, { Component } from 'react';
import { connect } from 'react-redux';

// material-ul import statements
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

class FeedbackReviewList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dense: false,
        }
    }

    // sendToCongrats = () => {
    //     const action = { type: 'RESET' };
    //     this.props.dispatch(action);
    //     return (
    //         <div>
    //             <Route exact path="/congrats" component={CongratsForm} />
    //         </div>
    //     )
    // } // end sendToCongratsForm

    render() {
        const feelingsRating = `Feelings: ${this.props.reduxStore.feelings}`;
        const understandingRating = `Understanding: ${this.props.reduxStore.understanding}`;
        const supportRating = `Support: ${this.props.reduxStore.support}`;
        const commentsRating = `Comments: ${this.props.reduxStore.comments.comments}`;
        // let completeDisabled = true;

        // if( this.props.reduxStore.feelings !== 0 &&
        //     this.props.reduxStore.understanding !== 0 &&
        //     this.props.reduxStore.support !== 0 &&
        //     this.props.reduxStore.comments.check) {
        //         completeDisabled = false;
        // } // end if

        return (
            <List dense={this.state.dense} >
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <FolderIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={feelingsRating}
                    />
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Delete">
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <FolderIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={understandingRating}
                    />
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Delete">
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <FolderIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={supportRating}
                    />
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Delete">
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <FolderIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={commentsRating}
                    />
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Delete">
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                {/* <div>
                    <Button variant="contained" color="primary" disabled={completeDisabled} onClick={this.sendToCongrats}>
                        Submit Feedback
                    </Button>
                </div> */}
            </List>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapReduxStoreToProps)(FeedbackReviewList);