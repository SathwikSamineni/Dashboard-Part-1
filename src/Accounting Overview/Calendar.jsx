import React from "react";
import './daterangepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './Accounting.css';

const Calendar = () => {
    return (
        <div>
            <a id="back-to-top" href="#top" style={{ display: 'none' }}><FontAwesomeIcon icon={faCaretDown} /></a>
            <div className="daterangepicker ltr show-ranges opensright" style={{ display: 'block', top: '218.797px', left: '644.422px', right: 'auto' }}>
                <div className="ranges">
                    <ul>
                        <li data-range-key="Today" className="active">Today</li>
                        <li data-range-key="Yesterday">Yesterday</li>
                        <li data-range-key="Last 7 Days">Last 7 Days</li>
                        <li data-range-key="Last 30 Days">Last 30 Days</li>
                        <li data-range-key="This Month">This Month</li>
                        <li data-range-key="Last Month">Last Month</li>
                        <li data-range-key="Custom Range">Custom Range</li>
                    </ul>
                </div>
                <div className="drp-calendar left">
                    <div className="calendar-table">
                        <table className="table-condensed">
                            <thead>
                                <tr>
                                    <th className="prev available"><span></span></th>
                                    <th colSpan="5" className="month">Apr 2024</th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Calendar body goes here */}
                            </tbody>
                        </table>
                    </div>
                    <div className="calendar-time" style={{ display: 'none' }}></div>
                </div>
                <div className="drp-calendar right">
                    <div className="calendar-table">
                        <table className="table-condensed">
                            {/* Calendar table for next month goes here */}
                        </table>
                    </div>
                    <div className="calendar-time" style={{ display: 'none' }}></div>
                </div>
                <div className="drp-buttons">
                    <span className="drp-selected">04/23/2024 - 04/23/2024</span>
                    <button className="cancelBtn btn btn-sm btn-default" type="button">Cancel</button>
                    <button className="applyBtn btn btn-sm btn-primary" type="button">Apply</button>
                </div>
            </div>
        </div>
    );
}

export default Calendar;
