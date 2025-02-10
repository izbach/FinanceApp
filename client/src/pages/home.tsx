import Navbar from "../Components/Navbar.tsx";
import { BarGraph } from "../Components/BarGraph.tsx";
import { DoughnutChart } from "../Components/DoughnutChart.tsx";
import { TotalsCard } from "../Components/IncomeDisplay.tsx";

function Home() {
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
            <TotalsCard
              title="Income(YTD)"
              dateFrom={new Date().toISOString().slice(5).concat("01-01")}
              type="Income"
            />
          </div>
          <div className="col">
            <div className="card">
              <h5 className="card-title">Expenses(YTD)</h5>
              <div className="card-body">$53,809</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <DoughnutChart />
          </div>
          <div className="col">
            <BarGraph />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
