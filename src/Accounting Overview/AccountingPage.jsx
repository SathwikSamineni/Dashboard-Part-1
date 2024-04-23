import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import AccountingTable from "./AccountingTable";
import './Accounting.css';
import './AccountingTable.css';

const AccountingPage = () => {

    return (
        <div id="content">
            <div id="content-header">
                <ol className="breadcrumb">
                    <li><a href="https://stagingapp.blue222.com/fadmin/dashboard/fain_progress"> <i className="fa fa-dashboard"></i> Dashboard</a></li>
                    <li>Accounting</li>
                    <li>Overview</li>
                </ol>
            </div>

            <div id="content-container">
                <div className="modal" id="AboutFactoring" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{ overflow: 'auto', height: 'auto', width: '90%' }}>
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
                                <h6 className="modal-title" id="myModalLabel">
                                    <b>Invoice Factoring Process </b>
                                </h6>
                            </div>
                            <div className="modal-body" style={{ overflow: 'auto', height: 'auto', width: '98%' }}>
                                <div className="form-group col-lg-12" style={{ marginBottom: '5px', textAlign: 'justify', lineHeight: '18px' }}>
                                    <table role="grid" id="example" className="tablesorter table table-bordered hasFilters tablesorter-bootstrap" width="100%" style={{ fontSize: '12px', textAlign: 'justify' }}>
                                        <tbody>
                                            <tr bgcolor="#eee" style={{ fontSize: '13px', fontWeight: 'bold' }}>
                                                <td> Process</td>
                                                <td>Example</td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <i className="glyphicon glyphicon-ok"></i>
                                                    Pick an invoice. Check the box next to the invoice.
                                                    Accept the factoring agreement.
                                                </td>
                                                <td>
                                                    $1,000 Invoice
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <i className="glyphicon glyphicon-ok"></i>
                                                    Blue222 will notify you by email of the amount that is available
                                                    to factor, based on Clearleaf Financial’s underwriting criteria.
                                                    It will be 65% to 90% of the invoice amount.
                                                </td>
                                                <td>
                                                    $750 (75% of invoice amount)
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <i className="glyphicon glyphicon-ok"></i>
                                                    Blue222 transfers the available amount to your checking account
                                                    within 2 to 3 days.
                                                </td>
                                                <td>
                                                    $750 transferred to your account
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <i className="glyphicon glyphicon-ok"></i>
                                                    When Blue222 receives the final payment from your client,
                                                    the remaining balance on your invoice is transferred to your
                                                    checking account within 2 to 3 days. Minus 6% Clearleaf fee.
                                                </td>
                                                <td>
                                                    $250 remaining - $60 Clearleaf fee = $190 transferred
                                                    to your account
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content">
                    <div className="col-md-12">
                        <div className="page-header">
                            <h3 align="left">Accounting Overview</h3>
                        </div>

                        <form method="POST" action="https://stagingapp.blue222.com/accounting/overview/exportExcel" accept-charset="UTF-8" id="form_filter_data"><input name="_token" type="hidden" value="7V774e72tIOcW78A5SB6JK8UO1vwy06Hxsp8E8NA" />
                            <div className="panel-body" style={{ marginTop: '-20px', marginBottom: '-20px' }}>
                                <div className="panel panel-info">
                                    <div className="col-md-12" style={{ backgroundColor: '#d9edf7', paddingBottom: '1px' }}>
                                        <div className="row" style={{ paddingTop: '10px', marginBottom: '7px' }}>
                                            <div className="col-md-8">
                                                <p align="left" className="panel-title">Filter Data</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel-body" style={{ paddingBottom: '0px' }}>
                                        <div className="col-md-12">
                                            <div className="row">
                                                <div className="col-md-1">
                                                    <label htmlFor="column_selection" className="control-label">Column</label>
                                                </div>
                                                <div className="col-md-3">
                                                    <select className="form-control file_headers" id="filter_column" required name="filter_column"><option value="" selected>Select Column</option><option value="accept_date">Accept Date</option><option value="complete_date">Complete Date</option></select>
                                                </div>
                                                <div className="col-md-1">
                                                    <label htmlFor="date_selection" className="control-label">Date</label>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="reportrange form-control "> <FontAwesomeIcon icon={faCalendar} className="text-primary" />&nbsp;
                                                        <span>4/22/2024 - 4/22/2024</span> <i className="fa fa-caret-down"></i> </div>
                                                </div>
                                                <div className="col-md-1">
                                                    <input className="btn btn-success" formAction="https://stagingapp.blue222.com/accounting/overview" type="submit" value="Apply" />
                                                </div>
                                                <div className="col-md-1">
                                                    <button className="btn btn-warning" id="btn_export_reset" type="button">Reset</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <input name="export_filter_column" type="hidden" />
                        <input name="export_start_date" type="hidden" value="" />
                        <input name="export_end_date" type="hidden" value="" />


                        {/* <div className="col-md-12">
                            <div className="portlet">
                                <div id="account-overview-table_wrapper" className="dataTables_wrapper form-inline dt-bootstrap no-footer">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="dataTables_length" id="account-overview-table_length">
                                                <label>Show <select name="account-overview-table_length" aria-controls="account-overview-table" className="form-control input-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="-1">All</option></select> entries</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div id="account-overview-table_filter" className="dataTables_filter">
                                                <label>Search:<input type="search" className="form-control input-sm" placeholder="Search..." aria-controls="account-overview-table" /></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <table className="table table-bordered dataTable no-footer dtr-inline" id="account-overview-table" width="100%" style={{ fontSize: '13px', width: '100%' }} role="grid" aria-describedby="account-overview-table_info">
                                                <thead>
                                                    <tr role="row">
                                                        <th className="sorting_asc" tabIndex="0" aria-controls="account-overview-table" rowspan="1" colspan="1" style={{ width: '145px' }} aria-label="Project Name: activate to sort column descending" aria-sort="ascending">Project Name</th>
                                                        <th className="sorting" tabIndex="0" aria-controls="account-overview-table" rowspan="1" colspan="1" style={{ width: '146px' }} aria-label="Vendor Name: activate to sort column ascending">Vendor Name</th>
                                                        <th className="sorting" tabIndex="0" aria-controls="account-overview-table" rowspan="1" colspan="1" style={{ width: '49px' }} aria-label="City: activate to sort column ascending">City</th>
                                                        <th className="sorting" tabIndex="0" aria-controls="account-overview-table" rowspan="1" colspan="1" style={{ width: '63px' }} aria-label="State: activate to sort column ascending">State</th>
                                                        <th className="sorting" tabIndex="0" aria-controls="account-overview-table" rowspan="1" colspan="1" style={{ width: '146px' }} aria-label="Total Amount: activate to sort column ascending">Total Amount</th>
                                                        <th className="sorting" tabIndex="0" aria-controls="account-overview-table" rowspan="1" colspan="1" style={{ width: '130px' }} aria-label="Fee Amount: activate to sort column ascending">Fee Amount</th>
                                                        <th className="sorting" tabIndex="0" aria-controls="account-overview-table" rowspan="1" colspan="1" style={{ width: '130px' }} aria-label="Accept Date: activate to sort column ascending">Accept Date</th>
                                                        <th className="sorting" tabIndex="0" aria-controls="account-overview-table" rowspan="1" colspan="1" style={{ width: '158px' }} aria-label="Complete Date: activate to sort column ascending">Complete Date</th>
                                                    </tr>
                                                </thead>
                                                <tfoot>
                                                    <tr>
                                                        <th colSpan="12" className="ts-pager form-horizontal"> <button type="button" className="btn first"><i className="icon-step-backward glyphicon glyphicon-step-backward"></i></button>
                                                            <button type="button" className="btn prev"><i className="icon-arrow-left glyphicon glyphicon-backward"></i></button>
                                                            <span className="pagedisplay"></span>

                                                            <button type="button" className="btn next"><i className="icon-arrow-right glyphicon glyphicon-forward"></i></button>
                                                            <button type="button" className="btn last"><i className="icon-step-forward glyphicon glyphicon-step-forward"></i></button>
                                                            <select className="pagesize input-mini" title="Select page size">
                                                                <option selected="selected" value="10">10</option>
                                                                <option value="20">20</option>
                                                                <option value="30">30</option>
                                                                <option value="40">40</option>
                                                            </select>
                                                            <select className="pagenum input-mini" title="Select page number">
                                                            </select>
                                                        </th>
                                                    </tr>
                                                </tfoot>
                                                <tbody>

                                                    <tr className="odd"><td valign="top" colSpan="8" className="dataTables_empty">No data available in table</td></tr></tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="dataTables_info" id="account-overview-table_info" role="status" aria-live="polite">Showing 0 to 0 of 0 entries</div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="dataTables_paginate paging_simple_numbers" id="account-overview-table_paginate">
                                                <ul className="pagination">
                                                    <li className="paginate_button previous disabled" aria-controls="account-overview-table" tabIndex="0" id="account-overview-table_previous"><a href="#">Previous</a></li>
                                                    <li className="paginate_button next disabled" aria-controls="account-overview-table" tabIndex="0" id="account-overview-table_next"><a href="#">Next</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <AccountingTable />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountingPage;
