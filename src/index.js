import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from './component/App';
import Rooms from './component/rooms';

const routers = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<App />} />
      <Route path="/rooms" element={<Rooms />} />
    
    </Route>
  )
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<RouterProvider router={routers} />
  </React.StrictMode>
);

function Layout(){
 return (<div>
    <Outlet/>
  </div>)
}

