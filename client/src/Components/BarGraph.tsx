import { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarController,
  BarElement,
  Legend,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarController,
  BarElement,
  Legend,
  Title,
  Tooltip
);

export const BarGraph = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [transactions, setTransactions] = useState<any[]>([]);
  useEffect(() => {
    axios.get("http://localhost:3001/transactions/sum").then((response) => {
      setTransactions(response.data);
    });
  }, []);
  var labels: string[] = [];
  var income: number[] = [];
  var monthList: string[] = [];
  var expenses: number[] = [];
  transactions.forEach((item) => {
    var amount: number = Math.round(item["sum"]);
    if (!labels.includes(item["month-year"])) {
      labels.push(item["month-year"]);
      monthList.push(months[item.month - 1] + " - " + item.year);
      switch (item.accountType) {
        case "Income":
          income.push(amount);
          expenses.push(0);
          break;
        default:
          expenses.push(amount);
          income.push(0);
          break;
      }
    } else {
      switch (item.accountType) {
        case "Income":
          income.pop();
          income.push(amount);
          break;
        default:
          expenses.pop();
          expenses.push(amount);
          break;
      }
    }
  });
  const options = {};
  const data = {
    labels: monthList,
    datasets: [
      {
        label: "Income",
        data: income,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgb(75, 192, 192, 0.2)",
      },
      {
        label: "Expense",
        data: expenses,
        borderColor: "rgb(192, 98, 75)",
        backgroundColor: "rgb(192, 98, 75, 0.2)",
      },
    ],
  };
  return <Bar data={data} options={options} />;
};
