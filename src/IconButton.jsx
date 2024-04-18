import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Part.css';

const IconButton = ({ href, icon, text, badgeCount, className, isActive }) => {
  const activeClass = isActive ? 'widget-active' : '';

  return (
    <a href={href}>
      <button className={`btn btn-block ${className} ${activeClass}`}>
        <FontAwesomeIcon icon={icon} style={{paddingRight : '5px'}}/> {text} &nbsp;
        <span className="badge badge-pill badge-light">{badgeCount}</span>
      </button>
    </a>
  );
};

export default IconButton;
