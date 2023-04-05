import React from 'react';
import { NavLink } from 'react-router-dom';
import { Chevron } from 'payload/components';
import { useConfig } from 'payload/components/utilities';


const baseClass = 'after-nav-links';

const AfterNavLinks = ({user}) => {
    const { routes: {admin} } = useConfig();
    

    return (
        <div className={baseClass}>
            <span className="nav__label">Custom Routes</span>
            <nav>
                <NavLink
                    className="nav__link"
                    activeClassName="active"
                    exact
                    to={`${admin}/billing`}
                >
                    <Chevron />
                   Billing
                </NavLink>
            </nav>
        </div>
    );
};

export default AfterNavLinks;