import { useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import '../../styles/dashboard/index.css';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, LineElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend);

const data = {
  labels: ['Jan', 'Feb', 'Mar'],
  datasets: [
    {
      label: 'Ventes',
      data: [400, 300, 200],
      borderColor: 'blue',
      backgroundColor: 'rgba(0, 0, 255, 0.2)',
    },
    {
      label: 'Stock',
      data: [200, 100, 600],
      borderColor: 'blue',
      backgroundColor: 'rgba(238, 255, 0, 0.4)',
    },
    {
      label: 'Detruit',
      data: [300, 200, 500],
      borderColor: 'blue',
      backgroundColor: 'rgba(0, 255, 47, 0.4)',
    },
  ],
};

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);


  const [prediction, setPrediction]: any = useState(null);

  // modèle de régression linéaire
  const createAndTrainModel = async () => {
    // modèle séquentiel
    const model = tf.sequential();

    // couche dense avec 1 unité et une fonction d'activation 'linear'
    model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

    // Compilation modele
    model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

    // données d'entraînement
    const xs = tf.tensor([1, 2, 3], [3, 1]);
    const ys = tf.tensor(data.datasets[2].data, [3, 1]);

    // Entraînement modele
    await model.fit(xs, ys, { epochs: 100 });

    // Prédiction
    const output = model.predict(tf.tensor([4], [1, 1])) as tf.Tensor;
    
    //output est un tensor, et non un tableau
    const predictionValue = output.dataSync()[0];
    setPrediction(predictionValue);
  };

  useEffect(() => {
    createAndTrainModel();
  }, []);

  const handlePredictionClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };



  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
        <button className="prediction-button" onClick={handlePredictionClick}>Prediction</button>
      </div>
      <div className="dashboard-info">
        <div className="card">
          <h2>Statistique 1</h2>
        </div>
        <div className="card">
          <h2>Statistique 2</h2>
        </div>
        <div className="card">
          <h2>Statistique 3</h2>
        </div>
        <div className="card">
          <h2>Statistique 4</h2>
        </div>
      </div>
      <div className="dashboard-cards">
        <div className="card">
          <h2>Statistique 1</h2>
          <Line data={data} />
        </div>
        <div className="card">
          <h2>Statistique 2</h2>
          <Bar data={data} />
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" >
            <span className="close" >fermer</span>
            <h2>Prediction: </h2>
            <p>{prediction}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
