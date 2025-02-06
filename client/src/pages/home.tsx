import Navbar from "../Components/Navbar.tsx";
// import { LineGraph } from "../Components/LineGraph.tsx";
import { useEffect, useState } from "react";
import { BarGraph } from "../Components/BarGraph.tsx";

import axios from "axios";

function Home() {
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
            <div className="card">
              <h5 className="card-title">Expenses(YTD)</h5>
              <div className="card-body">$53,809</div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <h5 className="card-title">Income(YTD)</h5>
              <div className="card-body">$53,809</div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <h5 className="card-title">Expenses(YTD)</h5>
              <div className="card-body">$53,809</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <BarGraph />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
