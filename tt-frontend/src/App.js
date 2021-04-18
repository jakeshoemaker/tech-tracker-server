import React from 'react';
import { Layout } from 'antd'
import Header from './Components/Header/Header'
import Login from './Components/Auth/Login/Login'
import Home from './Components/Home/Home'
import './App.css';


const { Content } = Layout;


const App = () => {
  return (
    <div>
      <Header />
      <Home />
    </div>
    
  )
}

export default App;
