import Dropdown from './Dropdown';
import React, {useState} from 'react';
import months from '../../months'



export default {
title: 'reusableComponents/Dropdown',
component: Dropdown,
};

export const Dropdown_1 = () => (
    
<Dropdown months={months}/>
);