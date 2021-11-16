import React from "react";

const Chirpcode = ({ chirp }) => {
  return (
    <article className="col-md-7">
      <div className="card my-2 shadow">
        <div className="card-body">
          <h4 className="card-title text-center my-auto">{chirp.message}</h4>
          <h6 className="card-subtitle text-center">{chirp.username}</h6>
        </div>
      </div>
    </article>
  );
};

export default Chirpcode;
