import React from 'react';

// In your projects, you can import as follows:
import { MinimalTemplate } from 'payload/components/templates';
import { Button } from 'payload/components/elements';
import { useConfig } from 'payload/components/utilities';



const baseClass = 'custom-minimal-route';

const CustomMinimalRoute = () => {
    const { routes: { admin: adminRoute } } = useConfig();

    return (
        <MinimalTemplate className={baseClass}>
            <h1>Custom Route</h1>
            <p>Here is a custom route that was added in the Payload config.</p>
            <Button
                className={`${baseClass}__login-btn`}
                el="link"
                to={`${adminRoute}/login`}
            >
                Go to Login
            </Button>
            <Button
                el="link"
                to={`${adminRoute}`}
                buttonStyle="secondary"
            >
                Go to Dashboard
            </Button>
        </MinimalTemplate>
    );
};

export default CustomMinimalRoute;