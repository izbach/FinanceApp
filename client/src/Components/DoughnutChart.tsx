import { useState, useEffect } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  PointElement,
  DoughnutController,
  ArcElement,
  Legend,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(
  PointElement,
  DoughnutController,
  ArcElement,
  Legend,
  Title,
  Tooltip
);

export const DoughnutChart = () => {
  const colors = [
    "rgb(75, 192, 192, 0.8)",
    "rgb(75, 130, 192, 0.8)",
    "rgb(75, 77, 192, 0.8)",
    "rgb(124, 75, 192, 0.8)",
    "rgb(75, 192, 145, 0.8)",
    "rgb(75, 192, 95, 0.8)",
    "rgb(112, 192, 75, 0.8)",
    "rgb(151, 192, 75, 0.8)",
    "rgb(29, 56, 213, 0.8)",
    "rgb(141, 33, 219, 0.8)",
  ];
  const [transactions, setTransactions] = useState<any[]>([]);
  useEffect(() => {
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();
    axios
      .get(
        "http://localhost:3001/transactions/sum?byAccount=true&year=" +
          year +
          "&month=" +
          month
      )
      .then((response) => {
        setTransactions(response.data);
      });
  }, []);
  var labels: string[] = [];
  var expenses: number[] = [];
  var colorList: string[] = [];
  var iter = 0;
  transactions.forEach((item) => {
    if (item.accountType == "Expense") {
      const amount: number = Math.round(item["sum"]);
      labels.push(item.accountName);
      expenses.push(amount);
      colorList.push(colors[iter]);
      iter = iter += 1;
    }
  });
  const options = {};
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Expenses",
        data: expenses,
        backgroundColor: colors,
      },
    ],
  };
  return <Doughnut data={data} options={options} />;
};
