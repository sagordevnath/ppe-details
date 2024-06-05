import { Outlet } from 'react-router-dom'
import MenuBar from '../../Pages/MenuBar'

export default function Root() {
  return (
    <div>
        <MenuBar></MenuBar>
        <Outlet></Outlet>
    </div>
  )
}
