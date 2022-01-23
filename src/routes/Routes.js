import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import Locations from '../components/pages/Locations';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/locations" element={<Locations />} />

        <Route path="/" element={<Navigate replace to="/locations" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
