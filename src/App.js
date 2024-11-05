import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Books from './pages/Books';
import Authors from './pages/Authors';
import Categories from './pages/Categories';
import Users from './pages/Users';
import Reservations from './pages/Reservations';

const routes=[
  { path:'/',label:"Home"},
  { path:'/books',label:"Books"},
  { path:'/authors',label:"Authors"},
  { path:'/categories',label:"Categories"},
  { path:'/users',label:"Users"},
  { path:'/reservations',label:"Reservations"},
]
function App() {
    return (
        <Router>
            <Header title="Library MIS" routes={routes}/>
              
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books /> }  />
            <Route path="/authors" element={<Authors />} />
            <Route path="/categories" element={<Categories />}  />
            <Route path="/users" element={<Users />}  />
           <Route path="/reservations" element={<Reservations />}  />
          </Routes>
          
           
        </Router>
    );
}

export default App;
