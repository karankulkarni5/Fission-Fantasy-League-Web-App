import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedNavbar from './components/ProtectedNavbar';
import Protected from './components/Protected';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/Account';
import Home from './pages/Home';
import Signin from './pages/Signin';
import West from './pages/West';
import East from './pages/East';
import North from './pages/North';
import South from './pages/South';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route
            path='/account'
            element = {
              <Protected>
                <ProtectedNavbar />
                <Account />
                <West/>
              </Protected>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
