import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { DefaultTemplate } from 'payload/components/templates';
import { useStepNav } from 'payload/components/hooks';
import { useConfig } from 'payload/components/utilities';
import useSWR from 'swr'
import { adminfetcher } from '../api/fetchdata'
import qs from 'qs'
import ProjectUi from './ui/Projectui'
import AdminUi from './ui/adminui'

const MyProjects = ({ user, canAccessAdmin }) => {
    const { setStepNav } = useStepNav();
    const { routes: { admin: adminRoute } } = useConfig();

    const query = {
        id: {
            equals: user && user.id
        }
    }

    const stringifiedQuery = qs.stringify({
        where: query
    }, { addQueryPrefix: true })


    const { data } = useSWR(`/api/account${stringifiedQuery}`, adminfetcher)

    useEffect(() => {
        setStepNav([
            {
                label: 'My projects',
            },
        ]);
    }, [setStepNav]);


    if (!user || (user && !canAccessAdmin)) {
        return (
            <Redirect to={`${adminRoute}/unauthorized`} />
        );
    }





    return (
        <DefaultTemplate>
            <div className="px-2 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-2 lg:py-10">

                {
                    data && data.data.docs[0].roles[0] == 'admin' ? (
                        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                            <AdminUi admin={adminRoute} user={user} userdetails={data} canAccessAdmin={canAccessAdmin} />
                        </div>
                    )
                        :
                        (
                            <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                                <ProjectUi admin={adminRoute} user={user} userdetails={data} canAccessAdmin={canAccessAdmin} />
                            </div>
                        )
                }

            </div>
        </DefaultTemplate>
    );
};

export default MyProjects;