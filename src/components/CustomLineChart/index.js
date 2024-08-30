import { RxDotFilled } from "react-icons/rx";
import { IoMdInformationCircleOutline } from "react-icons/io";
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
    Tooltip,
  } from "recharts";
import './index.css'



const CustomLineChart=(props)=>{
    const {lineChartData,showSidebar,media}=props

    const CustomTooltip = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
        return (
          <div className="custom-tooltip">
            <p className="desc">{label}</p>
            <p className="desc"><RxDotFilled color="#f1953b" size={20}/>{`Orders - ${payload[0].value}`}</p>
            <p className="desc"><RxDotFilled color="#4ba6a9" size={20}/>{`Sales - ${payload[1].value}`}</p>
            <p className="desc"><RxDotFilled color="#000000" size={20}/>{`Avg Order Value - ${(payload[1].value/payload[0].value).toFixed(2)}`}</p>
          </div>
        )
      }
    
      return null;
    }

    const getFormattedValue = (value) => {
        return (value/1000).toString() + 'K';
    }

    return(
      <div className={`line-chart-container ${showSidebar&&'responsive-linechart'}`}>
        <div className="line-title-section">
          <p className="line-chart-title">Sales vs Orders</p>
          <IoMdInformationCircleOutline size={30}/>
        </div>
      <ResponsiveContainer aspect={2}>
        <LineChart
         width={700}
         height={350}
          data={lineChartData}
          margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" tick={{fontSize: media && (media.matches?15:12)}}/>
          <YAxis yAxisId="left-axis" tickFormatter={getFormattedValue} tick={{fontSize:  media && (media.matches?14:12)}}/>
          <YAxis yAxisId="right-axis" orientation="right" tick={{fontSize:  media && (media.matches?14:12)}}/>
          <Tooltip content={<CustomTooltip />}/>
          <Legend verticalAlign='top' height={46} wrapperStyle={{ fontSize:  media && (media.matches?"20px":"16px")}}/>
          <Line yAxisId="right-axis" type="monotone" dataKey="orders" stroke="#f1953b" activeDot={{ r: 8 }} strokeWidth={2}/>
          <Line yAxisId="left-axis" type="monotone" dataKey="sales" stroke="#4ba6a9" activeDot={{ r: 8 }} strokeWidth={2} />
        </LineChart>
        </ResponsiveContainer>
        </div>
    )

}
export default CustomLineChart