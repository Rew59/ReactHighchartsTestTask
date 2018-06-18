import * as React from 'react'
import { Route, Switch } from 'react-router-dom';
import ChartPage from './ChartPage';
import HomePage from './HomePage';

const Content = () => (
    <div className="content">
      <Switch>
        <Route exact={true} path='/' component={HomePage}/>
        <Route path='/chart' component={ChartPage}/>
      </Switch>
    </div>
  )
  
export default Content;