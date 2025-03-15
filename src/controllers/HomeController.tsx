// src/controllers/HomeController.tsx
import React from 'react';
import HomeView from '../views/HomeView';

const HomeController: React.FC = () => {
  // Add logic here if needed (e.g., fetching data, managing state)
  const welcomeMessage = "Welcome to My Showcase!";

  // Pass data to the view
  return <HomeView message={welcomeMessage} />;
};

export default HomeController;
