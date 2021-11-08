import BarChart from 'components/BarChart';
import DataTable from 'components/DataTable';
import DonutsChart from 'components/DonutsChart';
import Footer from 'components/Footer';
import NavBar from 'components/NavBars';

const Dashboard = () => {
  return (
    <div>
      <>
        <NavBar />
        <div className="container">
          <h1 className="text-primary py-3"> Dahsboard de vendas! </h1>

          <div className="row px-3">
            <div className="col-sm-6">
              <h5 className="text-center text-secondary">(%) de Sucesso</h5>
              <BarChart />
            </div>

            <div className="col-sm-6">
              <h5 className="text-center text-secondary">Todas Vendas</h5>
              <DonutsChart />
            </div>
          </div>

          <div className="py-3">
            <h2 className="text-primary"> Todas Vendas </h2>
          </div>

          <DataTable />
        </div>
        <Footer />
      </>
    </div>
  );
};

export default Dashboard;
