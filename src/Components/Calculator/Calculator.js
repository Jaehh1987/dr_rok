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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
  useRouteMatch
} from "react-router-dom";
import CalculatorList from './CalculatorList';
import CalculatorResource from './CalculatorResource';
import CalculatorSpeedUp from './CaculatorSpeedUp';

export default function Calculator() {
  var match = useRouteMatch();

  return (
    <React.Fragment>
      <Switch>
        <Route path={`${match.url}/Resource`}>
          <CalculatorResource/>
        </Route>
        <Route path={`${match.url}/SpeedUp`}>
          <CalculatorSpeedUp/>
        </Route>
        <Route path={`${match.url}/`}>
          <CalculatorList></CalculatorList>
        </Route>
      </Switch>
    </React.Fragment>
  );
}