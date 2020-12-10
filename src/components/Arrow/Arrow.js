import React from 'react';
import PropTypes from 'prop-types';
import styles from './Arrow.module.css';
import classNames from 'classnames';

const Arrow = ({direction = "arrowUp"}) => {
    let arrowDirector = null;
        if(direction === "arrowUp") {
            arrowDirector = classNames(styles.Arrow, styles.arrowUp);
        } else if(direction === "arrowDown") {
            arrowDirector = classNames(styles.Arrow, styles.arrowDown);
        } else if(direction === "arrowRight") {
            arrowDirector = classNames(styles.Arrow, styles.arrowRight);
        } else {
            arrowDirector = classNames(styles.Arrow, styles.arrowLeft);
        }
return (
<div className={arrowDirector}>
</div>
);
};


Arrow.propTypes = {

};

export default Arrow;