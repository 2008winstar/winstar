/**
 * @file file description here.
 * @author winstar
 * @date 2017/9/1
 */

import React from 'react';

const Link = ({active, children, onClick}) => {
    if (active) {
        return <span>{children}</span>
    }

    return (
        <a href="#" onClick={e => {e.preventDefault();onClick()}}>
            {children}
        </a>
    )
};

export default Link;
