import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import axios from "axios";
const [transactions, setTransactions] = useState<any[]>([]);
// const { fetchCsvData } = useFetch();

useEffect(() => {
  axios.get("http://localhost:3001/transactions").then((response) => {
    setTransactions(response.data);
  });
}, []);
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Title,
  Tooltip
);

export const BarGraph = (options: object, data: object) => {
  return <Bar options={options} data={data} />;
};
