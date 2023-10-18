import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { AccessoriesPage, ContactsPage, HomePage, PackagesPage, TiresPage, WheelsPage } from './pages';
import { DropdownComponent } from './components';
import('preline')


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/tires' element={<TiresPage />} />
        <Route path='/wheels' element={<WheelsPage />} />
        <Route path='/accessories' element={<AccessoriesPage />} />
        <Route path='/packages' element={<PackagesPage />} />
        <Route path='/contacts' element={<ContactsPage />} />
        
      </Routes>
    </Router>
    
    
    
  );
}

export default App;
