import React from 'react';
import './Dash.css';
import './Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard , faCheckCircle, faEnvelope, faChartLine, faList, faChartColumn } from '@fortawesome/free-solid-svg-icons';
import TablePager from '../TableGrid/TablePager';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

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
                <div class ="col-md-12">
                

            <div className="col-md-12 visible-xs">
                <div className="collapse-chevron text-right">
                    <div className="collapse show" id="collapseFilter" >
                        <div className="row ten-columns" style={{ marginTop: '15px' }}>
                            <div className="col-sm-2">
                                <a href="https://stagingapp.blue222.com/fadmin/dashboard/fadraft"><button className="btn btn-custom btn-block text-left"><FontAwesomeIcon icon={faEnvelope} style={{paddingRight : '5px'}}/> Draft RFPs &nbsp;<span className="badge badge-pill badge-light">0</span></button></a>
                            </div>
                            <div class="col-sm-2">
                        <a href="https://stagingapp.blue222.com/faadmin/dashboard/fapending"><button class="btn btn-success btn-block"><FontAwesomeIcon icon={faCheckCircle} /> Pending RFPs &nbsp;<span class="badge badge-pill badge-light">0</span></button></a>
                    </div>
                    <div class="col-sm-2">
                        <a href="https://stagingapp.blue222.com/fadmin/dashboard/fain_progress"><button class="btn btn-info btn-block widget-active"><FontAwesomeIcon icon={faChartColumn} /> Active Projects &nbsp;<span class="badge badge-pill badge-light">0</span></button></a>
                    </div>
                    <div class="col-sm-2">
                        <a href="https://stagingapp.blue222.com/fadmin/dashboard/fain_pendingReview"><button class="btn btn-spl btn-block"><FontAwesomeIcon icon={faChartLine} /> Pending Review &nbsp;<span class="badge badge-pill badge-light">0</span></button></a>
                    </div>
                    <div class="col-sm-2">
                        <a href="https://stagingapp.blue222.com/faadmin/dashboard/facomplete"><button class="btn btn-warning btn-block"><FontAwesomeIcon icon={farStar} />  Projects Completed &nbsp;<span class="badge badge-pill badge-light">0</span></button></a>
                    </div>

                    <div class="col-sm-2">
                        <a href="https://stagingapp.blue222.com/faadmin/dashboard/faall"><button class="btn btn-danger btn-block"><FontAwesomeIcon icon={faList} /> All &nbsp;<span class="badge badge-pill badge-light">0</span></button></a>
                    </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="narrow-results" className="narrow-results collapse">
                <div className="row ten-columns" style={{ paddingTop: '15px' }}>
                    <div className="col-sm-6 col-md-6 col-lg-2">
                        <a href="https://stagingapp.blue222.com/fadmin/dashboard/fadraft"><button className="btn btn-custom btn-block text-left"><FontAwesomeIcon icon={faEnvelope} style={{paddingRight : '5px'}}/> Draft RFPs &nbsp;<span className="badge badge-pill badge-light">0</span></button></a>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-2">
                <a href="https://stagingapp.blue222.com/faadmin/dashboard/fapending"><button class="btn btn-success btn-block"><FontAwesomeIcon icon={faCheckCircle} /> Pending RFPs &nbsp;<span class="badge badge-pill badge-light">0</span></button></a>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-2">
                <a href="https://stagingapp.blue222.com/fadmin/dashboard/fain_progress"><button class="btn btn-info btn-block widget-active"><FontAwesomeIcon icon={faChartColumn} /> Active Projects &nbsp;<span class="badge badge-pill badge-light">0</span></button></a>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-2">
                <a href="https://stagingapp.blue222.com/fadmin/dashboard/fain_pendingReview"><button class="btn btn-spl btn-block"><FontAwesomeIcon icon={faChartLine} /> Pending Review &nbsp;<span class="badge badge-pill badge-light">0</span></button></a>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-2">
                <a href="https://stagingapp.blue222.com/faadmin/dashboard/facomplete"><button class="btn btn-warning btn-block"><FontAwesomeIcon icon={farStar} /> Projects Completed &nbsp;<span class="badge badge-pill badge-light">0</span></button></a>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-2">
                <a href="https://stagingapp.blue222.com/faadmin/dashboard/faall"><button class="btn btn-danger btn-block"><FontAwesomeIcon icon={faList} /> All &nbsp;<span class="badge badge-pill badge-light">0</span></button></a>
            </div>
                </div>
            </div>

           <div className="portlet">
      <table className="ui-table-reflow tablesorter table table-bordered hasFilters tablesorter-bootstrap" style={{ fontSize: '13px' }} role="grid">
        <colgroup></colgroup>
        <thead>
          <tr role="row" className="tablesorter-headerRow">
            <th data-placeholder="Follow" data-column="0" className="tablesorter-header tablesorter-headerUnSorted bootstrap-header" tabIndex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" style={{ userSelect: 'none' }} aria-sort="none" aria-label="Follow : No sort applied, activate to apply an ascending sort">
              <div className="tablesorter-wrapper" style={{ position: 'relative', height: '100%', width: '100%' }}>
                <div className="tablesorter-header-inner">Follow <i className="tablesorter-icon bootstrap-icon-unsorted"></i></div>
              </div>
            </th>
            <th data-placeholder="Filter by Name" data-column="1" className="tablesorter-header tablesorter-headerUnSorted bootstrap-header" tabIndex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" style={{ userSelect: 'none' }} aria-sort="none" aria-label="Name : No sort applied, activate to apply an ascending sort">
              <div className="tablesorter-wrapper" style={{ position: 'relative', height: '100%', width: '100%' }}>
                <div className="tablesorter-header-inner">Name <i className="tablesorter-icon bootstrap-icon-unsorted"></i></div>
              </div>
            </th>
            <th style={{ width: '14%', userSelect: 'none' }} data-placeholder="Filter by Due Date" data-column="2" className="tablesorter-header tablesorter-headerUnSorted bootstrap-header" tabIndex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Due Date : No sort applied, activate to apply an ascending sort">
              <div className="tablesorter-wrapper" style={{ position: 'relative', height: '100%', width: '100%' }}>
                <div className="tablesorter-header-inner">Due Date <i className="tablesorter-icon bootstrap-icon-unsorted"></i></div>
              </div>
            </th>
            <th data-placeholder="Filter by Status" data-column="3" className="tablesorter-header tablesorter-headerUnSorted bootstrap-header" tabIndex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" style={{ userSelect: 'none' }} aria-sort="none" aria-label="Status : No sort applied, activate to apply an ascending sort">
              <div className="tablesorter-wrapper" style={{ position: 'relative', height: '100%', width: '100%' }}>
                <div className="tablesorter-header-inner">Status <i className="tablesorter-icon bootstrap-icon-unsorted"></i></div>
              </div>
            </th>
            <th data-placeholder="Filter by Type" data-column="4" className="tablesorter-header tablesorter-headerUnSorted bootstrap-header" tabIndex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" style={{ userSelect: 'none' }} aria-sort="none" aria-label="Type : No sort applied, activate to apply an ascending sort">
              <div className="tablesorter-wrapper" style={{ position: 'relative', height: '100%', width: '100%' }}>
                <div className="tablesorter-header-inner">Type <i className="tablesorter-icon bootstrap-icon-unsorted"></i></div>
              </div>
            </th>
            <th data-placeholder="Filter by City" data-column="5" className="tablesorter-header tablesorter-headerUnSorted bootstrap-header" tabIndex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" style={{ userSelect: 'none' }} aria-sort="none" aria-label="City : No sort applied, activate to apply an ascending sort">
              <div className="tablesorter-wrapper" style={{ position: 'relative', height: '100%', width: '100%' }}>
                <div className="tablesorter-header-inner">City <i className="tablesorter-icon bootstrap-icon-unsorted"></i></div>
              </div>
            </th>
            <th data-placeholder="Filter by State/Province" data-column="6" className="tablesorter-header tablesorter-headerUnSorted bootstrap-header" tabIndex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" style={{ userSelect: 'none' }} aria-sort="none" aria-label="State/Province : No sort applied, activate to apply an ascending sort">
              <div className="tablesorter-wrapper" style={{ position: 'relative', height: '100%', width: '100%' }}>
                <div className="tablesorter-header-inner">State/Province <i className="tablesorter-icon bootstrap-icon-unsorted"></i></div>
              </div>
            </th>
            <th data-placeholder="Filter by Address" data-column="7" className="tablesorter-header tablesorter-headerUnSorted bootstrap-header" tabIndex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" style={{ userSelect: 'none' }} aria-sort="none" aria-label="Address : No sort applied, activate to apply an ascending sort">
              <div className="tablesorter-wrapper" style={{ position: 'relative', height: '100%', width: '100%' }}>
                <div className="tablesorter-header-inner">Address <i className="tablesorter-icon bootstrap-icon-unsorted"></i></div>
              </div>
            </th>
            <th data-placeholder="Filter by Portfolio" data-column="8" className="tablesorter-header tablesorter-headerUnSorted bootstrap-header" tabIndex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" style={{ userSelect: 'none' }} aria-sort="none" aria-label="Portfolio : No sort applied, activate to apply an ascending sort">
              <div className="tablesorter-wrapper" style={{ position: 'relative', height: '100%', width: '100%' }}>
                <div className="tablesorter-header-inner">Portfolio <i className="tablesorter-icon bootstrap-icon-unsorted"></i></div>
              </div>
            </th>
            <th style={{ width: '14%', userSelect: 'none' }} data-placeholder="Filter by Vendor" data-column="9" className="tablesorter-header tablesorter-headerUnSorted bootstrap-header" tabIndex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Vendor(s) : No sort applied, activate to apply an ascending sort">
              <div className="tablesorter-wrapper" style={{ position: 'relative', height: '100%', width: '100%' }}>
                <div className="tablesorter-header-inner">Vendor(s) <i className="tablesorter-icon bootstrap-icon-unsorted"></i></div>
              </div>
            </th>
            <th style={{ width: '14%', userSelect: 'none' }} data-placeholder="Filter by Contractor/Writer" data-column="10" className="tablesorter-header tablesorter-headerUnSorted bootstrap-header" tabIndex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Contractor/Writers : No sort applied, activate to apply an ascending sort">
              <div className="tablesorter-wrapper" style={{ position: 'relative', height: '100%', width: '100%' }}>
                <div className="tablesorter-header-inner">Contractor/Writers <i className="tablesorter-icon bootstrap-icon-unsorted"></i></div>
              </div>
            </th>
            <th data-placeholder="Filter by Team" data-column="11" className="tablesorter-header tablesorter-headerUnSorted bootstrap-header" tabIndex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" style={{ userSelect: 'none' }} aria-sort="none" aria-label="Team : No sort applied, activate to apply an ascending sort">
              <div className="tablesorter-wrapper" style={{ position: 'relative', height: '100%', width: '100%' }}>
                <div className="tablesorter-header-inner">Team <i className="tablesorter-icon bootstrap-icon-unsorted"></i></div>
              </div>
            </th>
          </tr>
          <tr role="row" className="tablesorter-filter-row">
            <td><input type="search" placeholder="Follow" className="tablesorter-filter" data-column="0" data-lastsearchtime="1714744816236" /></td>
            <td><input type="search" placeholder="Filter by Name" className="tablesorter-filter" data-column="1" data-lastsearchtime="1714744816236" /></td>
            <td><input type="search" placeholder="Filter by Due Date" className="tablesorter-filter" data-column="2" data-lastsearchtime="1714744816236" /></td>
            <td><input type="search" placeholder="Filter by Status" className="tablesorter-filter" data-column="3" data-lastsearchtime="1714744816236" /></td>
            <td><input type="search" placeholder="Filter by Type" className="tablesorter-filter" data-column="4" data-lastsearchtime="1714744816236" /></td>
            <td><input type="search" placeholder="Filter by City" className="tablesorter-filter" data-column="5" data-lastsearchtime="1714744816236" /></td>
            <td><input type="search" placeholder="Filter by State/Province" className="tablesorter-filter" data-column="6" data-lastsearchtime="1714744816236" /></td>
            <td><input type="search" placeholder="Filter by Address" className="tablesorter-filter" data-column="7" data-lastsearchtime="1714744816236" /></td>
            <td><input type="search" placeholder="Filter by Portfolio" className="tablesorter-filter" data-column="8" data-lastsearchtime="1714744816236" /></td>
            <td><input type="search" placeholder="Filter by Vendor" className="tablesorter-filter" data-column="9" data-lastsearchtime="1714744816236" /></td>
            <td><input type="search" placeholder="Filter by Contractor/Writer" className="tablesorter-filter" data-column="10" data-lastsearchtime="1714744816236" /></td>
            <td><input type="search" placeholder="Filter by Team" className="tablesorter-filter" data-column="11" data-lastsearchtime="1714744816236" /></td>
          </tr>
        </thead>
        <tbody aria-live="polite" aria-relevant="all">
          <tr className="odd" style={{ display: 'table-row' }}></tr>
        </tbody>
      </table>
      <TablePager />
    </div>
        </div>
        </div>
        </div>
            </div>
    );
};

export default Dash;