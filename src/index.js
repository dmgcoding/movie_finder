import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home'
import Trending from './pages/Trending/Trending'
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { Provider } from 'react-redux'
import store from './app/store'

const router = createBrowserRouter([
 {
  path: '/',
  element: <Home/>,
  errorElement: <ErrorPage/>
 },
 {
  path: 'trending',
  element: <Trending/>,
  errorElement: <ErrorPage/>
 }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}><RouterProvider router={router}/></Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
