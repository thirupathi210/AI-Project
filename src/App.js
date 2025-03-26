import React,{useEffect,useState} from 'react';
import './App.css';
import Header from './Component/header';
import './Style/nav.css';
import './Style/respons.css';
import './Style/home.css';
import Slider from './Component/slider';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Component/home';
import About from './Component/about';
import Service from './Component/services';
import Contact from './Component/contact';
import Task1 from './Component/Task/task1';
import Task2 from './Component/Task/task2';
import Task3 from './Component/Task/task3';
import Task4 from './Component/Task/task4';
import Task5 from './Component/Task/task5';
import Task6 from './Component/Task/task6';
import Task7 from './Component/Task/task7';
import Task8 from './Component/Task/task8';
import Task9 from './Component/Task/task9';
import Task10 from './Component/Task/task10';
import HomePage from './Component/ChatApplication/HomePage';
import LoginPage from './Component/ChatApplication/LoginPage';
import RegisterPage from './Component/ChatApplication/RegisterPage';
import Projects from './Component/projects';
import PrivateRoute from './Component/privateRoute';
import Second from './Component/second';
import Home2 from './Component/home';

import { auth } from './firebase';
export const UserContext=React.createContext();
function App() {
  // Temporary authentication state (Replace with Redux or Context API)
  const isAuthenticated = false; // Change this based on authentication status
  const [prasentuser,setPrasentuser]=useState(null);
useEffect(()=>{
auth.onAuthStateChanged((user)=>{
  setPrasentuser({
    uid:user.uid,
    email:user.email
  })
})
},[]);

  return (
    <div className="App">
      <Header />
      {/* {prasentuser ? <Home2/> : <Task7/>} */}
       <UserContext.Provider value="welcome thiru"><Second/></UserContext.Provider>
      
      <Router>
        <Routes>
          {/* Protected Routes */}
           <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/" element={prasentuser ? <HomePage /> : <Task7 />} />
          </Route> 

          {/* Public Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/task1" element={<Task1 />} />
          <Route path="/task2" element={<Task2 />} />
          <Route path="/task3" element={<Task3 />} />
          <Route path="/task4" element={<Task4 />} />
          <Route path="/task5" element={<Task5 />} />
          <Route path="/task6" element={<Task6 />} />
           <Route path="/task7" element={<Task7 />} />
           <Route path="/task8" element={<Task8 />} />
            <Route path="/task9" element={<Task9 />} />
            <Route path="/task10" element={<Task10 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
