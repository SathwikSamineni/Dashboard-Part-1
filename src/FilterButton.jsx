import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import './Part.css';

const FilterButton = ({ count }) => (
  <>
    <button className="btn btn-warning btn-sm" style={{ marginTop: '8px' }} id="dashboardFilter">
      <FontAwesomeIcon icon={faFilter} /> Filter
    </button>
    <span className="badge badge-pill badge-light notif-badge" style={{ top: '2px', marginLeft: '1px' }} title="No Filters Selected">
      {count}
    </span>
  </>
);

export default FilterButton;


