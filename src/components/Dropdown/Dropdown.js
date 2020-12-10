import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Dropdown.module.css';
import months from '../months'

const Dropdown = props => {
    const [selectedMonth, setSelectedMonth] = useState(months[0].month);

return (
<div className={styles.Dropdown }>
    <button className={styles.dropbtn}>{selectedMonth}</button>
    <div className={styles.dropDownContent} >
        {months.map((month) => {
            return <p className={styles.dropDownValue} key={month.id} onClick={() => setSelectedMonth(month.month)}>{month.month}</p>
        })}
    </div>
</div>
);
};


Dropdown.propTypes = {

};

export default Dropdown;