import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeController from '../controllers/HomeController';

const Content: React.FC = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<HomeController />} />
        <Route
          path="/skrill"
          element={
            <div>
              <h2>Skrill Integration Detailss</h2>
            </div>
          }
        />
        <Route
          path="/api"
          element={
            <div>
              <h2>API Call Demonstrations</h2>
            </div>
          }
        />
        <Route
          path="/state-management"
          element={
            <div>
              <h2>State Management Examples</h2>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default Content;
