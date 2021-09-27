import Home from '@pages/Home';
import PhotosharprApp from '@pages/PhotosharprApp';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/app">
                    <PhotosharprApp/>
                </Route>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route>
                    <h1>404</h1>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
