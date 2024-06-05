import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Introduction from './Pages/Introduction.jsx';
import Buildings from './Pages/Buildings.jsx';
import PlantAndMachinery from './Pages/PlantAndMachinery.jsx';
import PPE from './Pages/PPE.jsx';
import Land from './Pages/Land.jsx';
import PPEDetails from './Pages/PPEDetails.jsx';
import Furniture from './Pages/Furniture.jsx';
import OfficeEquipment from './Pages/OfficeEquipment.jsx';
import ElectricalEquipment from './Pages/ElectricalEquipment.jsx';
import Automobiles from './Pages/Automobiles.jsx';
import AssetsUnderConstruction from './Pages/AssetsUnderConstruction.jsx';
import Home from './Pages/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/introduction", element: <Introduction /> },
      { path: "/land", element: <Land /> },
      { path: "/buildings", element: <Buildings /> },
      { path: "/plant-machinery", element: <PlantAndMachinery /> },
      { path: "/furniture", element: <Furniture /> },
      { path: "/office-equipment", element: <OfficeEquipment /> },
      { path: "/electrical-equipment", element: <ElectricalEquipment /> },
      { path: "/automobiles", element: <Automobiles /> },
      { path: "/assets-under-construction", element: <AssetsUnderConstruction /> },
      { path: "/PPE-Details", element: <PPEDetails /> },
      { path: "/PPE", element: <PPE /> },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
