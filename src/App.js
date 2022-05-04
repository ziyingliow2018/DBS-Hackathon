// import './App.css';
import React,{useState} from 'react';
import LoginForm from './LoginForm';
import NavigationBar from './components/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import SignUp from './pages/signUp';
import SignIn from './pages/signin';

function App() {

  return (
    <div className="App">
       <Router>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
