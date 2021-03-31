import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const commanders = [
  {
    img: "./commanders/richard.png",
    desc: "Richard"
  },
  {
    img: "./commanders/alexander.png",
    desc: "Alexander"
  }, 
  {
    img: "./commanders/artemisia.png", 
    desc: "Altemisia"
  }, 
  {
    img: "./commanders/cao_cao.png",
    desc: "Cao Cao"
  },
  {
    img: "./commanders/richard.png",
    desc: "Richard"
  },
  {
    img: "./commanders/alexander.png",
    desc: "Alexander"
  }, 
  {
    img: "./commanders/artemisia.png", 
    desc: "Altemisia"
  }, 
  {
    img: "./commanders/cao_cao.png",
    desc: "Cao Cao"
  }];

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '180%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Commanders() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {commanders.map((commander) => (
              <Grid item key={commander} xs={12} sm={4} md={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={commander.img}
                    title={commander.img.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {commander.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    </React.Fragment>
  );
}