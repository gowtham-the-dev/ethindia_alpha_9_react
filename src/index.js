import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import Login from './containers/Login';
import Services from './containers/Services';
import { TransactionProvider } from './context/EscrowContext'
import CreateService from './containers/CreateService';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/services",
    element: <Services/>,
  },
  {
    path: "/services/new",
    element: <CreateService/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TransactionProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </TransactionProvider>
);