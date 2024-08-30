import {
  PieChart,
  Pie,
  Cell,
  Label,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { IoMdInformationCircleOutline } from "react-icons/io";
import "./index.css";

const CustomPieChart = (props) => {
  const { pieChartData } = props;

  const pieLegend = [
    {
      name: "WooCommerce Store",
      color: "#fa7e7e",
    },
    {
      name: "Shopify Store",
      color: "#2cded5",
    },
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    if (!percent) return null;
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={14}
        fontWeight={600}
      >{`${(percent * 100).toFixed(1)}%`}</text>
    );
  };
  const CustomLabel = ({ viewBox }) => {
    const { cx, cy } = viewBox;
    return (
      <>
        <text x={cx - 15} y={cy - 5}>
          <tspan
            style={{
              fontSize: "14px",
              fill: "#2b2a2a",
              fontFamily: "Roboto",
            }}
          >
            Total
          </tspan>
        </text>
        <text x={cx - 18} y={cy + 22}>
          <tspan
            style={{
              fontWeight: 700,
              fontSize: "20px",
              fill: "#000000",
              fontFamily: "Roboto",
            }}
          >
            2659
          </tspan>
        </text>
      </>
    );
  };

  return (
    <div className="pie-chart-container">
      <div className="pie-title-section">
        <p className="pie-chart-title">Portion of Sales</p>
        <IoMdInformationCircleOutline size={30} />
      </div>
      <ResponsiveContainer aspect={1}>
        <PieChart width={550} height={350}>
          <Legend
            verticalAlign="bottom"
            height={10}
            iconType="circle"
            iconSize={10}
            wrapperStyle={{ fontSize: "14px"}}
            payload={pieLegend.map((item) => ({
              id: item.name,
              value: `${item.name}`,
              color: `${item.color}`,
            }))}
          />
          <Pie
            data={pieChartData}
            dataKey="value"
            nameKey="name"
            startAngle={-270}
            endAngle={90}
            stroke="none"
            labelLine={false}
            label={renderCustomizedLabel}
          >
            <Label content={<CustomLabel />} position="center" />
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={pieChartData[index].color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomPieChart;
//<Label value="Total 2659" position="center" fill="black" fontSize="14" fontWeight={600}/>
