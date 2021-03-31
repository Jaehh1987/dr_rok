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
import { Link, useRouteMatch } from 'react-router-dom';

const calculator_list = [
  {
    img: "./calculators/resource.png",
    desc: "Resource",
    link: "resource"
  },
  {
    img: "./calculators/speedup.png",
    desc: "Speedup",
    link: "speedup"
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
    paddingTop: '100%'
  },
  cardContent: {
    flexGrow: 1,
  }
}));

export default function CalculatorList() {
  const classes = useStyles();
  var match = useRouteMatch();

  return (
    <React.Fragment>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {calculator_list.map((calculator) => (
            <Grid item key={calculator} xs={12} sm={4} md={3}>
              <Link to={`${match.url}/${calculator.link}`}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={calculator.img}
                    title={calculator.img.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {calculator.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}