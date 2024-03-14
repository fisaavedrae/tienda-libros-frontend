import React from "react";
import PropTypes from "prop-types";

const lala = "test";

const Search = (props) => {
  return (
    <>
      <div
        className="offcanvas offcanvas-top bg-black"
        tabIndex="-1"
        id="offcanvasSearch"
        aria-labelledby="offcanvasSearchLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasSearchLabel"></h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="fa fa-xmark btn-close-search"></i>
          </button>
        </div>
        <div className="offcanvas-body items-center align-items-center d-flex justify-content-center ">
          <div className="border-bottom w-50">
            <div className="input-group mb-3 ">
              <input type="text" id="inputSearch" placeholder="Buscar..." />
              <span className="input-group-text">
                <i className="fa fa-magnifying-glass"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Search.propTypes = {};

export default Search;
