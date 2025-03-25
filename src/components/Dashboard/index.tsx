import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="dashboard-cards">
        <div className="card">
          <h2>Statistique 1</h2>
          <p>50</p>
        </div>
        <div className="card">
          <h2>Statistique 2</h2>
          <p>200</p>
        </div>
        <div className="card">
          <h2>Statistique 3</h2>
          <p>75</p>
        </div>
        <div className="card">
          <h2>Statistique 4</h2>
          <p>120</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
