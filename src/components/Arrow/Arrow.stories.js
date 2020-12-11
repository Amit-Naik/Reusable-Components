import Arrow from './Arrow';
import React from 'react';

export default {
title: 'reusableComponents/Arrow',
component: Arrow,
};

export const Arrow_Up = () => (
<Arrow />
);

export const Arrow_Right = () => (
<Arrow direction="Right"/>
);

export const Arrow_Down = () => (
<Arrow direction="Down"/>
);

export const Arrow_Left = () => (
    <Arrow direction="Left"/>
    );