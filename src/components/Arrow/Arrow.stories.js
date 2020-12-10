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
<Arrow direction="arrowRight"/>
);

export const Arrow_Down = () => (
<Arrow direction="arrowDown"/>
);

export const Arrow_Left = () => (
    <Arrow direction="arrowLeft"/>
    );