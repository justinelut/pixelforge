import React from 'react';
import useSWR from 'swr'
import { adminfetcher } from '../api/fetchdata'
import { Chevron } from 'payload/components';
import { useConfig } from 'payload/components/utilities';
import qs from 'qs'


const baseClass = 'after-nav-links';

const Afteras = ({user}) => {
    const {routes: { admin: adminRoute } } = useConfig();

    // const query = {
    //     id: {
    //         equals: user.id
    //     }
    // }

    // const stringifiedQuery = qs.stringify({
    //     where: query
    // }, { addQueryPrefix: true })


    // const { isLoading, data } = useSWR(`/api/account${stringifiedQuery}`, adminfetcher)
    user && console.log(user)
   

    return (
        <div className={baseClass}>
            {/* {isLoading ? "Loading" : console.log(data)} */}
            <span className="nav__label">Pixel Labs</span>
            <nav>

                <a
                    className="nav__link"
                    activeClassName="active"
                    href={`${adminRoute}/purchased`}
                >
                    <Chevron />
                    Projects
                </a>
                <a
                    className="nav__link"
                    activeClassName="active"
                    href={`${adminRoute}/billing`}
                >
                    <Chevron />
                    Billing
                </a>

            </nav>
        </div>
    );
};

export default Afteras;