// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendar, faDashboard, faCaretDown } from '@fortawesome/free-solid-svg-icons';
// import AccountingTable from "./AccountingTable";
// import { Link } from "react-router-dom";
// import './Accounting.css';

// const ContentHeader = () => {
//     return (
//         <div id="content-header" className="content-header" style={{ borderBottomRightRadius: '4px' , borderBottomLeftRadius: '4px' , borderTopLeftRadius: '4px' , borderTopRightRadius: '4px' }} >
//             <ol className="breadcrumb" style={{ marginLeft: '30px'}}>
//                 <li><Link to="https://stagingapp.blue222.com/fadmin/dashboard/fain_progress"> <FontAwesomeIcon icon={faDashboard} /> Dashboard</Link></li>
//                 <li>Accounting</li>
//                 <li>Overview</li>
//             </ol>
//         </div>
//     );
// }

// const FilterForm = () => {
//     return (
//         <form method="POST" action="https://stagingapp.blue222.com/accounting/overview" accept-charset="UTF-8" id="form_filter_data">
//             <div className="row">
//                 <div className="col-md-1">
//                     <label htmlFor="column_selection" className="control-label" >Column</label>
//                 </div>
//                 <div className="col-md-3">
//                     <select className="form-control file_headers" id="filter_column" required="" name="filter_column">
//                         <option value="" selected="selected">Select Column</option>
//                         <option value="accept_date">Accept Date</option>
//                         <option value="complete_date">Complete Date</option>
//                     </select>
//                 </div>
//                 <div className="col-md-1">
//                     <label htmlFor="date_selection" className="control-label" style={{ marginLeft: '50px' }}>Date</label>
//                 </div>
//                 <div className="col-md-3">
//                     <div className="reportrange form-control " >
//                         <FontAwesomeIcon icon={faCalendar} className="text-primary" />&nbsp;
//                         <span>4/23/2024 - 4/23/2024</span>
//                         <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: '15px' }}/>
//                     </div>
//                 </div>
//                 <div className="col-md-1">
//                     <input className="btn btn-success" id="btn-apply" type="submit" value="Apply" style={{ padding: '6px 12px' }} />
//                 </div>
//                 <div className="col-md-1">
//                     <button className="btn btn-warning" id="btn_export_reset" type="button" >Reset</button>
//                 </div>
//             </div>
//         </form>
//     );
// }

// const ExportForm = () => {
//     return (
//         <form method="POST" action="https://stagingapp.blue222.com/accounting/overview/exportExcel" accept-charset="UTF-8" id="form_export_data">
//             <input name="_token" type="hidden" value="DK5F7vJVx4lMG0qNafz0Aau9mlp9LtFSSmurnWVE" />
//             <div className="col-md-2">
//                 <input className="btn btn-success" id="btn-export-to-excel" type="submit" value="Export to Excel" />
//             </div>
//         </form>
//     );
// }

// const AccountingPage = () => {
//     return (
//         <div id="content">
//             <ContentHeader />
//             <div id="content-container">
//                 <div className="content">
//                     <div className="col-md-12">
//                         <div className="page-header">
//                             <h3 align="left">Accounting Overview</h3>
//                         </div>
//                         <FilterForm />
//                         <ExportForm />
//                         <input name="export_filter_column" type="hidden" />
//                         <input name="export_start_date" type="hidden" value="" />
//                         <input name="export_end_date" type="hidden" value="" />
//                         <AccountingTable />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AccountingPage;

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faDashboard, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import AccountingTable from "./AccountingTable";
import { Link } from "react-router-dom";

const ContentHeader = () => {
    return (
        <div id="content-header" className="content-header" style={{ borderBottomRightRadius: '4px' , borderBottomLeftRadius: '4px' , borderTopLeftRadius: '4px' , borderTopRightRadius: '4px' }}>
            <ol className="breadcrumb" style={{ marginLeft: '30px'}} >
                <li><Link to="https://stagingapp.blue222.com/fadmin/dashboard/fain_progress"> <FontAwesomeIcon icon={faDashboard} /> Dashboard</Link></li>
                <li>Accounting</li>
                <li>Overview</li>
            </ol>
        </div>
    );
}

const FilterForm = () => {
    return (
        <form method="POST" action="https://stagingapp.blue222.com/accounting/overview" accept-charset="UTF-8" id="form_filter_data">
            <div className="row">
                <div className="col-md-1">
                    <label htmlFor="column_selection" className="control-label" >Column</label>
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
                    <div className="reportrange form-control " >
                        <FontAwesomeIcon icon={faCalendar} className="text-primary" />&nbsp;
                        <span>4/23/2024 - 4/23/2024</span>
                        <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: '15px' }}/>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-end"> {/* Adjust the column size accordingly */}
                    <div className="btn-group" role="group">
                        <button className="btn btn-success" id="btn-apply" type="submit" style={{ padding: '6px 12px' }}>Apply</button>
                        <button className="btn btn-warning" id="btn_export_reset" type="button" style={{ marginLeft: '10px' }}>Reset</button>
                    </div>
                </div>
            </div>
        </form>
    );
}

const ExportForm = () => {
    return (
        <form method="POST" action="https://stagingapp.blue222.com/accounting/overview/exportExcel" accept-charset="UTF-8" id="form_export_data">
            <div className="col-md-2">
                <input className="btn btn-success" id="btn-export-to-excel" type="submit" value="Export to Excel" />
            </div>
        </form>
    );
}

const AccountingPage = () => {
    return (
        <div id="content">
            <ContentHeader />
            <div id="content-container">
                <div className="content">
                    <div className="col-md-12">
                        <div className="page-header">
                            <h3 align="left">Accounting Overview</h3>
                        </div>
                        <FilterForm />
                        <ExportForm />
                        <input name="export_filter_column" type="hidden" />
                        <input name="export_start_date" type="hidden" value="" />
                        <input name="export_end_date" type="hidden" value="" />
                        <AccountingTable />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountingPage;
