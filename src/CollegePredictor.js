import React, { useState } from 'react';
import Advertisement from './Advertisement';

const CollegePredictor = () => {
  const [rank, setRank] = useState('');
  const [category, setCategory] = useState('general');
  const [predictionResult, setPredictionResult] = useState('');

  const handleRankChange = (event) => {
    setRank(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = predictCollege(rank, category);
    setPredictionResult(result);
  };

  const predictCollege = (rank, category) => {
    // Perform your college prediction based on rank and category
    // Replace this with your actual prediction algorithm or API call
    // Return the predicted college or any relevant result
    // For example, let's assume the prediction result is a string
    return `You are predicted to get admission in College X`;
  };

  return (
    <div className="container">
      <nav className="navbar navbar-dark bg-primary mb-5">
        <a className="navbar-brand" href="#">NIMCET College Predictor</a>
      </nav>
      <div className="jumbotron bg-info text-white text-center">
        <h1 className="display-4">Predict Your College</h1>
        <p className="lead">Enter your rank and category to predict your college</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="rank">Enter Your Rank:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="rank"
                    name="rank"
                    placeholder="Enter your rank..."
                    value={rank}
                    onChange={handleRankChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="category">Select Your Category:</label>
                  <select
                    className="form-control"
                    id="category"
                    name="category"
                    value={category}
                    onChange={handleCategoryChange}
                  >
                    <option value="general">General</option>
                    <option value="ews">EWS</option>
                    <option value="obc">OBC</option>
                    <option value="sc">SC</option>
                    <option value="st">ST</option>
                  </select>
                </div>
                <div className="text-center">
                  <button className="btn btn-primary" type="submit">Predict</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Advertisement />
    </div>
  );
};

export default CollegePredictor;
