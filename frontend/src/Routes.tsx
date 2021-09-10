import Dashboard from 'pages/Darshboard';
import Home from 'pages/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

const Routes = () => {
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

export default Routes;