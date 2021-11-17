import React from "react";

const Spinner = () => {
  return (
    <div className="d-flex justify-content.center">
      <div className="mx-auto text-center">
        <div className="spinner-border mt-5" role="status"></div>
        <div>Loading...</div>
      </div>
    </div>
  );
};

export default Spinner;
