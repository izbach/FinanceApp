import { useState, useEffect } from "react";
import axios from "axios";

interface displayProps {
  title: string;
  type: string;
  dateFrom: string;
}

export const TotalsCard = ({ title, type, dateFrom }: displayProps) => {
  const [sums, setSums] = useState<any[]>([]);
  const [value, setValue] = useState<string>();
  useEffect(() => {
    axios
      .get(
        "http://localhost:3001/transactions/sum?monthSort=false&dateFrom=2025-01-01"
        //   new Date().toISOString().slice(5).concat("01-01")
      )
      .then((response) => {
        setSums(response.data);
      });
  }, []);
  console.log(sums);
  sums.forEach((element) => {
    if (element.accountType == "income") {
      setValue(
        element.sum.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })
      );
    }
  });
  return (
    <div className="card">
      <h5 className="card-title">{title}</h5>
      <div className="card-body">{value}</div>
    </div>
  );
};
