import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Inicio from './routes/Inicio/index'
import Login from './routes/Login/index'
import Register from './routes/Register/index'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Inicio}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/register" exact component={Register}/>
            </Switch>
        </Router>  
    );
}

export default App;
