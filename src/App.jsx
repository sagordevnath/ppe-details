
import './App.css'
import Land from './Pages/Land';
import Menubar from './Pages/MenuBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import PPEDetails from './Pages/PPEDetails';
import PPE from './Pages/PPE';
import Buildings from './Pages/Buildings';
import PlantAndMachinery from './Pages/PlantAndMachinery';
import Furniture from './Pages/Furniture';
import OfficeEquipment from './Pages/OfficeEquipment';
import ElectricalEquipment from './Pages/ElectricalEquipment';
import Automobiles from './Pages/Automobiles';
import AssetsUnderConstruction from './Pages/AssetsUnderConstruction';

function App() {

  return (
    <>
    <Menubar />
    <Land />
    {/* <PPEDetails /> */}
    {/* <PPE /> */}
    {/* <Buildings /> */}
    {/* <PlantAndMachinery /> */}
    {/* <Furniture /> */}
    {/* <OfficeEquipment /> */}
    {/* <ElectricalEquipment /> */}
    {/* <Automobiles /> */}
    <AssetsUnderConstruction />
    </>
  )
}

export default App
