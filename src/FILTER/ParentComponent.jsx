import React, { useState } from 'react';
import FilterButton from '../FilterButton';
import Filter from './Filter';

const ParentComponent = () => {
    const [formVisible, setFormVisible] = useState(false);
    const [filterCount, setFilterCount] = useState(0); // Adjust this as needed

    const toggleFormVisibility = () => {
        setFormVisible(!formVisible);
    };

    return (
        <div>
            {/* Pass the toggleFormVisibility function as a prop to FilterButton */}
            <FilterButton count={filterCount} onClick={toggleFormVisibility} />

            {/* Render the Filter component and pass formVisible as a prop */}
            {formVisible && <Filter />}
        </div>
    );
};

export default ParentComponent;
