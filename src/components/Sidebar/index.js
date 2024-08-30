import { IoIosClose } from "react-icons/io";
import './index.css'

const Sidebar = (props)=>{
  const {sideMenu,setMenu,activeMenu,setSidebarOpen}=props

    const handleClick=(id)=>{
        setMenu(id)
    }

    const onClickClose=()=>{
      setSidebarOpen()
    }
  
  return(
    <nav className='sidebar-container'>
        <div className="close-icon" onClick={onClickClose}><IoIosClose size={25}/></div>
        <ul className='side-menu-list'>
            {sideMenu.map(each=>(<li className={activeMenu===each.id?'side-menu-item active':'side-menu-item'} key={each.id} onClick={()=>{handleClick(each.id)}}>{each.displayText}</li>))}
        </ul>

    </nav>
  )
}

export default Sidebar