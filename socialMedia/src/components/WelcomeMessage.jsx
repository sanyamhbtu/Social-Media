import React from "react";
import { IoInformationCircle } from "react-icons/io5";
function WelcomeMessage({onGetPostsClick}) {
  return (
    <>
      <div className="card" aria-hidden="true">
        <div className="card-body">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
          </h5>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-8"></span>
          </p>
          <a
            className="btn btn-primary disabled placeholder col-6"
            aria-disabled="true"
          ></a>
        </div>
        <div className="alert alert-primary d-flex align-items-center" role="alert">
          <span>
            {" "}
            <IoInformationCircle style={{ height: "2rem", width: "2rem" }} /> No
            Post has been added since{" "}
          </span>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button
            className="btn btn-info me-md-2"
            style={{ marginBottom: "0.5rem" }}
            type="button"
            onClick={onGetPostsClick}
          >
            Get Posts From Server
          </button>
        </div>
      </div>
    </>
  );
}

export default WelcomeMessage;
