import React from 'react';
import './App.scss';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Routes from './Routes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);
function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}



export default App;
