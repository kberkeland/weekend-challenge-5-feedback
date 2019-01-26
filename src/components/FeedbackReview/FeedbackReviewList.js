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

class FeedbackReview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dense: false,
        }
    }

    render() {
        const feelingsRating = `Feelings: ${this.props.reduxStore.feelings}`;
        const understandingRating = `Understanding: ${this.props.reduxStore.understanding}`;
        const supportRating = `Support: ${this.props.reduxStore.support}`;
        const commentsRating = `Comments: ${this.props.reduxStore.comments}`;

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
            </List>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapReduxStoreToProps)(FeedbackReview);