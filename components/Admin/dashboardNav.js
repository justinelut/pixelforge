import React from 'react';
import { NavLink, BrowserRouter } from 'react-router-dom';


// In your projects, you can import as follows:
import { Chevron } from 'payload/components';
import { useConfig } from 'payload/components/utilities';


const baseClass = 'after-nav-links';

const AfterNavLinks = () => {
    const { routes: { admin: adminRoute } } = useConfig();

    return (
        <div className={baseClass}>
            <span className="nav__label">Admin</span>
            <nav>
                <BrowserRouter>
                <NavLink
                    className="nav__link"
                    activeClassName="active"
                    to={`${adminRoute}/purchased`}
                    exact
                >
                    <Chevron />
                    Projects
                </NavLink>
                <NavLink
                    className="nav__link"
                    activeClassName="active"
                    to={`${adminRoute}/billing`}
                    exact
                >
                    <Chevron />
                    Billing
                </NavLink>
                </BrowserRouter>
            </nav>
        </div>
    );
};

export default AfterNavLinks;