import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Books from './pages/Books';
import Authors from './pages/Authors';
import Categories from './pages/Categories';
import Users from './pages/Users';
import Reservations from './pages/Reservations';
import UserTable from './components/UserTable';


const users = [
  { id: 1, name: "Abdul Hai Habibi", email: "abdulhaihabibi60@gmail.com", phone: "+93794167045" },
  { id: 2, name: "Hasibullah Alkozay", email: "hasibullahulfat14@gmail.com", phone: "+93780153714" },
  { id: 2, name: "Abdul Khalid", email: "khalidqafori@gmail.com", phone: "+93748276213" },
  { id: 2, name: "Rafiullah Qaderi", email: "rafiullahqaderi81@gmail.com", phone: "+93774824265" },
  { id: 2, name: "Hamidullah Noorzai", email: "n_hamidullah@hotmail.com", phone: "+93772020759" },
  { id: 2, name: "Mobariz Katawazi", email: "mobariz.Katawazi@gmail.com", phone: "+93798501094" },
];

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
            <Route path="/users" element={<><Users /><UserTable  users={users}/></>}  />
            <Route path="/reservations" element={<Reservations />}  />
          </Routes>
          
           
        </Router>
    );
}

export default App;
