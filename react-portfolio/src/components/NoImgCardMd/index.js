import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import MailIcon from "@material-ui/icons/Mail";
import IconButton from "@material-ui/core/IconButton";
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minWidth: 700,
    margin: "auto",
    marginTop: "60px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  span: {
      paddingLeft: "20px",
      paddingBottom: "20px"
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" color="textSecondary" component="h2">
          {props.cardTitle}
        </Typography>
        <br />
        {/* <Typography variant="body2" component="p"> */}
        {/* {props.info} */}
        {/* <br /> */}
        {/* {'"a benevolent smile"'} */}
        {/* </Typography> */}
      </CardContent>
      <IconButton aria-label="show 11 new notifications" color="inherit" className={classes.span}>
        <MailIcon />
        <Link href="/contact">E-mail:</Link>
      </IconButton>
      <br/>
      <Typography variant="h5" component="h2" className={classes.span}>
      <PhoneAndroidIcon />
        <span href="/contact">Phone:</span>
        </Typography>
    </Card>
  );
}
