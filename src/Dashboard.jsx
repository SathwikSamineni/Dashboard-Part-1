import React from 'react';
import Breadcrumb from './Breadcrumb';
import FilterButton from './FilterButton';
import Buttons from './Buttons';
import './Part.css'; 

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-8">
            <Breadcrumb />
          </div>
          <div className="col-md-2 col-sm-6 col-xs-3">
            <FilterButton count={0} />
          </div>
        </div>
      </div>
      <Buttons />
    </div>
  );
};

export default Dashboard;
