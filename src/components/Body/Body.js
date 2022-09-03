import React from "react";

import img from '../Body/image-hero-mobile.png'

function Body() {
  return (
    <div
      className="container text-center d-flex align-items-center"
      style={{ 'minHeight': "100vh" }}>
      <div className="row gx-5">
        <div className="col-12 col-md-6">
          <h1 style={{ fontSize: "40px" }}>Make remote work</h1>
          <p>
            Get your team in sync, no matter your location.Streamline processes,
            create team rituals, and watch productivity soar.
          </p>
          <button type="button" class="btn btn-dark">
            Learn more
          </button>
        </div>
        <div className="col-12 col-md-6 mt-4" >
          <img src={img} className="img-fluid rounded" alt="logo" style={{'width': '100%', 'height': '100%'}}></img>
        </div>
      </div>
    </div>
  );
}

export default Body;
