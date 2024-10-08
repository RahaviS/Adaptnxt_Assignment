import { RxHamburgerMenu } from "react-icons/rx";
import './index.css'

const Navbar=(props)=>{
    const {activeMenu,setSidebarOpen,showSidebar}=props
    const navTitle = activeMenu.charAt(0).toUpperCase()+activeMenu.slice(1);

    const handleClick=()=>{
        setSidebarOpen()
    }

    return(
        <nav className='navbar'>
         {!showSidebar&&<div className="sidebar-icon"><RxHamburgerMenu size={25} onClick={handleClick}/></div>}
         <div className='nav-title'>{navTitle}</div>
        </nav>
    )

}
export default Navbar