import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import './AccountingTable.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dataTables.bootstrap4.min.css';


const AccountingTableHeader = ({ columns }) => {
    return (
        <thead>
            <tr role="row">
                {columns.map((label, index) => (
                    <th
                        key={index}
                        className="sorting"
                        tabIndex="0"
                        aria-controls="account-overview-table"
                        rowSpan="1"
                        colSpan="1"
                        style={{ width: label.width || 'auto' }}
                        aria-label={`${label.name}: activate to sort column ${label.sorting}`}
                    >
                        {label.name}
                        <i className="tablesorter-icon bootstrap-icon-unsorted"></i>
                    </th>
                ))}
            </tr>
        </thead>
    );
}

export default AccountingTableHeader;

