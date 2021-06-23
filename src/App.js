import Home from './pages/Home';
import PhotosharprApp from './pages/PhotosharprApp';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './reduxstore/store';
import 'semantic-ui-css/semantic.min.css';

const App = () => {
    return (
        <Provider store={store}>
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
        </Provider>
    );
}

export default App;
