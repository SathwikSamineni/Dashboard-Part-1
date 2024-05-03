import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ManagePortfolios.css';
import AccountingTable from "../Accounting Overview/AccountingTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import PortfolioTable from "./ManagePortfolioTable";

const ManagePortfolios = () => {
    return (
        <div id="content">
            <div id="content-header" style={{ borderBottomRightRadius: '4px' , borderBottomLeftRadius: '4px' , borderTopLeftRadius: '4px' , borderTopRightRadius: '4px' }}>
                <ol className="breadcrumb" style={{ marginLeft: '30px'}} >
                    <li><Link to='/mng'> <FontAwesomeIcon icon={faList} /> Portfolios</Link></li>
                </ol>
            </div>
            <div id="content-container">
                <div className="content">
                    <div className="col-md-12">
                        <div className="page-header">
                            <h3 align="left">Manage Portfolios </h3>
                        </div>
                        <PortfolioTable />                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManagePortfolios;
