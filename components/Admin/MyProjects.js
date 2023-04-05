import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { DefaultTemplate } from 'payload/components/templates';
import { useStepNav } from 'payload/components/hooks';
import { useConfig, Meta } from 'payload/components/utilities';
import useSWR from 'swr'
import { adminfetcher } from '../api/fetchdata'
import qs from 'qs'
import ProjectUi from './ui/Projectui'

const MyProjects = ({ user, canAccessAdmin }) => {
    const query = {
        createdBy: {
            equals: user.id
        }
    }

    const stringifiedQuery = qs.stringify({
        where: query
    }, { addQueryPrefix: true })


    const { routes: { admin: adminRoute } } = useConfig();
    const { setStepNav } = useStepNav();
    const { isLoading, data } = useSWR(`/api/projects${stringifiedQuery}`, adminfetcher)
    

    useEffect(() => {
        setStepNav([
            {
                label: 'Custom Route with Default Template',
            },
        ]);
    }, [setStepNav]);


    // If an unauthorized user tries to navigate straight to this page,
    // Boot 'em out
    if (!user || (user && !canAccessAdmin)) {
        return (
            <Redirect to={`${adminRoute}/unauthorized`} />
        );
    }

   

    return (
        <DefaultTemplate>
            <ProjectUi admin={adminRoute} data={data} isLoading={isLoading}/>
        </DefaultTemplate>
    );
};

export default MyProjects;