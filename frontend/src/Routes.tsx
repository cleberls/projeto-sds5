import Dashboard from 'pages/Dashboard';
import Home from 'pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Routers = () => {
  return (

    <BrowserRouter>
        <Switch>
       
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>

       
        </Switch>
    </BrowserRouter>

  );
}

export default Routers;
