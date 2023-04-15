import React from 'react'
import { DefaultTemplate } from 'payload/components/templates';
import { useLocation, Redirect } from 'react-router-dom';
import useSWR from 'swr'
import { adminfetcher } from '../api/fetchdata'
import qs from 'qs'
import Chat from './ui/Chat'
import { useConfig } from 'payload/components/utilities';

const ProjectDescription = ({ user, canAccessAdmin }) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const { routes: { admin: adminRoute } } = useConfig();
    const projectId = searchParams.get('id');
    const query = {
        id: {
            equals: user && user.id
        }
    }

    const stringifiedQuery = qs.stringify({
        where: query
    }, { addQueryPrefix: true })


    const { data } = useSWR(`/api/account${stringifiedQuery}`, adminfetcher)

    if (!user || (user && !canAccessAdmin)) {
        return (
            <Redirect to={`${adminRoute}/unauthorized`} />
        );
    }

   
    return (
        <DefaultTemplate>
            <Chat admin={adminRoute} projectid={projectId} user={user} canAccessAdmin={canAccessAdmin} userid={user.id} usertype={data && data.data.docs[0].roles[0]} userdetails={data}/>
        </DefaultTemplate >

    );
};

export default ProjectDescription;