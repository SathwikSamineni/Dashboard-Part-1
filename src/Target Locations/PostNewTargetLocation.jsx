import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pntl.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";



const PostNewTargetLocation = () => {

    return (
        <div id="content">
            <div id="content-header" style={{ borderBottomRightRadius: '4px' , borderBottomLeftRadius: '4px' , borderTopLeftRadius: '4px' , borderTopRightRadius: '4px' }}>
                <ol className="breadcrumb" style={{ marginLeft: '30px'}}>
                    <li><Link to="https://stagingapp.blue222.com/fadmin/dashboard/fain_progress"> <FontAwesomeIcon icon={faDashboard} /> Dashboard</Link></li>
                    <li><Link to="/target"> Target Location</Link></li>
                    <li>Post New Target Location</li>
                </ol>
            </div>
            <div id="content-container">
                <div className="col-md-12">
                    
                        <div className="panel panel-info">
                            <div style={{ backgroundColor: '#d9edf7', padding: '2px' }}>
                                <div className="row" style={{ marginTop: '2px', marginBottom: '-1%' }}>
                                    <div className="col-md-5">
                                        <div className="row">
                                            <div className="form-group" align="left" style={{ marginTop: '1%' }}>
                                                <div className="col-md-6" style={{ paddingLeft: '6%' }}>
                                                    <input type="hidden" name="action" id="action" />
                                                    <label style={{ fontSize: '14px' }} className="control-label">
                                                        Select Type of Project
                                                        <span className="help-tip" style={{ marginLeft: '0px', marginTop: '7px' }} data-toggle="tooltip" data-placement="auto" title="Please select one or more project type. Your search results will show Vendors that match any of the selected services and each of the services that they provide."></span>
                                                         
                                                    </label>
                                                    
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="dev-drop">
                                                        <ul className="nav">
                                                            <div className="dropdown">
                                                                <li className="button-dropdown"> <a href="javascript:void(0)" className="dropdown-toggle" id="select-rfp">  Select RFP Type <span>▼</span> </a>
                                                                    <ul className="dropdown-menu" role="menu">
                                                                    </ul>
                                                                </li>
                                                            </div>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel-body">
                                <div className="col-sm-12" style={{ float: 'right' }}>
                                    <div className="panel panel-info">
                                        <div className="panel-heading">
                                            <div className="panel-title" align="left">Location Information</div>
                                        </div>
                                        <div className="panel-body" id="address">
                                            <div className="form-group col-lg-4">
                                                <label htmlFor="Country" id="" className="control-label">Country</label>
                                                <select id="country" name="country" className="form-control bfh-countries" data-country="US" style={{ height: '38px' }}>
                                                    
                                                </select>
                                                <span className="error-display" style={{ color: 'red' }}></span>
                                            </div>
                                            <div className="form-group col-lg-4">
                                                <label htmlFor="state" id="" className="control-label">State/Province</label>
                                                <select id="state" name="state" className="form-control bfh-states" data-country="US" style={{ height: '38px' }}>
                                                    
                                                </select>
                                                <span className="error-display" style={{ color: 'red' }}></span>
                                            </div>
                                            <div className="form-group col-lg-4">
                                                <label htmlFor="city" id="" className="control-label">City</label>
                                                <select id="city" name="city" className="form-control bfh-cities" style={{ height: '38px' }}>
                                                    
                                                </select>
                                                <span className="error-display" style={{ color: 'red' }}></span>
                                            </div>
                                            <div style={{ clear: 'both' }}></div>
                                            <div className="form-group col-lg-4">
                                                <label htmlFor="zipcode" id="" className="control-label">Zip Code</label>
                                                <input type="text" id="zipcode" name="zipcode" className="form-control" />
                                                <span className="error-display" style={{ color: 'red' }}></span>
                                            </div>
                                            <div class="form-group col-lg-4 ">
                                                <label for="High" id="" class="control-label">Low Budget ($)</label>
                                                <input id="budget_high" required="required" class="form-control" placeholder="$" onkeypress="decimalOnly(event)" onpaste="return false" name="budget_high" type="text" />
                                                <span class="error-display" style={{ color: "red" }}></span>
			                                </div>
                                            <div class="form-group col-lg-4 ">
                                                <label for="High" id="" class="control-label">High Budget ($)</label>
                                                <input id="budget_high" required="required" class="form-control" placeholder="$" onkeypress="decimalOnly(event)" onpaste="return false" name="budget_high" type="text" />
                                                <span class="error-display" style={{ color: "red" }}></span>
                                            </div>
                                            <div style={{ clear: 'both' }}></div>



                                            <div className="form-group col-lg-12">
                                                <label htmlFor="description" id="" className="control-label">Project Description</label>
                                                <textarea id="description" required="required" className="form-control" rows="3" name="description" cols="50"></textarea>
                                                <span className="error-display" style={{ color: 'red' }}></span>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span style={{ color: 'Red', marginLeft: '15px' }}>* Indicates a required field</span>
                        <div style={{ clear: 'both' }}></div>
                        <div className="col-lg-11">
                            <div className="col-md-12">
                                <div className="col-md-1" style={{ marginTop: '0.5%' }}>
                                    <input id="action3" className="btn btn-info" value="Save" name="action" form="projectform" style={{ marginTop: '1%' }} type="submit" />
                                    &nbsp; &nbsp;
                                    <Link to="/target"><button className="btn btn-danger" style={{ marginTop: '1%' }} type="button">Cancel</button></Link>
                                </div>
                                <div className="col-md-6" style={{ marginTop: '0.2%' }}>
                                </div>
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    );
}

export default PostNewTargetLocation;
