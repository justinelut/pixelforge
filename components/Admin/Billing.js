import React from 'react';

const baseClass = 'after-dashboard';

const AfterDashboard = () => {
    return (
        <div className={baseClass}>
            <h4>Test Config</h4>
            <p>
                The /test directory is used for create custom configurations and data seeding for developing features, writing e2e and integration testing.
            </p>
        </div>
    );
};

export default AfterDashboard;