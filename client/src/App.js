import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'

// Importing Pages
import Login from './pages/backend/Login'
import Admin from './pages/backend/Admin'


// Importing Firebase for authentication
import { AuthProvider } from './context/AuthContext';
import Nav from './components/global/Nav'




function App() {
  return (
    <div>

      <Router>
        <AuthProvider>
          <Nav />
          <Switch>
            <PrivateRoute exact path="/content-management-system" component={Admin} />
            <Route exact path="/" component={Login} />
          </Switch>

        </AuthProvider>
      </Router>

    </div>
  );
}

export default App;
