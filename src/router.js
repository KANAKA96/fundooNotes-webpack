
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ResetPassword from './pages/resetPassword/resetPassword';
import Dashboard from './pages/dashboard/dashboard';
import NoTransitionPopper from './pages/demo'


const AppRouter = () => (

    <BrowserRouter>
            <Switch>
              <Route path="/" component={Login} exact={true}/>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register}/>
              <Route path="/resetpassword" component={ResetPassword}/>
              <Route path="/dashboard" component={Dashboard}/>
              <Route path ="/demo" component={NoTransitionPopper}/>
            </Switch>
    </BrowserRouter>



)
export default AppRouter;
