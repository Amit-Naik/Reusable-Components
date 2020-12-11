import React from 'react';
import PropTypes from 'prop-types';
import styles from './Arrow.module.css';
import classNames from 'classnames';

const Arrow = ({direction = "Up"}) => {
    let arrowDirector = null;
        if(direction === "Up") {
            arrowDirector = classNames(styles.Arrow, styles.arrowUp);
        } else if(direction === "Down") {
            arrowDirector = classNames(styles.Arrow, styles.arrowDown);
        } else if(direction === "Right") {
            arrowDirector = classNames(styles.Arrow, styles.arrowRight);
        } else if(direction === "Left"){
            arrowDirector = classNames(styles.Arrow, styles.arrowLeft);
        }
return (
    <div className={styles.arrowContainer}>
        <div className={arrowDirector}>
        </div>
    </div>

);
};


Arrow.propTypes = {

};

export default Arrow;