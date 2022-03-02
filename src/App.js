// import logo from "./logo.svg";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Alert from './components/layout/alert';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar title='Github User Finder' icon='fab fa-github' />
            <div className='container'>
              <Alert />
              <Routes>
                <Route path='/githubUsersFinder' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/User/:login' element={<User />}></Route>
                <Route element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;