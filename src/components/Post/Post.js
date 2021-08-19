import React, {useState} from "react";
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
      width: 800,
      textAlign : "left"
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    avatar: {
      backgroundColor: red[500],
    },
    link: {
        textDecoration : "none",
        boxShadow : "none",
        color : "white"
    }
  }));

function Post(props) {
   const {title, text, userId, userName} = props;
   const classes = useStyles();
   const [expanded, setExpanded] = useState(false);
   const [liked, setLiked] = useState(false);
   const handleExpandClick = () => {
     setExpanded(!expanded);
   };

   const handleLike = () => {
    setLiked(!liked);
   }
   
   return(
           <Card className={classes.root}>
                <CardHeader
                    avatar={
                    <Link  className={classes.link} to={{pathname : '/users/' + userId}}>
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {userName.charAt(0).toUpperCase()}
                    </Avatar>
                    </Link>
                    }
                    title={title}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {text}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton 
                    onClick={handleLike}
                    aria-label="add to favorites"
                    >
                    <FavoriteIcon style={liked? { color: "red" } : null} />
                    </IconButton>
                    <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <CommentIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                   
                    </CardContent>
                </Collapse>
                </Card>
   )
}

export default Post;