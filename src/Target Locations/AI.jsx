import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AI.css';
import { Link } from 'react-router-dom';

const AI = ({ toggleModal }) => {
  return (
    <div className="modal show" id="applyLinkURLBox" tabIndex="-1" aria-labelledby="myModalLabel" style={{ display: 'block' }} aria-modal="true" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            Apply Link
          </div>
          <div className="modal-body">
              <div className="panel-body" id="address">
                <div className="row">
                  <div className="col-md-12">
                    <p>If you add a link here, all links for locations on the table below will be globally replaced with this link.</p>
                  </div>
                </div>
                <div className="form-group col-lg-12 ">
                  <label htmlFor="apply_link" className="control-label">Apply Link</label>
                  <input id="apply_link" required="required" className="form-control" name="apply_link" type="url" />
                  <span className="error-display" style={{ color: 'red' }}></span>
                </div>
                <div className="form-group col-lg-12">
                  <input id="action3" className="btn btn-info" value="Save" name="action" form="applylinkform" style={{ marginTop: '1%' }} type="submit" />
                  &nbsp; &nbsp;
                  <Link to="/target"><button className="btn btn-danger widget-active" style={{ marginTop: '1%' }} type="button" onClick={toggleModal}>Cancel</button></Link>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI;
