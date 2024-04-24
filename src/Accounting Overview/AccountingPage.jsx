import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faDashboard, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import AccountingTable from "./AccountingTable";
import './Accounting.css';
import { Link } from "react-router-dom";
import Calendar from "./Calendar";

const AccountingPage = () => {
    const [showComponent, setShowComponent] = useState(false);

    const toggleComponent = () => {
        setShowComponent(true);
    };

    return (
        <div id="content">
            <div id="content-header" style={{ borderBottomRightRadius: '4px', borderBottomLeftRadius: '4px', borderTopLeftRadius: '4px', borderTopRightRadius: '4px' }}>
                <ol className="breadcrumb" style={{ marginLeft: '30px' }}>
                    <li><Link to="https://stagingapp.blue222.com/fadmin/dashboard/fain_progress"><FontAwesomeIcon icon={faDashboard} /> Dashboard</Link></li>
                    <li>Accounting</li>
                    <li>Overview</li>
                </ol>
            </div>

            <div id="content-container">
                <div className="content">
                    <div className="col-md-12">
                        <div className="page-header">
                            <h3 align="left">Accounting Overview</h3>
                        </div>
                        <form>
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-1">
                                        <label htmlFor="column_selection" className="control-label">Column</label>
                                    </div>
                                    <div className="col-md-3">
                                        <select className="form-control file_headers" id="filter_column" required="" name="filter_column">
                                            <option value="" selected="selected">Select Column</option>
                                            <option value="accept_date">Accept Date</option>
                                            <option value="complete_date">Complete Date</option>
                                        </select>
                                    </div>
                                    <div className="col-md-1">
                                        <label htmlFor="date_selection" className="control-label" style={{ marginLeft: '50px' }}>Date</label>
                                    </div>
                                    <div className="col-md-3">
                                        <div>
                                            <div className="reportrange form-control" style={{ position: 'relative' }}>
                                                <FontAwesomeIcon icon={faCalendar} className="text-primary" />&nbsp;
                                                <span>4/23/2024 - 4/23/2024</span>
                                                <button onClick={toggleComponent} className="btn btn-primary" style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}>
                                                    <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: '15px' }} />
                                                </button>
                                            </div>
                                            <div style={{ paddingLeft: '100px' }}> {showComponent && <Calendar />} </div>
                                        </div>
                                    </div>

                                    <div className="col-md-1">
                                        <button className="btn btn-success" id="btn-apply" type="button">Apply</button>
                                    </div>
                                    <div className="col-md-1">
                                        <button className="btn btn-warning" id="btn_export_reset" type="button">Reset</button>
                                    </div>
                                    <div className="col-md-1">
                                        <button className="btn btn-success" id="btn_export" type="button">Export to Excel</button>
                                    </div>

                                </div>
                            </div>
                        </form>
                        <AccountingTable />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountingPage;
