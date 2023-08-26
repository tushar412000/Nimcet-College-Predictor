import React from 'react';

const Advertisement = () => {
  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Advertisement</h5>
            <img src="path_to_your_image" alt="Advertisement" className="img-fluid mb-3" />
            <p className="card-text">Place your advertisement content here.</p>
            <a href="https://your-advertisement-link.com" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
