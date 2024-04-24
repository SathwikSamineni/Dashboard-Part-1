import React from 'react';
import TablePager from '../TableGrid/TablePager';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Target.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard } from '@fortawesome/free-solid-svg-icons'; 


const TargetLocationList = () => {

    return (
        <div id="content">
            <div id="content-header" style={{ borderBottomRightRadius: '4px' , borderBottomLeftRadius: '4px' , borderTopLeftRadius: '4px' , borderTopRightRadius: '4px' }}>
                <div className="row">
                    <div className="col-md-7 col-sm-6 col-xs-12">
                        <ol className="breadcrumb" style={{ marginLeft: '30px'}}>
                            <li><a href="https://stagingapp.blue222.com/fadmin/dashboard/fain_progress"><FontAwesomeIcon icon={faDashboard} /> Dashboard</a></li>
                            <li>Target Locations List</li>
                        </ol>
                    </div>
                    <div className="col-md-5 col-sm-6 col-xs-12">
                        <a href="https://stagingapp.blue222.com/target/locations/new" className="btn btn-success btn-md" style={{ margin: '7px' }}>Add New Location</a>
                        <a href="#" data-toggle="modal" data-target="#applyLinkURLBox" className="btn btn-warning btn-md">Apply Link</a>
                        <a href="https://stagingapp.blue222.com/short/0k0jg" target="_blank" style={{ float: 'right', marginLeft: '15px' }}><button className="btn btn-info" id="new-without-image">Map View</button></a>
                    </div>
                </div>
            </div>

            <div id="content-container">
                <div className="content">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-12">
                                <p><br />Add target locations below. These are locations that you are trying to find Preferred Vendors.</p>
                                <p>If you click on Map View button, you will see a map of the locations you have entered below.</p>
                                <p>Each map location will have an “Apply” button. Click the “Apply Link” button above to add the link that you wish to show when the interested Vendor clicks on the Apply button.</p>
                            </div>
                        </div>

                        <div className="panel-body">
                            <div className="modal" id="applyLinkURLBox" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            Apply Link
                                        </div>
                                        <div className="modal-body">
                                            <form method="POST" action="https://stagingapp.blue222.com/target/locations/applylink/save" acceptCharset="UTF-8" id="applylinkform" encType="multipart/form-data">
                                                <input name="_token" type="hidden" value="wQzfWWAtPlvvowKg3cztXE1dLCcMtQTwZbgmMv5x" />
                                                <div className="panel-body" id="address">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p>If you add a link here, all links for locations on the table below will be globally replaced with this link.</p>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-lg-12 ">
                                                        <label htmlFor="Apply Link" className="control-label">Apply Link</label>
                                                        <input id="apply_link" required="required" className="form-control" name="apply_link" type="url" />
                                                        <span className="error-display" style={{ color: 'red' }}></span>
                                                    </div>
                                                    <div className="form-group col-lg-12">
                                                        <input id="action3" className="btn btn-info" value="Save" name="action" form="applylinkform" style={{ marginTop: '1%' }} type="submit" />
                                                        &nbsp; &nbsp;
                                                        <a href="https://stagingapp.blue222.com/target/locations/list"><button className="btn btn-danger widget-active" style={{ marginTop: '1%' }} type="button">Cancel</button></a>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="portlet">
                                <table className="ui-table-reflow tablesorter table table-bordered tablesorter-bootstrap" style={{ fontSize: '13px' }} role="grid">
                                    <colgroup></colgroup>
                                    <thead>
                                        <tr role="row" className="tablesorter-headerRow">
                                            <th data-placeholder="Filter by City" data-column="0" className="tablesorter-header tablesorter-headerUnSorted bootstrap-header" tabIndex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="City : No sort applied, activate to apply an ascending sort" style={{ userSelect: 'none' }}><div className="tablesorter-wrapper" style={{ position: 'relative', height: '100%', width: '100%' }}><div className="tablesorter-header-inner">City <i className="tablesorter-icon bootstrap-icon-unsorted"></i></div></div></th>
                                            <th data-placeholder="Filter by State" data-column="1" className="tablesorter-header tablesorter-headerUnSorted bootstrap-header" tabIndex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="State : No sort applied, activate to apply an ascending sort" style={{ userSelect: 'none' }}><div className="tablesorter-wrapper" style={{ position: 'relative', height: '100%', width: '100%' }}><div className="tablesorter-header-inner">State <i className="tablesorter-icon bootstrap-icon-unsorted"></i></div></div></th>
                                            <th data-placeholder="Filter by Type Of Project" data-column="2" className="tablesorter-header tablesorter-headerUnSorted bootstrap-header" tabIndex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Type of Project : No sort applied, activate to apply an ascending sort" style={{ userSelect: 'none' }}><div className="tablesorter-wrapper" style={{ position: 'relative', height: '100%', width: '100%' }}><div className="tablesorter-header-inner">Type of Project <i className="tablesorter-icon bootstrap-icon-unsorted"></i></div></div></th>
                                            <th data-placeholder="Filter by Description" className="sorter-false tablesorter-header tablesorter-headerUnSorted bootstrap-header" data-column="3" tabIndex="0" scope="col" role="columnheader" aria-disabled="true" unselectable="on" aria-sort="none" style={{ userSelect: 'none' }}><div className="tablesorter-wrapper" style={{ position: 'relative', height: '100%', width: '100%' }}><div className="tablesorter-header-inner">Description <i className="tablesorter-icon"></i></div></div></th>
                                            <th data-placeholder="Filter by Budget Range" className="sorter-false tablesorter-header tablesorter-headerUnSorted bootstrap-header" data-column="4" tabIndex="0" scope="col" role="columnheader" aria-disabled="true" unselectable="on" aria-sort="none" style={{ userSelect: 'none' }}><div className="tablesorter-wrapper" style={{ position: 'relative', height: '100%', width: '100%' }}><div className="tablesorter-header-inner">Budget Range <i className="tablesorter-icon"></i></div></div></th>
                                            <th data-placeholder="NA" className="sorter-false tablesorter-header tablesorter-headerUnSorted bootstrap-header" data-column="5" tabIndex="0" scope="col" role="columnheader" aria-disabled="true" unselectable="on" aria-sort="none" style={{ userSelect: 'none' }}><div className="tablesorter-wrapper" style={{ position: 'relative', height: '100%', width: '100%' }}><div className="tablesorter-header-inner">Action <i className="tablesorter-icon"></i></div></div></th>
                                        </tr>
                                    </thead>
                                    <tbody aria-live="polite" aria-relevant="all"><tr><td colSpan="6" style={{ textAlign: 'center', background: '#eee', color: '#900', fontSize: 'large' }}>No Record Found</td></tr></tbody>
                                </table>
                                <TablePager />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TargetLocationList;
