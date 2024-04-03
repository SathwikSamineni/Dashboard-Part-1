import React from "react";
import "./Part.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEnvelope, faBarChart, faLineChart, faList } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
const Part = () => {
    return (
        <div id="content-container" className="card-container">
            <div id="narrow-results" className="narrow-results collapse">
        <div className="row ten-columns" style= {{ paddingTop: "15px" }}>
            <div className="col-sm-6 col-md-6 col-lg-2">
                <a href="https://stagingapp.blue222.com/fadmin/dashboard/fadraft">
                <button className="btn btn-custom btn-block text-left widget-active">
                <FontAwesomeIcon icon={faEnvelope} /> Draft RFPs &nbsp;
                <span className="badge badge-pill badge-light">0</span>
                </button>
                </a>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-2">
                <a href="https://stagingapp.blue222.com/faadmin/dashboard/fapending">
                <button className="btn btn-success btn-block">
                <FontAwesomeIcon icon={faCheckCircle} /> Pending RFPs
                <span className="badge badge-pill badge-light">0</span>
                </button>
                </a>
            </div>
            
            <div className="col-sm-6 col-md-6 col-lg-2">
                <a href="https://stagingapp.blue222.com/fadmin/dashboard/fain_progress">
                <button className="btn btn-info btn-block">
                <FontAwesomeIcon icon={faBarChart} /> Active Projects &nbsp;
                <span className="badge badge-pill badge-light">0</span>
                </button>
                </a>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-2">
                <a href="https://stagingapp.blue222.com/fadmin/dashboard/fain_pendingReview">
                <button className="btn btn-spl btn-block">
                <FontAwesomeIcon icon={faLineChart} /> Pending Review &nbsp;
                <span className="badge badge-pill badge-light">0</span>
                </button>
                </a>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-2">
                <a href="https://stagingapp.blue222.com/faadmin/dashboard/facomplete">
                <button className="btn btn-warning btn-block">
                <FontAwesomeIcon icon={farStar} /> Projects Completed &nbsp;
                <span className="badge badge-pill badge-light">0</span>
                </button>
                </a>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-2">
                <a href="https://stagingapp.blue222.com/faadmin/dashboard/faall">
                <button className="btn btn-danger btn-block">
                <FontAwesomeIcon icon={faList} /> All &nbsp;
                <span className="badge badge-pill badge-light">0</span>
                </button>
                </a>
            </div>
        </div>
        </div> 
        </div>

    );
}

export default Part;