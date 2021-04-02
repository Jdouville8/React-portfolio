import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 690,
      minWidth: 200,
      margin: "auto",
      marginTop: "40px",
      marginBottom: "40px"
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
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: green[500],
    },
    span: {
      fontSize: '16px',
    },
    favicon: {
      marginLeft: 'px',
      color: 'blue',
    }
  }));
  
function CardMd(props) {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const favicon = "fab fa-github-square"
    
    return (
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                J
              </Avatar>
            }
            title={props.cardTitle}
          />
          <CardMedia
            className={classes.media}
            image={props.image}
            title="Justin Douville"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.info}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" href={props.link1}>
              {/* Change to take icon1 prop */}
              LinkedIn
              <i className="fab fa-linkedin"
              style={{
                marginLeft: '4px',
                color: '#3f51b5',
              }}
              ></i>
            </IconButton>
            <IconButton aria-label="share" href={props.link2}>
              {/* Change to take icon2 prop */}
              Github
              <i 
              className="fab fa-github-square"
              style={{
                marginLeft: '4px',
                color: '#3f51b5',
              }}
              ></i>
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <span className={classes.span}>READ MORE</span>
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                {props.title1}
              </Typography>
              <Typography paragraph>
                {props.body1}
              </Typography>
              <Typography paragraph>
                {props.title2}
              </Typography>
              <Typography paragraph>
                {props.body2}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      );
}

export default CardMd;
