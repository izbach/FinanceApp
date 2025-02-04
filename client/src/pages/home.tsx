import React from "react";
import Navbar from "../Components/Navbar.tsx";
import { LineGraph } from "../Components/LineGraph.tsx";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { BarGraph } from "../Components/BarGraph.tsx";
import axios from "axios";

function Home() {
  const [transactions, setTransactions] = useState<any[]>([]);
  // const { fetchCsvData } = useFetch();

  useEffect(() => {
    axios.get("http://localhost:3001/transactions").then((response) => {
      setTransactions(response.data);
    });
  }, []);
  return (
    <div>
      {" "}
      <Navbar />
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <LineGraph />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Description</th>
                  <th scope="col">Account</th>
                  <th scope="col">Date</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((value, key) => {
                  return (
                    <tr>
                      <td>{value.description}</td>
                      <td>{value.accountName}</td>
                      <td>{value.date}</td>
                      <td>{value.amount}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col">2 of 3</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
