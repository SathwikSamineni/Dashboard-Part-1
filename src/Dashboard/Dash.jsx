import React from 'react';
import './Dash.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableGrid from '../TableGrid/TableGrid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard } from '@fortawesome/free-solid-svg-icons';

const Dash = () => {
    return (
        <div id="content">
            <div id="content-header">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-8">
                        <ol className="breadcrumb" style={{ marginLeft: '30px'}}>
                            <li><a href="https://stagingapp.blue222.com/fadmin/dashboard/fain_progress"><FontAwesomeIcon icon={faDashboard} /> Dashboard</a></li>
                            <li>Active Projects</li>
                        </ol>
                    </div>
                    <div className="col-md-2 col-sm-6 col-xs-3">
                        <a href="#" className="btn  btn-warning  btn-sm" style={{ marginTop: '8px' }} id="dashboardFilter"><i className="fa fa-filter" aria-hidden="true"></i> Filter</a>
                        <span className="badge badge-pill badge-light notif-badge" style={{ top: '2px !important', marginLeft: '1px' }} title="No Filters Selected">0</span>
                    </div>
                </div>
            </div>

            <div id="content-container">
                <div className="content">
                

            <div className="col-md-12 visible-xs">
                <div className="collapse-chevron text-right">
                    <div className="collapse show" id="collapseFilter" >
                        <div className="row ten-columns" style={{ marginTop: '15px' }}>
                            <div className="col-sm-2">
                                <a href="https://stagingapp.blue222.com/fadmin/dashboard/fadraft"><button className="btn btn-custom btn-block text-left"><i className="fa fa-envelope"></i> Draft RFPs &nbsp;<span className="badge badge-pill badge-light">0</span></button></a>
                            </div>
                            <div class="col-sm-2">
                        <a href="https://stagingapp.blue222.com/faadmin/dashboard/fapending"><button class="btn btn-success btn-block"><i class="fa fa-check-circle"></i> Pending RFPs &nbsp;<span class="badge badge-pill badge-light">0</span></button></a>
                    </div>
                    <div class="col-sm-2">
                        <a href="https://stagingapp.blue222.com/fadmin/dashboard/fain_progress"><button class="btn btn-info btn-block widget-active"><i class="fa fa-bar-chart"></i> Active Projects &nbsp;<span class="badge badge-pill badge-light">0</span></button></a>
                    </div>
                    <div class="col-sm-2">
                        <a href="https://stagingapp.blue222.com/fadmin/dashboard/fain_pendingReview"><button class="btn btn-spl btn-block"><i class="fa fa-line-chart"></i> Pending Review &nbsp;<span class="badge badge-pill badge-light">0</span></button></a>
                    </div>
                    <div class="col-sm-2">
                        <a href="https://stagingapp.blue222.com/faadmin/dashboard/facomplete"><button class="btn btn-warning btn-block"><i class="fa fa-star-o"></i> Projects Completed &nbsp;<span class="badge badge-pill badge-light">0</span></button></a>
                    </div>

                    <div class="col-sm-2">
                        <a href="https://stagingapp.blue222.com/faadmin/dashboard/faall"><button class="btn btn-danger btn-block"><i class="fa fa-list"></i> All &nbsp;<span class="badge badge-pill badge-light">0</span></button></a>
                    </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="narrow-results" className="narrow-results collapse">
                <div className="row ten-columns" style={{ paddingTop: '15px' }}>
                    <div className="col-sm-6 col-md-6 col-lg-2">
                        <a href="https://stagingapp.blue222.com/fadmin/dashboard/fadraft"><button className="btn btn-custom btn-block text-left"><i className="fa fa-envelope"></i> Draft RFPs &nbsp;<span className="badge badge-pill badge-light">0</span></button></a>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-2">
                <a href="https://stagingapp.blue222.com/faadmin/dashboard/fapending"><button class="btn btn-success btn-block"><i class="fa fa-check-circle"></i> Pending RFPs &nbsp;<span class="badge badge-pill badge-light">0</span></button></a>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-2">
                <a href="https://stagingapp.blue222.com/fadmin/dashboard/fain_progress"><button class="btn btn-info btn-block widget-active"><i class="fa fa-bar-chart"></i> Active Projects &nbsp;<span class="badge badge-pill badge-light">0</span></button></a>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-2">
                <a href="https://stagingapp.blue222.com/fadmin/dashboard/fain_pendingReview"><button class="btn btn-spl btn-block"><i class="fa fa-line-chart"></i> Pending Review &nbsp;<span class="badge badge-pill badge-light">0</span></button></a>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-2">
                <a href="https://stagingapp.blue222.com/faadmin/dashboard/facomplete"><button class="btn btn-warning btn-block"><i class="fa fa-star-o"></i> Projects Completed &nbsp;<span class="badge badge-pill badge-light">0</span></button></a>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-2">
                <a href="https://stagingapp.blue222.com/faadmin/dashboard/faall"><button class="btn btn-danger btn-block"><i class="fa fa-list"></i> All &nbsp;<span class="badge badge-pill badge-light">0</span></button></a>
            </div>
                </div>
            </div>

           <TableGrid />
        </div>
        </div>
            </div>
    );
};

export default Dash;
