import "./Grafico.css";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Segunda",
    Lixo: 4000,
    Alagamento: 2400,
    amt: 2400,
  },
  {
    name: "Terça",
    Lixo: 3000,
    Alagamento: 1398,
    amt: 2210,
  },
  {
    name: "Quarta",
    Lixo: 2000,
    Alagamento: 9800,
    amt: 2290,
  },
  {
    name: "Quinta",
    Lixo: 2780,
    Alagamento: 3908,
    amt: 2000,
  },
  {
    name: "Sexta",
    Lixo: 1890,
    Alagamento: 4800,
    amt: 2181,
  },
  {
    name: "Sábado",
    Lixo: 2390,
    Alagamento: 3800,
    amt: 2500,
  },
  {
    name: "Domingo",
    Lixo: 3490,
    Alagamento: 4300,
    amt: 2100,
  },
];

export default function GraficoFortaleza() {
  return (
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}>

        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Lixo"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="Alagamento" stroke="#82ca9d" />
      </LineChart> 
  );
}
