import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard } from '@fortawesome/free-solid-svg-icons';
import './Part.css';

const Breadcrumb = () => (
  <ol className="breadcrumb" style={{ marginLeft: '30px'}}>
    <li>
      <a href="https://stagingapp.blue222.com/fadmin/dashboard/fain_progress">
        <FontAwesomeIcon icon={faDashboard} /> Dashboard
      </a>
    </li>
    <li>Active Projects</li>
  </ol>
);

export default Breadcrumb;
