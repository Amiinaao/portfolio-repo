import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
import Header from '../../Header';
import './Layout.css';

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <Header />
      <div className="main">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
};

export default Layout;
