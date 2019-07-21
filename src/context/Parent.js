import React from 'react';
import { Child } from './Child';

function Parent(props) {
    return (
        <span>{'PARENT -> '} <Child /></span>
    );
};

export { Parent }; 