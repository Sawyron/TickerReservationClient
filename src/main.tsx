import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm.tsx';
import TrainPage from './pages/TrainPage.tsx';
import FreeTickertsPage from './pages/FreeTicketsPage.tsx';
import ClientTicketsPage from './pages/ClientTickets/ClientTicketsPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <TrainPage /> },
      { path: '/login', element: <LoginForm /> },
      { path: '/reserve', element: <FreeTickertsPage /> },
      { path: '/my-tickets', element: <ClientTicketsPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
