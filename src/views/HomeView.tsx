// src/views/HomeView.tsx
import React from 'react';

interface HomeViewProps {
  message: string;
}

const HomeView: React.FC<HomeViewProps> = ({ message }) => {
  return (
    <>
      <div>
        <h2>{message}</h2>
        <h2>testing</h2>
      </div>
    </>
  );
};

export default HomeView;
