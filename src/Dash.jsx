import React from "react";
import "./Part.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEnvelope, faBarChart, faLineChart, faList } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { Link } from "react-router-dom";

// A single button component for reuse
const DashboardButton = ({ href, icon, label, count }) => (
    <div className="col-sm-6 col-md-6 col-lg-2">
        <Link to={href} className="btn btn-block text-left">
            <FontAwesomeIcon icon={icon} /> {label}
            <span className="badge badge-pill badge-light">{count}</span>
        </Link>
    </div>
);

const Dash = () => {
    // Data for each button
    const buttons = [
        { href: "/fadmin/dashboard/fadraft", icon: faEnvelope, label: "Draft RFPs", count: 0, btnClass: "btn-custom widget-active" },
        { href: "/faadmin/dashboard/fapending", icon: faCheckCircle, label: "Pending RFPs", count: 0, btnClass: "btn-success" },
        { href: "/fadmin/dashboard/fain_progress", icon: faBarChart, label: "Active Projects", count: 0, btnClass: "btn-info" },
        { href: "/fadmin/dashboard/fain_pendingReview", icon: faLineChart, label: "Pending Review", count: 0, btnClass: "btn-spl" },
        { href: "/faadmin/dashboard/facomplete", icon: farStar, label: "Projects Completed", count: 0, btnClass: "btn-warning" },
        { href: "/faadmin/dashboard/faall", icon: faList, label: "All", count: 0, btnClass: "btn-danger" }
    ];

    return (
        <div id="content-container">
            <div id="narrow-results" className="narrow-results collapse">
                <div className="row ten-columns" style={{ paddingTop: "15px" }}>
                    {buttons.map((button, index) => (
                        <DashboardButton key={index} {...button} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dash;
