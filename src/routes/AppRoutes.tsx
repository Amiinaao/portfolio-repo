import React from 'react';
import HomeController from '../controllers/HomeController';

export interface RouteType {
  path: string;
  element: React.ReactNode;
}

export const routes: RouteType[] = [
  { path: '/', element: <HomeController /> },
  { path: '/skrill', element: <div><h2>Skrill Integration Details</h2></div> },
  { path: '/api', element: <div><h2>API Call Demonstrations</h2></div> },
  { path: '/state-management', element: <div><h2>State Management Examples</h2></div> },
];
