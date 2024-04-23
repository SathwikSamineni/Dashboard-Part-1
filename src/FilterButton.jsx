// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFilter } from '@fortawesome/free-solid-svg-icons';
// import './Part.css';
// import Filter from './FILTER/Filter';

// const FilterButton = ({ count }) => {
//     // Define a state variable to control the visibility of the Filter component
//     const [isFilterVisible, setIsFilterVisible] = useState(false);

//     // Handler function to toggle the visibility of the Filter component
//     const handleClick = () => {
//         setIsFilterVisible(true);
//     };

//     // Handler function to close the Filter component
//     const handleClose = () => {
//         setIsFilterVisible(false);
//     };

//     return (
//         <div>
//             {/* Filter button with click event handler */}
//             <button
//                 className="btn btn-warning btn-sm"
//                 style={{ marginTop: '8px' }}
//                 id="dashboardFilter"
//                 onClick={handleClick}
//             >
//                 <FontAwesomeIcon icon={faFilter} /> Filter
//             </button>
//             {/* Display the badge count */}
//             <span
//                 className="badge badge-pill badge-light notif-badge"
//                 style={{ top: '2px', marginLeft: '1px' }}
//                 title="No Filters Selected"
//             >
//                 {count}
//             </span>

//             {/* Full-screen overlay for the Filter component */}
//             {isFilterVisible && (
//                 <div
//                     className="full-screen-overlay"
//                     style={{
//                         position: 'fixed',
//                         top: 0,
//                         left: 0,
//                         width: '100%',
//                         height: '100%',
//                         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//                         zIndex: 9999,
//                     }}
//                     onClick={handleClose}
//                 >
//                     <div
//                         className="filter-container"
//                         style={{
//                             backgroundColor: 'white',
//                             padding: '16px',
//                             margin: 'auto',
//                             width: '80%',
//                             height: '80%',
//                             overflowY: 'auto',
//                         }}
//                         onClick={(e) => e.stopPropagation()} // Prevent clicks inside the container from closing the overlay
//                     >
//                         {/* Close button */}
//                         <button
//                             style={{ position: 'absolute', top: '8px', right: '8px' }}
//                             onClick={handleClose}
//                         >
//                             Close
//                         </button>
//                         {/* The Filter component */}
//                         <Filter />
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default FilterButton;


import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import './Part.css';
import Filter from './FILTER/Filter';

const FilterButton = ({ count }) => {
    
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const handleClick = () => {
        setIsFilterVisible((prevState) => !prevState);
    };

    return (
        <div>
            <button
                className="btn btn-warning btn-sm"
                style={{ marginTop: '8px' }}
                id="dashboardFilter"
                onClick={handleClick}
            >
                <FontAwesomeIcon icon={faFilter} /> Filter
            </button>
            
            <span
                className="badge badge-pill badge-light notif-badge"
                style={{ top: '2px', marginLeft: '1px' }}
                title="No Filters Selected"
            >
                {count}
            </span>
            {isFilterVisible && (
                <div
                    className="filter-container"
                    style={{
                        backgroundColor: 'white',
                        padding: '16px',
                        marginTop: '8px',
                        width: '1101px', // Set the width of the container
                        height: '145.19px', // Set the height of the container
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                    }}
                >
                    <Filter />
                </div>
            )}
        </div>
    );
};

export default FilterButton;




