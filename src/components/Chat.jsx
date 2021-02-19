import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import NoProfile from '../assets/img/犬.jpg';
import Sakai from '../assets/img/さかい.jpg';


const Chat = (props) => {
  const isQuestion = (props.type === 'question');
  const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse';

  return(
    <ListItem className={classes} id={"scroll-area"}>
      <ListItemAvatar>
        {isQuestion ? (
          <Avatar alt="icon" src={Sakai} />
        ) : (
          <Avatar alt="icon" src={NoProfile} />
        )}
      </ListItemAvatar>
      <div className="p-chat__bubble">{props.text}</div>
    </ListItem>
  )
}

export default Chat
