import React, { useState } from 'react';
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Login from './Components/Auth/Login/Login'
import Landing from './Components/Landing/Landing'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AuthContext } from './Context/Auth';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Components/Dashboard/Dashboard';


const App = () => {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"))
  const [authTokens, setAuthTokens] = useState(existingTokens)

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data))
    setAuthTokens(data)
  }
  
  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <div className="app">
          <Header />
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    </AuthContext.Provider>
  )
}

export default App;
