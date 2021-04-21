import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'

// Importing Pages
import Login from './pages/backend/Login'


// Importing Firebase for authentication
import { AuthProvider } from './context/AuthContext';




function App() {
  return (
    <div>

      <Router>
        <AuthProvider>
          <Switch>
            {/* <PrivateRoute exact path="/admin" component={Admin} /> */}
            <Route exact path="/" component={Login} />
          </Switch>

        </AuthProvider>
      </Router>

    </div>
  );
}

export default App;
