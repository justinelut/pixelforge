import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { DefaultTemplate } from 'payload/components/templates';
import { Button, Eyebrow } from 'payload/components/elements';
import { useStepNav } from 'payload/components/hooks';
import { useConfig, Meta } from 'payload/components/utilities';
import useSWR from 'swr'
import { adminfetcher } from '../api/fetchdata'
import qs from 'qs'

const CustomDefaultRoute = ({ user, canAccessAdmin }) => {
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

    if (isLoading) {
        console.log("loading")
    } else {
        console.log(data)
        console.log(user.id)
        console.log(stringifiedQuery)

    }

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
            <Meta
                title="Custom Route with Default Template"
                description="Building custom routes into Payload is easy."
                keywords="Custom React Components, Payload, CMS"
            />
            <Eyebrow />
            <h1>Custom Route</h1>
            <p>Here a route that was added in the Payload config. It uses the Default Template, so the sidebar is rendered.</p>
            <Button
                el="link"
                to={`${adminRoute}`}
                buttonStyle="secondary"
            >
                Go to Dashboard
            </Button>
        </DefaultTemplate>
    );
};

export default CustomDefaultRoute;