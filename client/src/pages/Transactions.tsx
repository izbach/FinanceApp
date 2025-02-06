import Navbar from "../Components/Navbar.tsx";
// import { LineGraph } from "../Components/LineGraph.tsx";
import { useEffect, useState } from "react";
import NewTransaction from "../Components/NewTransaction.tsx";

import axios from "axios";

function Transactions() {
  const [transactions, setTransactions] = useState<any[]>([]);

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
                    <tr key={value.id}>
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
          <div className="col">
            <NewTransaction />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
