import { useState ,useEffect} from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import CustomLineChart from "../CustomLineChart";
import CustomPieChart from "../CustomPieChart";
import "./index.css";

const sideMenu = [
  {
    id: "dashboard",
    displayText: "Dashboard",
  },
  {
    id: "inventory",
    displayText: "Inventory",
  },
  {
    id: "order",
    displayText: "Order",
  },
  {
    id: "returns",
    displayText: "Returns",
  },
  {
    id: "customers",
    displayText: "Customers",
  },
  {
    id: "shipping",
    displayText: "Shipping",
  },
  {
    id: "channel",
    displayText: "Channel",
  },
  {
    id: "integrations",
    displayText: "Integrations",
  },
  {
    id: "calculators",
    displayText: "Calculators",
  },
  {
    id: "reports",
    displayText: "Reports",
  },
  {
    id: "account",
    displayText: "Account",
  },
];

const lineChartData = [
  {
    week: "6/30/2024 - 7/6/2024",
    orders: 4,
    sales: 1404,
  },
  {
    week: "7/7/2024 - 7/13/2024",
    orders: 2,
    sales: 800,
  },
  {
    week: "7/21/2024 -7/27/2024",
    orders: 2,
    sales: 450,
  },
];

const pieChartData = [
  {
    name: "Shopify Store",
    value: 1175.278,
    color: "#2cded5",
  },
  {
    name: "WooCommerce Store",
    value: 1483.722,
    color: "#fa7e7e",
  },
];

const Home = () => {
  const [media,setMedia] = useState(null)
  const [activeMenu, setActiveMenu] = useState(sideMenu[0].id);
  const [showSidebar,setShowSidebar]=useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMedia(window.matchMedia("(max-width: 768px)"))
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const setMenu = (id) => {
    setActiveMenu(id);
  };

  const setSidebarOpen=()=>{  
    setShowSidebar(!showSidebar)
  }
  
  return (
    <div className="bg-container">
      {(!media || !media.matches || showSidebar)&&  
      <Sidebar sideMenu={sideMenu} setMenu={setMenu} activeMenu={activeMenu}  setSidebarOpen={setSidebarOpen}/>}
      <div className="home-container">
      <Navbar activeMenu={activeMenu} setSidebarOpen={setSidebarOpen} showSidebar={showSidebar}/>
      <div className="contents-container">
      {activeMenu === "dashboard" ? (
        <div className="dashboard-contents">
          <CustomLineChart lineChartData={lineChartData} showSidebar={showSidebar} media={media}/>
          <CustomPieChart pieChartData={pieChartData} media={media}/>
        </div>
      ) : (
        <div className="no-contents">
        <p>There is nothing to show here!</p>
        </div>
      )}
      </div>
    </div>
    </div>
  )
}

export default Home;
