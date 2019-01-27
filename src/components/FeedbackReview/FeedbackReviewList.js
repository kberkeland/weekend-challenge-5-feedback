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
import BackIcon from '@material-ui/icons/KeyboardBackspace';
import CheckIcon from '@material-ui/icons/Check';


class FeedbackReviewList extends Component {

    render() {
        // Used in displaying the current rating on the feedback review with text to describe the rating
        const feelingsRating = `Feelings: ${this.props.reduxStore.feelings}`;
        const understandingRating = `Understanding: ${this.props.reduxStore.understanding}`;
        const supportRating = `Support: ${this.props.reduxStore.support}`;
        const commentsRating = `Comments: ${this.props.reduxStore.comments.comments}`;

        return (
            <List dense={false} >
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <CheckIcon color={ this.props.reduxStore.feelings === 0 ? "disabled" : "primary"} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={feelingsRating}
                    />
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Back">
                            <BackIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <CheckIcon color={ this.props.reduxStore.understanding === 0 ? "disabled" : "primary"} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={understandingRating}
                    />
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Back">
                            <BackIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <CheckIcon color={ this.props.reduxStore.support === 0 ? "disabled" : "primary"} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={supportRating}
                    />
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Back">
                            <BackIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <CheckIcon color={ this.props.reduxStore.comments.check ? "primary" : "disabled" } />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={commentsRating}
                    />
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Back">
                            <BackIcon />
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

export default connect(mapReduxStoreToProps)(FeedbackReviewList);